$(document).ready(function () {
  $(".textBox").click(function () {
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
$(document).ready(function () {
  $('.topic').click(function () {
    $('.discBar').hide();
    $('.subDisc').hide();
    $('.pass').show();
    $('.disc').css({
      'height':'960px'
    }) 
  })
})
$(document).ready(function () {
  $('.send').click(function () {
    $('.pass').hide();
    $('.last').show();
    $('.comentI').show();
    $('.discBar').show();
    $('.discBar').css({
      'top': '55px',
      'left': '50px'
    });
    $('.disc').css({
      'height':'990px'
    })  
  
    $('.comentI').addClass('blur');

  })
})
$(document).ready(function () {
  $('.create').click(function () {
    $('.comentI').hide();
    $('.last').hide();
    $('.pass').show();
  })

})
$(document).ready(function () {
  $('.coment2').click(function () {
    $('.ans').toggle();
  })
  $('.ans').click(function () {
    $('.ans').toggle();
  })
})

$(document).ready(function () {
  var originalText = $('.coment2 ul li p').text();
 
  $('.coment2').click(function () {
    if ($('.coment2 ul li p').text() === originalText) {
      $('.coment2 ul li p').text("5 like 5 resposta");
    } else {
      $('.coment2 ul li p').text(originalText);
    }
    $('.disc').css({
      'height': '1850px',
      'border-bottom': '2px solid #ffe7c7'
    })
  });
  $('.ans').click(function () {
    $('.disc').css({
    'height': '850px'

    })
    $('.coment2 ul li p').text('1 like 1 resposta');
    
  })
});
