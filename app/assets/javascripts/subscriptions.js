// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$(function() {
  $('.pop-up').hide(0);
  $('.pop-up-container').hide(0);

  $('.pop-up-button').click(function(){
    $('.pop-up-container').show(0);
    $('.pop-up').fadeIn(300);
    $('.pop-up-button').hide(0);
    $('.first_panel').hide(0);
    $('section.second_panel').css({'padding': '0px 0px', 'height': '600px'});
    $('section.second_panel div.dim_background').css({'background': 'none', 'background-radious': 'none'});

  });
  $('.pop-up span').click(function() {
    $('.pop-up-container').hide(0);
    $('.pop-up').hide(0);
    $('.pop-up-button').show(0);
    $('.first_panel').show(0);
    $('section.second_panel').css({'padding': '65px 68px', 'height': '300px'});
      $('section.second_panel div.dim_background').css({'background': 'rgba(51, 51, 51, 0.65)',
    'border-radius': '20px'});
  });
});
