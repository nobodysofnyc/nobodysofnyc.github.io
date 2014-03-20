$(document).ready(function() {
  var $header = $('#header');
  var $spacer = $('#spacer');

  setTimeout(function() {
    $header.animate({'height': '154px'}, 600, 'easeInOutQuint', function() {
      $header.css('position', 'relative');
      $spacer.remove();
    });
  }, 2000);
});
