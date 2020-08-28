const historyTable = (sequelize, DataTypes) => {
  const History = sequelize.define("History", {
    historyid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    success: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  });

  History.associate = (db) => {
    db.History.belongsTo(db.Users, {
      foreignKey: { allowNull: false },
      onDelete: "CASCADE",
    });
  };

  return History;
};

module.exports = historyTable;
