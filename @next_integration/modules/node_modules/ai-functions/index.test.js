import { describe, test, it, expect } from 'vitest'

import { AI } from './index.js'
const { ai, list, gpt } = AI()

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('getJsonSchema', () => {

  const jsonSchema = schema({ 
    name: 'The name of the person',
    age: 'The age of the person' 
  })

  expect(jsonSchema).toEqual({ 
    type: 'object', 
    properties: { 
      name: { type: 'string', description: 'The name of the person' }, 
      age: { type: 'string', description: 'The age of the person' } }, 
      required: ['name', 'age']
  })

})

test('list', () => {

})

test('ai', () => {
  expect(ai.writeLandingPage({
    brand: 'Auto.dev',
    audience: 'developers',
    offers: 'Automotive Data APIs',
  })).toEqual({
    functionName: 'writeLandingPage',
    args: {
      brand: 'Auto.dev',
      audience: 'developers',
      offers: 'Automotive Data APIs',
    }
  })
  
    // AI('writeLandingPage', ({ title, description, heroTitle, heroDescription, featuresTitle, featuresDescription }) => 
})

test('A thing', () => {
  it('should work', () => {
    expect(3).toBe(3)
  })

  it('should be ok', () => {
    expect(2).toBe(2)
  })

  describe('a nested thing', () => {
    it('should work', () => {
      expect(3).toBe(3)
    })
  })
})