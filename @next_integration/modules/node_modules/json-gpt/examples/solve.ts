import { SolveRequest, SolveRequestOptions, SolveResponse, solve } from '../solve/solve'

const request: SolveRequest = 'Cual es el nombre del jugador que es el mayor anotador de la historia de la NBA? Aporta informacion extra sobre el jugador y el numero de partidos jugados'

const options: SolveRequestOptions = {
    verbose: true
}

solve(request, options).then((response: SolveResponse) => {
    console.log('SOLVE RESPONSE', response)
})
