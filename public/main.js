$(document).ready(function() {
  /**
   * Alerts
   */
  setTimeout(function() {
    var alert = document.querySelector('.alert');

    if (alert)
      alert.className += ' alert-hidden';
  }, 3000);

  /**
   * MDE Editor
   */
  $('.mde').each(function() {
    var simplemde = new SimpleMDE({
      element: this,
      spellChecker: false,
      status: false,
    });
    // simplemde.render();
  });
});
