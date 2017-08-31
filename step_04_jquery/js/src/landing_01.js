// randing_01.js

(function($) {
  // 스크롤 이벤트 사용

  // landing_02
  // #content_02 상단에서 떨어진 위치 파악
  var conOffset = $('#content_02').offset().top;

// ------------------------------------------------------------------

  $(window).on('scroll', function(){
    // offset().top 500만큼 이동하면,
    // headBox 의 높이와, 배경색상을 변경처리
    // 그림자를 생성
    var winOffset = $(this).scrollTop();

    var timed = 500;
    // console.log(winOffset);

    if(winOffset >= 500){
      $('body').addClass('scroll',{duration:timed});
      $('#headBox').addClass('scroll',{duration:timed});
      $('#headBox').children().addClass('scroll',{duration:timed});
    } else{
      $('body').removeClass('scroll',{duration:timed});
      $('#headBox').removeClass('scroll',{duration:timed});
      $('#headBox').children().removeClass('scroll',{duration:timed});
    }

    // ------------
  // content_02 내부의 이미지 나타나게 만들기
  if(winOffset >= (conOffset - 500) ){
    $('.one').addClass('addView');
    $('.two').addClass('addView');
  }

  });

})(this.jQuery);