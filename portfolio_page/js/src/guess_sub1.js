/* guess_sub1.html jquery 영역 */
(function($){

  var btnMenu = $('#btn_menu');
  var nav = $('.navigation');

nav.hide();

  // nav클릭 이벤트 ( .on() )
  btnMenu.on('click', function(){
    nav.slideToggle(400);
  });


})(this.jQuery);