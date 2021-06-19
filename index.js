$(document).ready(function () {
  $('#icon').click(function () {
    $('ul').toggleClass('show');
  })
  $(window).scroll(function () {
    $('nav').toggleClass('black', $(this).scrollTop() > 100);
  });
});