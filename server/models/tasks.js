const tasksTable = (sequelize, DataTypes) => {
  const Tasks = sequelize.define("Tasks", {
    taskid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    taskname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    currentstreak: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    maxstreak: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    totaltime: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    tasktype: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    taskdaily: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  Tasks.associate = (db) => {
    Tasks.belongsTo(Users, {
      foreignKey: { allowNull: false },
      onDelete: "CASCADE",
    });
  };

  return Tasks;
};

module.exports = tasksTable;
