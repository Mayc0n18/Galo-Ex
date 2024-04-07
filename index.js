$(document).ready(function() {
  $(".textBox").click(function() {
    $("#overflow").toggle();
    $('.toggle').toggle();
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
    $('.comentI').addClass('blur');

  })
})
$(document).ready(function(){
  $('.create').click(function(){
    $('.comentI').hide();
    $('.last').hide();
    $('.pass').show();
  })
 
})
$(document).ready(function(){
  $('.coment2').click(function(){
    $('.ans').toggle();
  })
  $('.ans').click(function(){
    $('.ans').toggle();
  })
})

$(document).ready(function() {
  // Variável para armazenar o texto original
  var originalText = $('.coment2 ul li p').text();

  // Adiciona um evento de clique ao elemento com a classe .dttt
  $('.coment2').click(function() {
      // Verifica se o texto atual é o original
      if ($('.coment2 ul li p').text() === originalText) {
          // Se sim, muda para o novo texto
          $('.coment2 ul li p').text("5 like 5 resposta");
      } else {
          // Se não, volta para o texto original
          $('.coment2 ul li p').text(originalText);
      }
  });
  
});
