const usersTable = (sequelize, DataTypes) => {

  const Users = sequelize.define('Users', {

    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING    // how do I hash it here?
    }
    
  })

  return Users;

}

module.exports = usersTable;