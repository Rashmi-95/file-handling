const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
const fileName = `/Users/rashmiranganathan/Documents/eslint/file-handling/readme.txt`

app.get('/', function (req, res) {
  res.send(`Welcome!!
  * To read the file append '/read' to search bar
  * To write to the file append '/write/text' to search bar
  * To change a particular line in the file append '/update/line' to search bar & write line content into 'data'`)
})

app.get('/read', function (req, res) {
  res.sendFile(fileName)
})

app.post('/write/:content', function (req, res) {
  const contentToWrite = req.params.content
  fs.appendFile(fileName, `\n${contentToWrite}`, function (err) {
    if (err) throw err
  })
  res.send(`'${contentToWrite}' is written to the file`)
})

app.put('/update/:line', function (req, res) {
  const lineNumber = req.params.line
  const data = req.body.data
  fs.readFile(fileName, function doneReading (error, fileContents) {
    if (error) {
      res.status(500).send('file not found')
    } else {
      const fileContentArray = fileContents.toString().split('\n')
      if (fileContentArray.length < Number(lineNumber) + 1) {
        res.status(500).send('line not found')
      } else {
        fileContentArray[lineNumber] = data
        const fileContent = fileContentArray.join('\n')
        fs.writeFile(fileName, fileContent, function (err) {
          if (err) return console.log(err)
        })
        res.send(`The file is updated`)
      }
    }
  })
})

app.delete('/delete/:line', function (req, res) {
  const lineNumber = req.params.line
  fs.readFile(fileName, function doneReading (error, fileContents) {
    if (error) {
      res.status(500).send('file not found')
    } else {
      const fileContentArray = fileContents.toString().split('\n')
      if (fileContentArray.length < Number(lineNumber) + 1) {
        res.status(500).send('line not found')
      } else {
        fileContentArray.splice(lineNumber, 1)
        const fileContent = fileContentArray.join('\n')

        fs.writeFile(fileName, fileContent, function (err) {
          if (err) return console.log(err)
        })
        res.send(`The line number ${lineNumber} is deleted`)
      }
    }
  })
})
app.listen(3006)

