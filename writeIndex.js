const fs = require('fs')

const startIndex = 1 // Start index for the component names
const endIndex = 500 // End index for the component names

let indexFileContent = '' // Initialize the content of index.js

// Generate export statements for each component
for (let i = startIndex; i <= endIndex; i++) {
  indexFileContent += `export * as app${i} from './AppComponents${i}';\n`
}

// Write the content to index.js file
fs.writeFileSync('./src/AppComponents/index.js', indexFileContent)

console.log('index.js file generated successfully!')
