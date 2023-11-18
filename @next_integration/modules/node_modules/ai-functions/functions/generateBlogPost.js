export const generateBlogPost = {
  name: 'generateBlogPost',
  description: 'Generate high-converting marketing content for a landing page',
  parameters: {
    type: 'object',
    properties: {
      title: { type: 'string', description: 'The title of the Blog Post' },
      tags: { type: 'array', items: { type: 'string' } },
      markdown: { type: 'string', description: 'The content of the Blog Post in Markdown format' },
    }
  }
}