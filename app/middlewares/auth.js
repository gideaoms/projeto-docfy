module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }

  req.flash('error', 'Favor fazer login');
  return res.redirect('/');
};
