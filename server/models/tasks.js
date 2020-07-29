const tasksTable = (sequelize, DataTypes) => {

  const Tasks = sequelize.define('Tasks', {

    taskid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    taskname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING    // how do I hash it here?
    },
    currentstreak: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    maxstreak: {
      allowNull: false,
      type: DataTypes.INTEGER    // how do I hash it here?
    },
    totaltime: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tasktype: {    // can be 'check', 'time' or 'counter'
      allowNull: false,
      type: DataTypes.STRING
    },
    taskdaily: {     // can be 'goal' or 'limit'
      allowNull: false,
      type: DataTypes.STRING
    }
  })

  Tasks.associate = (db) => {
    Tasks.belongsTo(Users, {
      foreignKey: {allowNull: false },
      onDelete: "CASCADE",
    });
  }

  return Tasks;

}

module.exports = tasksTable;