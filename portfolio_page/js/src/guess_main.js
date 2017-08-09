/* guess_main.html jquery 영역 */
(function($){

  var btnMenu = $('#btn_menu');
  var nav = $('.navigation');
  var footHover = $('#footBox').children('p');
  var info = $('.company_info');

nav.hide();

  // nav클릭 이벤트 ( .on() )
  btnMenu.on('click', function(){
    nav.slideToggle(400);
  });


info.hide();

  // p클릭 이벤트( .on() )
  footHover.on('click', function(){
    info.fadeToggle(600)
        .animate({
          fontSize:'0.8em', 
          height:100
        }).fadeIn(4000).fadeOut(4000);
  });


})(this.jQuery);