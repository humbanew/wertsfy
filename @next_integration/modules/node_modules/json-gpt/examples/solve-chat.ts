import { z } from "zod";
import { SolveChatRequest, solveChat } from "../solve/solve-chat";
import { SolveJsonResponse } from "../solve/solve-json";
import { SolveRequestOptions } from "../solve/solve";

interface Message {
    message: string; // WORKS BAD WITH ONLY THE MESSAGE PROP
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
    safeKey: 'message', // KEY WITH RESULTS IN CASE OF PARSING ERROR
    custom: {
        available_tools: ['READ_FILE','WRITE_FILE'],
        user_name: 'JAL'
    } // Put here your custom fields
}

const options: SolveRequestOptions = {
    verbose: true
}

solveChat(request,options).then((response: SolveJsonResponse<Message>) => {
    console.log('Message: ', response)
})