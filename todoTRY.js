const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://localhost:5432/todo')

sequelize.query('SELECT id,description,status FROM task order by id',
  { type: sequelize.QueryTypes.SELECT })
  .then(function (tasks) {
    // We don't need spread here, since only the results will be returned for select queries
    tasks.forEach(function (item) {
      console.log(item.description, item.id, item.status)
    })
  })

/* sequelize.query("INSERT INTO task (description, status) VALUES ('do next exercise',false)",
  { type: sequelize.QueryTypes.INSERT })
  .then(function (task) {
    console.log(task)
  }) 
*/

const description = 'finish testing it', status = false
sequelize.query(`UPDATE task SET description = '${description}', status = ${status} where id = 7;`)
  .then(function (task) {
    if (task[1].rowCount) {
      console.log('The task is deleted')
    } else {
      console.log('The task doesnt exist to delete')
    }
  })

/*sequelize.query(`DELETE FROM task WHERE id = 10;`)
  .then(function (task) {
    if (task[1].rowCount) {
      console.log('The task is deleted')
    } else {
      console.log('The task doesnt exist to delete')
    }
  })
  .catch(function () {
    console.log('Error')
  })
*/