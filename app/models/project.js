module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User);
    Project.hasMany(models.Section);
  };

  return Project;
};
