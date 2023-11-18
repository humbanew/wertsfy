/**
 * Module for solving requests using the OpenAI GPT-3 API.
 * @module solveJson
 */

import { SolveRequestOptions, solve } from "./solve"
import { z } from "zod";
import { getJsonSchema } from "./utils"


/**
 * Function for solving a parse error that occurs while trying to parse JSON from text.
 * @function
 * @async
 * @param {string} text - The text that contains the JSON string.
 * @param {string} error - The error message that describes the parse error.
 * @returns {Promise<SolveResponse>} - A promise that resolves to the corrected JSON string, or a JSON object with a "message" property containing the original text if the text does not contain a valid JSON string.
 */
async function solveParseError(text: string, error: string, textKey: string = 'text') { return solve(
`
###INSTRUCTIONS:
Catched error while trying to parse JSON from text. The text may contain a json string, read the error and correct it without modifing the content.
If the text do not contain a json string please return it like this "{"${textKey}":"text..."}" Make sure to scape all line breaks and bad characters!.

###ERROR:
${error}

###TEXT:
${text}
`)}

/**
 * Interface for a JSON solving request.
 * @interface
 * @template Output - The expected output type of the solved JSON.
 * @property {string} instructions - Instructions for solving the JSON.
 * @property {object} target - The target object to solve within the JSON.
 * @property {string} target.key - The key of the target object.
 * @property {string} target.value - The value of the target object.
 * @property {string} safeKey? - The key name of the return strinc content in case of json parse fail.
 * @property {z.ZodType<Output>} zodSchema - The Zod schema for indicating the model the output format and validating it.
 * @property {object} data - Additional data to be passed to the solving function.
 */
export interface SolveJsonRequest<Output extends object> {
    instructions: string;
    target: {
        key: string;
        value: string;
    };
    safeKey?: string;
    zodSchema: z.ZodType<Output>;
    data: {
        [key: string]: any
    }
}

/**
 * Type for the response of a JSON solving request.
 * @typedef {Object} SolveJsonResponse
 * @property {number} status - The status code of the response.
 * @property {Output} data - The data returned by the solving function, if successful.
 * @property {Object} data.error - The error object returned by the solving function, if unsuccessful.
 * @property {string} data.text - The original text input to the solving function.
 */
export type SolveJsonResponse<Output extends object> = {
    status: number;
    data: Output;
} | {
    status: number;
    data: { error: any; text: string; }
}

/**
 * Function for solving a request from a JSON object using the OpenAI GPT-3.5-turbo API. Solves the target based on the provided instructions and schema.
 * @function
 * @async
 * @template Output - The expected output type of the solved JSON.
 * @param {SolveJsonRequest<T>} json - The JSON request object containing instructions, target, schema, and data.
 * @param {SolveRequestOptions} options - Optional options for the solving process.
 * @returns {Promise<SolveJsonResponse<T>>} - A promise that resolves to the solved JSON response.
 */
export async function solveJson<Output extends object>(json: SolveJsonRequest<Output>, options?: SolveRequestOptions): Promise<SolveJsonResponse<Output>> {

    const verbose = options?.verbose || false

    const jsonSchema = getJsonSchema(json.zodSchema, 'Output')

    const solved = await solve([{
        role: 'system',
        content: JSON.stringify({
            instructions: `Read the data, the ${json.target.key} and use your knowledge to respond to it following this instructions and the outputSchema. ${json.instructions} \n\n Your output must be a json following the exact outputSchema. IMPORTANT: Your output will de parsed to JSON so do not output plain text!`,
            outputSchema: jsonSchema,
            [json.target.key]: json.target.value,
            data: json.data
        })
    }
    ], options)

    if (solved.status === 200) return fullParse(solved.data, json.zodSchema,verbose,json.safeKey)

    const data = JSON.parse(solved.data)
    if (verbose) console.log('SOLVE ERROR', data)
    return handleError(solved.status, data.error, data.text, verbose)
}

/**
 * Handles an error response from the OpenAI API.
 * @param {SolveApiResponse} solved - The response from the OpenAI API.
 * @param {SolveJsonRequest<Output>} json - The JSON request object.
 * @param {boolean} verbose - Whether to log verbose output or not.
 * @returns {SolveJsonResponse<Output>} - The solved JSON response.
 */
async function handleParseError<Output extends object>(text: string, error: string, z: z.ZodType<Output>, verbose: boolean, safeKey?: string): Promise<SolveJsonResponse<Output>> {
    if (verbose) console.log('PARSE ERROR', text, error)
    const solved = await solveParseError(text,error,safeKey)
    if (verbose) console.log('SOLVED?', solved)
    if (solved.status === 200) try { 
        return {
            status: solved.status,
            data: JSON.parse(solved.data)
        }
    } catch(error: any) {
        return handleError(1,'ERROR PARSING HANDLED PARSE ERROR', error.message, verbose)
    }
    return handleError(solved.status,'ERROR SOLVING HANDLED PARSE ERROR', solved.data, verbose)
}

export function handleError<Output extends object>(status: number, error: string, message: string, verbose: boolean): SolveJsonResponse<Output> {
    if (verbose) console.error(`STATUS: ${status}`,`ERROR: ${error}: ${message}`)
    return {
        status,
        data: { error, text: message }
    }
}

export function fullParse<Output extends object>(text: string, z: z.ZodType<Output>, verbose: boolean, safeKey?: string) {
    try {
        const open = text.indexOf('{')
        const close = text.lastIndexOf('}')
        const json = text.slice(open,close+1)
        const obj = JSON.parse(json)
        return zodParse(obj,z,verbose)
    } catch (error: any) {
        return handleParseError(text,error.message,z,verbose,safeKey)
    }
}

function zodParse<Output extends object>(obj: Output, z: z.ZodType<Output>, verbose: boolean): SolveJsonResponse<Output> {
    const zParse = z.safeParse(obj)
    if (zParse.success) return {
        status: 200,
        data: obj
    }
    return handleError(2,'ZOD PARSE ERROR',zParse.error.message,verbose)
}