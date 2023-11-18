import { SolveRequestOptions } from '../solve/solve';
import { SolveJsonRequest, SolveJsonResponse, solveJson } from '../solve/solve-json'
import { z } from 'zod'

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

solveJson(
    request,
    options
).then((response: SolveJsonResponse<Player>) => {
    console.log('Player', response.data)
})