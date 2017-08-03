<!-- script -->

  (function($){
    var btnMenu = $('#btn_menu');
    var nav = $('.navigation');
    // gnbList클릭 이벤트 ( .on() )
    btnMenu.on('click', function(){
      nav.slideToggle();
    });

  })(this.jQuery);