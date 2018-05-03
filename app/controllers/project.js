const { Project } = require('../models');
const { Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });

      req.flash('success', 'Projeto criado com sucesso');

      return res.redirect('/dashboard');
    } catch (err) {
      return next(err);
    }
  },
  async show(req, res) {
    const project = await Project.findById(req.params.id, {
      include: [Section],
    });

    res.render('projects/show', { project });
  },
  async destroy(req, res, next) {
    try {
      await Project.destroy({ where: { id: req.params.id } });

      req.flash('success', 'Projeto excluído com sucesso');

      return res.redirect('/dashboard');
    } catch (err) {
      return next(err);
    }
  },
};
