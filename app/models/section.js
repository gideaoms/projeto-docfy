const md = require('markdown-it')();

module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    ProjectId: DataTypes.INTEGER,
  }, {
    getterMethods: {
      formattedContent() {
        if (this.content) {
          return md.render(this.content);
        }
        return '';
      },
    },
  });

  Section.associate = (models) => {
    Section.belongsTo(models.Project);
  };

  return Section;
};
