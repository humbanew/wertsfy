import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}))

export async function gpt(
  literals: string | readonly string[],
  ...args: any[]
): Promise<string> {
  if (typeof literals === 'string') {
    literals = [literals]
  }
  let str = literals[0]
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg && arg.kind === 'Document') {
      str += arg.loc.source.body
    } else {
      str += arg
    }
    str += literals[i + 1]
  }
  const res = await openai.createChatCompletion({
    messages: [{ role: 'user', content: str, }],
    model: 'gpt-3.5-turbo',
  })
  return res.data.choices[0]?.message?.content ?? str
}
