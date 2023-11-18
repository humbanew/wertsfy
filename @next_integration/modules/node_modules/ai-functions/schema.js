export const schema = propDescriptions => {
  // assume an object like this: { name: 'The name of the person', age: 'The age of the person' }
  // return an object like this: { type: 'object', properties: { name: { type: 'string', description: 'The name of the person' }, age: { type: 'number', description: 'The age of the person' } } required: ['name', 'age'] }
  if (Array.isArray(propDescriptions)) {
    const [ itemValue ] = propDescriptions
    const itemType = typeof itemValue
    if (itemType == 'string') {
      return { type: 'array', description: itemValue, items: { type: 'string' }}
    } else if (itemType == 'object') {
      const { _description, itemSchema } = itemValue
      return { type: 'array', description: _description, items: schema(itemSchema)}
    }
  } else {
    const properties = Object.entries(propDescriptions).reduce((acc, [key, value]) => {
      const type = typeof value
      if (Array.isArray(value)) {
        const [ itemValue ] = value
        const itemType = typeof itemValue
        if (itemType == 'string') {
          if (itemValue.includes('|')) {
            acc[key] = { type: 'string', enum: itemValue.split('|').map(value => value.trim()) }
          } else {
            acc[key] = { type: 'array', description: itemValue, items: { type: 'string' }}
          }
        } else if (itemType == 'object') {
          // const { _description, itemSchema } = itemValue
          const description = itemValue._description ? `${itemValue._description}` : undefined
          if (description) delete itemValue._description
          acc[key] = { type: 'array', description, items: schema(itemValue)}
        }
      } else {
        if (type == 'string') {
          if (value.includes('|')) {
            acc[key] = { type: 'string', enum: value.split('|').map(value => value.trim()) }
          } else {
            acc[key] = { type, description: value }
          }
        } else if (type == 'object') {
          if (value._description) value._description = undefined
          acc[key] = schema(value)
        } else {
          acc[key] = { type, description: value }
        }
      }
      return acc
    }, {})
    const required = Object.keys(properties)
    return { type: 'object', properties, required }
  }
}