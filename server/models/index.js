const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('solotest1', 'chica', null, {  // change db name here !!!!!!!!!!
  dialect: 'postgres'
});
 sequelize.authenticate()
// .then(console.log('Connection has been established successfully.')).catch(error) => console.log(error);

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    console.log(file);
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

// db = { User: UserModel, Task: TaskModel }
Object.keys(db).forEach(model => {
  if (db[model].associate) db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;