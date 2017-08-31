/* guess_sub2.html jquery 영역 */
(function($){

  var btnMenu   = $('#btn_menu');
  var nav       = $('.navigation');
  var footHover = $('#footBox').children('p');
  var address   = $('address');
  var conOffset = $('.guess_box').offset().top;

nav.hide();

  // nav클릭 이벤트 ( .on() )
  btnMenu.on('click', function(){
    nav.slideToggle(400);
  });


address.hide();

  // p클릭 이벤트( .on() )
  footHover.on('click', function(){
    address.fadeToggle(600)
        .animate({
          fontSize:'0.8em', 
          height:100
        }).fadeIn(4000).fadeOut(4000);
  });

  $(window).on('scroll', function(){
    var winOffset = $(this).scrollTop();
    var timed = 600;

    if(winOffset >= (conOffset - 600) ){
      $('#guessImg').addClass('addView');
      $('#guessHug').addClass('addView');
    }else {
      $('#guessImg').removeClass('addView');
      $('#guessHug').removeClass('addView');
    }
  });


})(this.jQuery);