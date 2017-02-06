var express = require('express')
var app = express()

app.set('view engine', 'ejs')

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('pages/index')
})

// about page
app.get('/about', function (req, res) {
  res.render('pages/about')
})

app.listen(3006)
console.log('3006 is the magic port')
