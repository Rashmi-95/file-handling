var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
}
const escapeHtml = string => String(string).replace(/[&<>"'`=\/]/g, s => entityMap[s])
function read() {
  $.get('/read', (data) => {
    let content = '<ul>'
    data.forEach(function (item) {
      let description = escapeHtml(item.description)
      if (item.status)
      { description = description.strike() }
      content += `<li id="${item.id}">` + description + ` 
      <button id="${item.id}" class="update">Update</button>
      <button id="${item.id}" class="delete">X</button></li>`
    })
    content += '</ul>'
    $('div#result').html(content)

    $('.delete').click(function () {
      console.log('fdf')
      console.log(this.id)
      $.ajax({
        url: `/delete/${this.id}`,
        type: 'DELETE',
        success: function (result) {
          read()
        }
      })
    })

    $('.update').click(function () {
      const content = $('#update-todo').val()
      const data = escapeHtml(content)
      const status = $('#update-status-todo').val()
      console.log(data, status, this.id)
      $.ajax({
        url: `/update/${this.id}`,
        type: 'PUT',
        data: `description=${data}&status=${status}`,
        success: function (result) {
          console.log(result)
          read()
        }
      })
       $('#update-todo').val('')
    })
  })
}

$(document).ready(function () {
  read()
  // write
  $('#write_button').click(function () {
    const content = $('#new-todo').val()
    const data = escapeHtml(content)
    $.post(`/write/${data}`, (data) => {
      read()
    })
    $('#new-todo').val('')
  })
})
