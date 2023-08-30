module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.INTEGER,
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  return User;
};
