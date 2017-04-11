
$(function() {
  $('.pop-up').hide(0);
  $('.pop-up-container').hide(0);

  $('.pop-up-button').click(function(){
    $('.pop-up-container').show(0);
    $('.pop-up').fadeIn(400);
    $('.pop-up-button').hide(0);
    $('.first_panel').slideUp(800);
    $('.background').slideUp(800);
    $('section.second_panel').css({
      'padding': '0px 0px',
      'height': '90vh'
    });
    $('section.second_panel div.dim_background').css({
      'background': 'none',
      'background-radious': 'none'
    });

  });
  $('.pop-up span').click(function() {
    $('.pop-up-container').hide(0);
    $('.pop-up').hide(0);
    $('.pop-up-button').show(0);
    $('.first_panel').slideDown(800);
    $('.background').slideDown(800);
    $('section.second_panel').css({
      'padding': '65px 68px',
      'height': '300px'
    });
    $('section.second_panel div.dim_background').css({
      'background': 'rgba(51, 51, 51, 0.65)'
    });
  });
});
