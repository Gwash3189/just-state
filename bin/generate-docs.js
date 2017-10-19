const jsdoc = require('jsdoc-to-markdown')
const fs = require('fs')

jsdoc.render({ files: 'src/**/*.js' })
  .then(api => {
    fs.writeFile('docs/API.md', api, 'utf8', (err) => {
      if (err) throw err
      console.log('Complete')
    })
  })
  .catch(err => {
    console.error(err)
  })
