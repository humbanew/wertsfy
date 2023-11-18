export const generateLandingPage = {
  name: 'generateLandingPage',
  description: 'Generate high-converting marketing content for a landing page',
  parameters: {
    type: 'object',
    properties: {
      title: { type: 'string', description: 'The title of the landing page' },
      description: { type: 'string', description: 'The description of the landing page' },
    }
  }
}