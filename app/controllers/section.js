const { Section, Project } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const section = await Section.create({
        ...req.body,
        ProjectId: req.params.projectId,
      });

      req.flash('success', 'Seção criada com sucesso');

      return res.redirect(`/projects/${req.params.projectId}/sections/${section.id}/edit`);
    } catch (err) {
      return next(err);
    }
  },
  async update(req, res, next) {
    try {
      const section = await Section.findById(req.params.id);

      await section.update(req.body);

      req.flash('success', 'Seção atualizada com sucesso');

      return res.redirect(`/projects/${req.params.projectId}/sections/${section.id}/show`);
    } catch (err) {
      return next(err);
    }
  },
  async show(req, res, next) {
    try {
      const project = await Project.findById(req.params.projectId, {
        include: [Section],
      });

      const section = await Section.findById(req.params.id);

      return res.render('sections/show', { project, section, edit: true });
    } catch (err) {
      return next(err);
    }
  },
  async edit(req, res, next) {
    try {
      const project = await Project.findById(req.params.projectId, {
        include: [Section],
      });

      const section = await Section.findById(req.params.id);

      return res.render('sections/edit', { project, section });
    } catch (err) {
      return next(err);
    }
  },
  async destroy(req, res, next) {
    try {
      await Section.destroy({ where: { id: req.params.id } });

      req.flash('success', 'Seção excluída com sucesso');

      return res.redirect(`/projects/${req.params.projectId}`);
    } catch (err) {
      return next(err);
    }
  },
};
