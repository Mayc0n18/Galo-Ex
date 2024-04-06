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
    $('.discBar').hide();
    $('.subDisc').hide();
    $('.pass').show();
  })
})
$(document).ready(function(){
  $('.send').click(function(){
    $('.pass').hide();
    $('.last').show();
    $('.comentI').show();
    $('.discBar').show();
    $('.discBar').css({
      'top':'55px',
      'left': '50px'
    });
  })
})
$(document).ready(function(){
  $('.create').click(function(){
    $('.last').hide();
    $('.pass').show();
  })
 
})
