$(function() {
  if ( $.cookie("pop") != "no" ) $(".pop_wrap").show();
  $(".pop_wrap").css("cursor", "move").draggable();
  $(".pop_wrap area:eq(0)").click(function() {
    $(".pop_wrap").fadeOut("fast");
  });

  $(".pop_wrap area:eq(1)").click(function() {
    $.cookie("pop", "no", {expires: 1});
    $(".pop_wrap").fadeOut("fast");
  });
});