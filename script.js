$(document).ready(function() {
  var touch = "ontouchstart" in document;
  if (touch) return;
  var $header = $('#header');
  var $header2 = $('header');
  var $spacer = $('#spacer');
  var $body = $('.body');
  var $a = $('.contact');
  var $forms = $('#forms');
  var time = 800;
  var method = 'easeInOutQuint';
  var delay = 2000;

  setTimeout(function() {
    $body.show();
    $header2.animate({ 'padding-top' : '0px' }, time, method);
    $header.animate({ 'height' : '154px' }, time, method, function() {
      $header.css('position', 'relative');
      $spacer.remove();
    });
    setTimeout(function() {
      $a.css('opacity', '1');
      $forms.css('opacity', '0');
    }, 200);
  }, delay);
});