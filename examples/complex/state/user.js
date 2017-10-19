export default [
  {
    name: 'Adam',
    role: {
      value: 'admin',
      rights: 1,
      emails: ['1', '2'],
      products: ['1'],
      nested: {
        a: {
          really: {
            deeply: [{ nested: { property: 'hi' } }]
          }
        }
      }
    },
    id: 10022
  }
]
