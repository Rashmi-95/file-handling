const request = require('request')
const chai = require('chai')
const expect = chai.expect

describe('API for database operation of TODO list', function () {
  it('should return the json object of todo tasks, when get method is called', function (done) {
    const options = {
      method: 'GET',
      url: 'http://10.31.194.133:3006/read',
      headers:
      {
        'postman-token': 'bb248cbb-9414-7610-6a1b-28bdcc7c65e1',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded'
      },
      form: { description: '', status: '' }
    }
    request(options, function (error, response, body) {
      if (error) throw new Error(error)
      expect(body).type.to.eqls()
      done()
    })
  })
/*
  it('should return task added when post method is called with task description', function (done) {
    const options1 = {
      method: 'POST',
      url: 'http://10.31.194.133:3006/write/do%20integrated%20testing',
      headers:
      {
        'postman-token': '3db685a7-b400-d8b7-fa81-3b428ec3312d',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded'
      },
      form: { description: '', status: '' }
    }

    request(options1, function (error, response, body) {
      if (error) throw new Error(error)
      expect(body).to.eqls('The task is added to the task list')
      done()
    })
  })*/

  /* it('should return the content of todo list, when the get method is requested', function (done) {
     expect(testingFunction('')).to.eqls('')
     done()
   })*/
})

/* describe('To check input ', function () {
  it('when input is not a string', function () {
      expect(testingFunction([1, 2, 3])).to.eqls('not a valid string to convert to uppercase')
    })
}) */

