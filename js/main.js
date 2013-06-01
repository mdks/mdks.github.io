$(function() {
  console.log("MDX group is pleased.");

  function fix_height () {
    pos = $(window).height() - $('#header').height();
    $('#content').css('min-height', pos);
  }

  $(window).resize(fix_height).resize();
});