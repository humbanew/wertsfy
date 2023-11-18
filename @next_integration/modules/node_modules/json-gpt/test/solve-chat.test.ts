import { z } from "zod";
import { SolveRequestOptions, openai } from "../solve/solve";
import { SolveChatRequest, solveChat } from "../solve/solve-chat";
import { SolveJsonResponse } from "../solve/solve-json";

describe('Solve Chat Integration', () => {


    it('Should response following the schema and including the available tools in the message', async ()=> {
        interface Message {
            message: string; 
            suggestions: Array<string>
        }
        
        const request: SolveChatRequest<Message> = {
            instructions: 'You are Roger, a Smart Chat Assistant powered by GPT-3.5-turbo!',
            messages: [
                {
                    role: 'user',
                    message: 'Hola, quien eres? Como te llamas? Que herramientas estan disponibles?',
                    data: {}
                }
            ],
            zodSchema: z.object({
                message: z.string().describe('Yout message to the user'),
                suggestions: z.string().array().describe('Suggested questions')
            }).describe('Message'),
            safeKey: 'message', 
            custom: {
                available_tools: ['READ_FILE','WRITE_FILE']
            } 
        }
        
        const options: SolveRequestOptions = {
            verbose: false
        }
        
        const response: SolveJsonResponse<Message> = await solveChat(request,options)

        expect(response).toHaveProperty('status');
        expect(response).toHaveProperty('data');

        if ('error' in response.data) {
            expect(response.status).not.toBe(200);
        } else {
            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty('message');
            expect(response.data).toHaveProperty('suggestions');
            expect(response.data.message).toContain('READ_FILE');
            expect(response.data.message).toContain('WRITE_FILE');
        }
    },40000)

})

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

        interface Message {
            message: string; 
            suggestions: Array<string>
        }
        
        const request: SolveChatRequest<Message> = {
            instructions: 'You are Roger, a Smart Chat Assistant powered by GPT-3.5-turbo!',
            messages: [
                {
                    role: 'user',
                    message: 'Hola, quien eres? Como te llamas? Que herramientas estan disponibles? Sabes como me llamo?',
                    data: {}
                }
            ],
            zodSchema: z.object({
                message: z.string().describe('Yout message to the user'),
                suggestions: z.string().array().describe('Suggested questions')
            }).describe('Message'),
            safeKey: 'message', 
            custom: {
                available_tools: ['READ_FILE','WRITE_FILE'],
                user_name: 'JAL'
            } 
        }
        
        const options: SolveRequestOptions = {
            verbose: false
        }
        
        const response: SolveJsonResponse<Message> = await solveChat(request,options)
    
        // Check that the OpenAI API was called 
        expect(openai.createChatCompletion).toHaveBeenCalledTimes(1);
    
        // Check that the response contains the correct data
        expect(response.status).toEqual(500);
    });

})