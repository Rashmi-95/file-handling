const fs = require('fs')
module.exports = function (fileName, lineNumber, res) {
  fs.readFile(fileName, function doneReading (error, fileContents) {
    if (error) {
      res.status(500).send('file not found')
    } else {
      const fileContentArray = fileContents.toString().split('\n')
      if (fileContentArray.length < Number(lineNumber)) {
        res.status(500).send('line not found')
      } else {
        fileContentArray.splice(lineNumber - 1, 1)
        const fileContent = fileContentArray.join('\n')

        fs.writeFile(fileName, fileContent, function (err) {
          if (err) return console.log(err)
        })
        res.redirect('/read')
      }
    }
  })
}
