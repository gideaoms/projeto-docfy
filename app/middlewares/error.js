module.exports = (err, req, res, _next) => {
  res.status(err.status || 500);
  return res.render('errors/default', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
};
