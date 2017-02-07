const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://localhost:5432/todo')

sequelize.query('SELECT * FROM task',
  { type: sequelize.QueryTypes.SELECT })
  .then(function (task) {
    // We don't need spread here, since only the results will be returned for select queries
    console.log(task)
  })

sequelize.query("INSERT INTO task VALUES (2,'do exercise',false)",
  { type: sequelize.QueryTypes.INSERT })
  .then(function (task) {
    console.log(task)
  })
