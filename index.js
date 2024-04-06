$(document).ready(function() {
  $(".textBox").click(function() {
    $("#overflow").toggle();
    if ($("#overflow").is(":visible")) {
      $("#overflow").css({
        'top': '150px',
      'left': '10px'
    
      });
      $('.textBox').css('height', '780px');
    } else {
      $("#overflow").css('display', 'none');
      $('.textBox').css('height', ''); 
    }
  });
});
$(document).ready(function(){
  $('.topic').click(function(){
    $('.subDisc').hide();
    $('.pass').show();
  })
})
$(document).ready(function(){
  $('.send').click(function(){
    $('.pass').hide();
    $('.last').show();
    $('.discBar').css({
      'top':'-35px'
    });
  })
})
