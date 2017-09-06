// player_01.js

(function($) {
  // video를 선택
  // 재생버튼 선택
  // 정지버튼 선택
  var video = $('#video>video')[0];
  var play  = $('.play');
  var pause  = $('.pause');

  // video, audio는 순서라는 개념을 가지고 있다.

  play.on('click', function(e) {
    e.preventDefault();
    video.play();
  });

  pause.on('click',['button'], function(e) {
    e.preventDefault();
    video.pause();
  });


})(this.jQuery);