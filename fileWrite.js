const fs = require('fs')
module.exports = function (fileName, data, res) {
  fs.appendFile(fileName, `\n${data}`, function (err) {
    if (err) throw err
  })
  res.redirect('/read')
}
