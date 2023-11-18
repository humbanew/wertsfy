import { encoding_for_model } from '@dqbd/tiktoken'
import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema';

const tiktoken = encoding_for_model('gpt-3.5-turbo')

export function countChatTokens(messages: Array<{ content: string; }>): number {
    const tokens = tiktoken.encode(messages.map(m => m.content).join(' '))
    return tokens.length + ( messages.length * 5 ) + 3
}

export function getJsonSchema(schema: z.ZodType, name: string) {
    const { $schema, ...jsonSchema } = zodToJsonSchema(schema, name)
    return jsonSchema
}