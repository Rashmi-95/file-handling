const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
const fileName = `/Users/rashmiranganathan/Documents/eslint/file-handling/readme.txt`

const fileRead = require(`./fileRead.js`)
const fileWrite = require(`./fileWrite.js`)
const fileUpdate = require(`./fileUpdate.js`)
const fileDelete = require(`./fileDelete.js`)

app.get('/read', function (req, res) {
  fileRead(fileName, res)
})

app.post('/write', function (req, res) {
  const data = req.body.data
  fileWrite(fileName, data, res)
})

app.post('/update', function (req, res) {
  const lineNumber = req.body.line
  const data = req.body.data
  fileUpdate(fileName, lineNumber, data, res)
})

app.post('/delete', function (req, res) {
  const lineNumber = req.body.line
  fileDelete(fileName, lineNumber, res)
})

app.listen(3006)
