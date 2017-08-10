// slideBanner_01.js

(function($) {
  // slide banner 1
  var bannerBox    = $('#addBannerBox');
  var banner_group = bannerBox.children('ul');
  var btn          = $('.btn');
  var btn_l        = btn.children('button:first');
  var btn_r        = btn.children('button:last');
  var timed        = 500;

  bannerBox.css({overflow:'hidden'});
  banner_group.css({marginLeft:'-100%'});

  var li_last      = banner_group.children('li').last();
  banner_group.prepend(li_last);

  btn_r.on('click',function(e){
    e.preventDefault();
    banner_group.stop().animate({marginLeft:'-200%'}, timed, function(){
      var li_fr    = banner_group.children('li').first();
        banner_group.append(li_fr);
        banner_group.css({marginLeft:'-100%'});
    });
  });

  // 5. 왼쪽 버튼을 클릭하면, 위와 동일한 반복기능 처리
  btn_l.on('click',function(e){
    e.preventDefault();
    banner_group.stop().animate({marginLeft:0}, timed, function(){
      var li_la = banner_group.children('li').first();
        banner_group.prepend(li_la);
        banner_group.css({marginLeft:'-100%'});
    });
  });

  // 반복 기능   setInterval()

  // setInterval( btn_r.on('click'), timed );


})(this.jQuery);