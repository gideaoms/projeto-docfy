module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    UserId: DataTypes.INTEGER,
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  });

  Session.associate = (models) => {
    Session.belongsTo(models.User);
  };

  return Session;
};
