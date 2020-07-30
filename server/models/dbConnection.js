const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('solotest1', 'root',  'lys10717', {  // change db name here !!!!!!!!!!
//   host: 'localhost', 
//   dialect: 'mysql'
// });
const sequelize = new Sequelize('');

(async () => {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
})();

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;