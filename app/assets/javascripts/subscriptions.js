
$(function() {
  $('.pop-up').hide(0);
  $('.pop-up-container').hide(0);
  //
  // $('.pop-up-button').click(function(){
  //   $('.pop-up-container').show(0);
  //   $('.pop-up').fadeIn(400);
  //   $('.pop-up-button').hide(0);
  //   $('.first_panel').slideUp(800);
  //   $('.background').slideUp(800);
  //   $('section.second_panel').css({
  //     'padding': '0px 0px',
  //     'height': '90vh'
  //   });
  //   $('section.second_panel div.dim_background').css({
  //     'background': 'none',
  //     'background-radious': 'none'
  //   });
  //
});




function showPopup(form_id) {
  var popup = document.getElementById(form_id);
  popup.style.display = 'block';
  // popup.fadeIn(400);

}
function hidePopup(form_id) {
  var popup = document.getElementById(form_id);
   $('.pop-up').hide(40);

}
