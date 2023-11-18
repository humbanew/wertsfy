import { z } from "zod";
import { SolveRequestOptions, openai } from "../solve/solve";
import * as s from '../solve/solve-json'
import { SolveJsonRequest, SolveJsonResponse, fullParse, solveJson } from "../solve/solve-json";

describe('Integration solveJson', () => {

    it('Kareem Abdul-Jabbar ha jugado 1560 partidos y es el maximo anotador de la NBA', async () => {

        interface Player {
            name: string;
            extra_info: string;
            partidos_jugados: number;
        }

        const request: SolveJsonRequest<Player> = {
            instructions: 'Aporta informacion extra sobre el jugador.',
            data: {
                requisitos: 'Debe ser el jugador con mas anotaciones de la historia de la NBA'
            },
            target: {
                key: 'question',
                value: 'Cual es el nombre del jugador que cumple los requisitos?'
            },
            zodSchema: z.object({
                name: z.string().describe('Nombre del jugador'),
                extra_info: z.string().describe('Informacion extra sobre el jugador'),
                partidos_jugados: z.number().describe('Numero de partidos jugados')
            }).strict().describe('Jugador')
        }

        const options: SolveRequestOptions = {
            verbose: false
        }

        // Call the solve function
        const response: SolveJsonResponse<Player> = await solveJson(request, options)

        expect(response).toHaveProperty('status');
        expect(response).toHaveProperty('data');

        if ('error' in response.data) {
            expect(response.status).not.toBe(200);
        } else {
            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty('name');
            expect(response.data).toHaveProperty('extra_info');
            expect(response.data).toHaveProperty('partidos_jugados');
            expect(response.data.name).toBe('Kareem Abdul-Jabbar');
            expect(response.data.partidos_jugados).toBe(1560);
        }


    }, 40000)

});

describe('Bad Request', () => {

    // Mock OpenAI API response
    const mockGPTError = { 
        response: {
        statusText: 'Not Found',
        status: 500,
        data: { error: {message: 'Error Message'} }
        }
    };

    beforeEach(() => {
        // Mock OpenAI API call
        jest.spyOn(openai,'createChatCompletion').mockRejectedValue(mockGPTError as any);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    beforeEach(() => {
        // Mock OpenAI API call
        jest.spyOn(openai,'createChatCompletion').mockRejectedValue(mockGPTError as any);
      });
    
      afterEach(() => {
        jest.restoreAllMocks();
      });
    
    it('Should return 500', async () => {

        interface Player {
            name: string;
            extra_info: string;
            partidos_jugados: number;
        }

        const request: SolveJsonRequest<Player> = {
            instructions: 'Aporta informacion extra sobre el jugador.',
            data: {
                requisitos: 'Debe ser el jugador con mas anotaciones de la historia de la NBA'
            },
            target: {
                key: 'question',
                value: 'Cual es el nombre del jugador que cumple los requisitos?'
            },
            zodSchema: z.object({
                name: z.string().describe('Nombre del jugador'),
                extra_info: z.string().describe('Informacion extra sobre el jugador'),
                partidos_jugados: z.number().describe('Numero de partidos jugados')
            }).describe('Player')
        }

        const options: SolveRequestOptions = {
            verbose: false
        }

        // Call the solve function
        const response: SolveJsonResponse<Player> = await solveJson(request, options)
    
        // Check that the OpenAI API was called 
        expect(openai.createChatCompletion).toHaveBeenCalledTimes(1);
    
        // Check that the response contains the correct data
        expect(response.status).toEqual(500);
    });

})

describe('solveParseError', () => {

    // Mock OpenAI API response
    const mocksolveJSONResponse = { 
        status: 200,
        data: { choices: [{message:{content: '{\"name\":\"test\"}'}}] }
    };



    beforeEach(() => {
        // Mock OpenAI API call
        jest.spyOn(openai,'createChatCompletion').mockReturnValue(mocksolveJSONResponse as any);
      });
    
      afterEach(() => {
        jest.restoreAllMocks();
      });
    
    it('Should return the corrected json object', async () => {

        const result = await fullParse<{name:string}>('{name:"test"}',z.object({ name: z.string() }), false)
    
        // Check that the OpenAI API was called 
        expect(openai.createChatCompletion).toHaveBeenCalledTimes(1);
    
        // Check that the response contains the correct data
        expect(result.status).toEqual(200);
        expect(result.data).toHaveProperty('name')
        expect(result.data.name).toBe('test')
    });




})
describe('solveParseError', () => {

    // Mock OpenAI API response
    const mocksolveJSONResponse = { 
        status: 200,
        data: { choices: [{message:{content: '{name\":\"test\"}'}}] }
    };



    beforeEach(() => {
        // Mock OpenAI API call
        jest.spyOn(openai,'createChatCompletion').mockReturnValue(mocksolveJSONResponse as any);
      });
    
      afterEach(() => {
        jest.restoreAllMocks();
      });

    it('Should fail with parsing error', async () => {

        const result = await fullParse('{name:"test"}',z.object({ name: z.string() }), false)

        // Check that the OpenAI API was called 
        expect(openai.createChatCompletion).toHaveBeenCalledTimes(1);

        // Check that the response contains the correct data
        expect(result.status).toEqual(1);
        expect(result.data).toHaveProperty('error')
        expect(result.data.error).toBe('ERROR PARSING HANDLED PARSE ERROR')
    });
})

describe('solveParseError', () => {

    // Mock OpenAI API response
    const mocksolveJSONResponse = { 
        status: 200,
        data: { choices: [{message:{content: '{\"name\":\"test\"}'}}] }
    };



    beforeEach(() => {
        // Mock OpenAI API call
        jest.spyOn(openai,'createChatCompletion').mockReturnValue(mocksolveJSONResponse as any);
      });
    
      afterEach(() => {
        jest.restoreAllMocks();
      });

    it('Should fail ZOD PARSE', async () => {

        const result = await fullParse('{"name":"test"}',z.object({ name: z.number() }), false)

        // Check that the OpenAI API was called 
        expect(openai.createChatCompletion).toHaveBeenCalledTimes(0);

        // Check that the response contains the correct data
        expect(result.status).toEqual(2);
        expect(result.data).toHaveProperty('error')
        expect(result.data.error).toBe('ZOD PARSE ERROR')
    });
})
