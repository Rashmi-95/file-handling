$(document).ready(function () {
  $.get('http://localhost:3006/api/read', (data) => {
    let content = '<ul>'
    data.forEach(function (item) {
      content += '<li>' + item.description + '</li>'
    })
    content += '</ul>'
    $('div#result').html(content)
  })
})
