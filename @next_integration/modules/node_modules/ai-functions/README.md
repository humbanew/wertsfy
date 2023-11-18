# AI Functions

Library for Developing and Managing AI Functions (including OpenAI GPT4 / GPT3.5)

Key Features: 
- Enables easy development of AI functions

```javascript
import { AI } from 'ai-functions'

const { ai, gpt, list } = AI({ apiKey: OPENAI_API_KEY })
```

Then you can use magic `ai` functions:
```javascript

const categorizeProduct = ai.categorizeProduct({ 
  productType: 'App | API | Marketplace | Platform | Packaged Service | Professional Service | Website',
  customer: 'ideal customer profile in 3-5 words',
  solution: 'describe the offer in 4-10 words',
  description: 'website meta description',
})

const product = await (categorizeProduct({ domain: name }))
```

you can also use `list` tagged template as a convienence function:

```javascript
const things = await list`fun things to do in Miami`
console.log(things)
```

or with Async iterators:

```javascript
for await (const thing of list`fun things to do in Miami`) {
  console.log(thing)
}
```

Or in a more complex example:

```javascript
const listBlogPosts = (count, topic) => list`${count} blog post titles about ${topic}`
const writeBlogPost = title => gpt`write a blog post in markdown starting with "# ${title}"`

async function* writeBlog(count, topic) {
  for await (const title of listBlogPosts(count, topic)) {
    const content = await writeBlogPost(title)
    yield { title, content }
  }
}

for await (const post of writeBlog(25, 'future of car sales')) {
  console.log({ post })
}
```