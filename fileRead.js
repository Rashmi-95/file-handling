const fs = require('fs')
module.exports = function (fileName, res) {
  fs.readFile(fileName, function doneReading (error, fileContents) {
    if (error) {
      res.status(500).send('file not found')
    } else {
      const list = fileContents.toString().split('\n')
      res.render('pages/index.ejs', { list })
    }
  })
}
