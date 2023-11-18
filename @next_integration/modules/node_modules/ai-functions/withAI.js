import { AI } from './proxy.js'

export const withAI = options => (req, env) => {
  const { ai, gpt, list } = AI({ apiKey: env.OPENAI_API_KEY, ...options })
  env.ai = ai
  env.gpt = gpt
  env.list = list
}