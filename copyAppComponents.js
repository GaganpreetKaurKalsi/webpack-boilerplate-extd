const fs = require('fs')
const path = require('path')
const { ncp } = require('ncp') // Using the ncp library for recursive copy

// Path to the source folder
const sourceFolder = './src/AppComponents/AppComponents1'

// Path to the destination folder
const destinationFolder = './src/AppComponents/AppComponents'

// Number of copies to make
const numberOfCopies = 500

// Loop to create copies
for (let i = 201; i <= numberOfCopies; i++) {
  const newFolderName = `${destinationFolder}${i}`
  const newFolderPath = path.join(__dirname, newFolderName)

  // Check if folder already exists, if not, create it
  if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath)

    // Use ncp to recursively copy source folder to destination folder
    ncp(sourceFolder, newFolderPath, function (err) {
      if (err) {
        return console.error(err)
      }
      console.log(`Copied ${sourceFolder} to ${newFolderName}`)
    })
  } else {
    console.log(`${newFolderName} already exists. Skipping...`)
  }
}
