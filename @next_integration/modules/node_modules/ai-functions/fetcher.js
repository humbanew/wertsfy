const headers = {
  'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  'Content-Type': 'application/json',
}
const openaiFetch = obj => fetch('https://api.openai.com/v1/chat/completions', { method: 'POST', headers, body: JSON.stringify(obj) }).then(res => res.json())

const openaiStream = obj => fetch('https://api.openai.com/v1/chat/completions', { method: 'POST', headers, body: JSON.stringify(obj) })


const response = await openaiStream({ 
	model: 'gpt-3.5-turbo',
	messages: [{ role: 'user', content: 'Tell me a funny joke about OpenAI' }],
	stream: true
})

const decoder = new TextDecoder('utf-8')
let completion = ''

try {
	for await (const chunk of response.body) {
		let done = false
		const currentChunk = decoder.decode(chunk)
		const lines = currentChunk.split('\n').filter(Boolean)
		// console.log(lines)
		for (const line of lines) {
			if (line.includes('[DONE]')) { 
				done = true 
				break
			}
			try {
				const data = JSON.parse(line.replace('data: ', ''))
				if (data.choices[0].delta.content) {
					const deltaContent = data.choices[0].delta.content
					completion += deltaContent
					console.log(deltaContent)
				}
				// console.log(chunks)
			} catch (error) {
				console.log(error.message, line)
			}
		}
		if (done) break
	}
} catch (err) {
	console.error(err.stack);
}
console.log({ completion })

