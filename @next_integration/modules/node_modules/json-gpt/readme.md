# 🔍 Introducción a Json-GPT
Json-GPT es una librería para Node.js escrita en TypeScript que proporciona una interfaz para interactuar con el modelo de lenguaje GPT-3.5-turbo de OpenAI. Con Json-GPT, puedes realizar solicitudes a GPT-3.5-turbo para resolver preguntas, generar texto, mantener conversaciones en tiempo real y mucho más, todo ello usando objetos JSON.

La librería Json-GPT ofrece tres métodos principales para interactuar con GPT-3.5-turbo: solve, solveJson y solveChat. Estos métodos te permiten enviar solicitudes a GPT-3.5-turbo con diferentes formatos de entrada y obtener respuestas generadas por el modelo.

## 💡 Características
* <span style="color:blue">**Ts**</span>. **Interfaz en TypeScript:** Json-GPT está escrita en TypeScript, lo que significa que ofrece una interfaz con tipos de datos fuertemente tipados para una mejor experiencia de desarrollo en entornos TypeScript.

* **{...}** **Solicitud en formato JSON:** Json-GPT permite enviar solicitudes a GPT-3.5-turbo en formato JSON, lo que facilita la creación de solicitudes estructuradas y personalizadas.

* ✔️ **Validación de esquema con Zod:** Json-GPT utiliza la librería Zod para validar los datos de entrada y salida, lo que ayuda a garantizar que los datos enviados y recibidos sean válidos y cumplan con las expectativas del usuario.

* ✏️ **Configuración personalizable:** Json-GPT proporciona opciones de configuración que permiten personalizar el comportamiento de las solicitudes, como la verbosidad de las respuestas y campos personalizados adicionales.




## 📋  Requisitos previos
Antes de usar Json-GPT, asegúrate de tener instalado Node.js en tu entorno de desarrollo. Además, necesitarás incluir en el archivo ```.env``` tu ```OPENAI_API_KEY``` para poder realizar solicitudes a través de la API de OpenAI.

## 🔧 Instalación

Para instalar Json-GPT en tu proyecto, puedes usar npm. Ejecuta el siguiente comando en tu terminal:

```bash
npm install json-gpt
```

Una vez instalada la librería, puedes importarla en tus archivos TypeScript y comenzar a utilizarla en tu código.

## 💊 Uso

### solve
```typescript
import { SolveRequest, SolveRequestOptions, SolveResponse, solve } from 'json-gpt'

const request: SolveRequest = 'Cual es el nombre del jugador que es el mayor anotador de la historia de la NBA? Aporta informacion extra sobre el jugador y el numero de partidos jugados'

const options: SolveRequestOptions = {
    verbose: true
}

solve(request, options).then((response: SolveResponse) => {
    console.log('SOLVE RESPONSE', response)
})

```

### solveJson
```typescript
import { SolveRequestOptions, SolveJsonRequest, SolveJsonResponse, solveJson  } from 'json-gpt';
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
```

### solveChat
```typescript
import { z } from "zod";
import { SolveChatRequest, solveChat, SolveJsonResponse, SolveRequestOptions } from "json-gpt";

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
```

