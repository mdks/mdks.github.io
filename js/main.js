$(function() {
  console.log("MDX group is pleased.");

  function fix_height () {
    $('#content').css('min-height', $(window).height()-420);
  }

  $(window).resize(fix_height).resize();
});