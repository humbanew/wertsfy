/**
 * Module for solving requests using the OpenAI GPT-3 API.
 * @module solveChat
 */

import { ChatCompletionRequestMessage } from "openai";
import { z } from "zod";
import { SolveRequestOptions, solve } from "./solve"
import { getJsonSchema } from './utils'
import { SolveJsonResponse, fullParse, handleError } from "./solve-json";

/**
 * Represents a system message in a conversation.
 * @interface SystemMessage
 * @property {string} role - The role of the message, which should be set to 'system'.
 * @property {any} [key] - Additional key-value pairs for custom data.
 */
export interface SystemMessage {
    role: 'system';
    [key: string]: any;
}

/**
 * Represents a user message in a conversation.
 * @interface UserMessage
 * @property {string} [role='user'] - The role of the message, which should be set to 'user'.
 * @property {string} message - The content of the message from the user.
 * @property {Object} data - Additional key-value pairs for custom data.
 */
export interface UserMessage {
    role: 'user';
    message: string;
    data: { [key: string]: any };
}

/**
 * Represents an assistant message in a conversation.
 * @interface AIMessage
 * @property {string} [role='assistant'] - The role of the message, which should be set to 'assistant'.
 * @property {string} message - The content of the message from the assistant, if any.
 * @property {Object} action - Additional key-value pairs for custom data, if any.
 */
export type AIMessage = {
    role: 'assistant';
} & ({
    message: string;
} | {
    action?: {[key: string]: any };
})

/**
 * Represents a conversation in the form of an array of system, user, and assistant messages.
 * @typedef {Array<SystemMessage | UserMessage | AIMessage>} Conversation
 */
export type Conversation = Array<UserMessage | AIMessage | SystemMessage>

/**
 * Represents a request for solving a chat-based language model.
 * @interface SolveChatRequest
 * @template Output - The expected output schema for the assistant's response.
 * @property {string} instructions - Instructions for the assistant on how to respond to the conversation.
 * @property {Conversation} messages - The conversation in the form of an array of system, user, and assistant messages.
 * @property {z.ZodType<Output>} zodSchema - The Zod schema for validating the output of the assistant's response.
 * @property {Object} custom - Additional custom data to be included in the request.
 * @property {string} [safeKey] - An optional safe key for safe content filtering.
 */
export interface SolveChatRequest<Output extends object> {
    instructions: string;
    messages: Conversation;
    zodSchema: z.ZodType<Output>;
    custom: {
        [key: string]: any
    };
    safeKey?: string;
}

/**
 * Solves a chat-based language model.
 * @async
 * @function solveChat
 * @param {SolveChatRequest<Output>} json - The request object for solving the chat-based language model.
 * @param {SolveRequestOptions} [options] - Additional options for the request, such as verbosity and safe key.
 * @returns {SolveChatResponse<Output>} - The response object containing the assistant's response.
 */
export async function solveChat<Output extends object>(json: SolveChatRequest<Output>, options?: SolveRequestOptions): Promise<SolveJsonResponse<Output>> {
    
    const verbose = options?.verbose || false

    const jsonSchema = getJsonSchema(json.zodSchema, 'Output')

    const messages = formatMessages(json.messages)

    const solved = await solve([{
            role: 'system',
            content: JSON.stringify({
                instructions: `Read the data, the conversation and use your knowledge to respond to it following this instructions and the outputSchema. ${json.instructions} \n\n Your output must be a json based on outputSchema. Your output will de parsed to JSON so do not output plain text!`,
                outputSchema: jsonSchema,
                data: { ...json.custom }
            })
        },
        ...messages
         // CORTAR CON CONTADOR DE TOKENS Y CON EMMBEDDINGS BASADOS EN LOS DOS ULTIMOS MENSAJES ??
    ], options)
    
    if (solved.status === 200) return fullParse(solved.data, json.zodSchema,verbose,json.safeKey)

    const data = JSON.parse(solved.data)
    if (verbose) console.log('SOLVE ERROR', data)
    return handleError(solved.status, data.error, data.text, verbose)

}

/**
 * Formats the conversation messages into the required format for chat completion API.
 * @function formatMessages
 * @param {Conversation} messages - The conversation in the form of an array of system, user, and assistant messages.
 * @returns {Array<ChatCompletionRequestMessage>} - The formatted messages for chat completion API.
 */
function formatMessages(messages: Conversation): Array<ChatCompletionRequestMessage> {

    const important = {
        important: "Dont forget to output following the outputSchema!"
    }
    
    const lastUserMessageIndex = messages.reverse().findIndex(m =>m.role === 'user')!

    return messages.map((message, index) => {
        const { role, ...content } = message

        let processedContent = {}

        if (index === lastUserMessageIndex) {
            processedContent = {
                ...content,
                ...important
            }
        } else processedContent = { ...content }

        return ({
            role,
            content: JSON.stringify(processedContent)                
        }) as ChatCompletionRequestMessage
    }).reverse()
}