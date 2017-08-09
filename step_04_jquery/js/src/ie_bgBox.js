// ie_bgBox.js

(function($){
// ---------------------------------------------------

  // 브라우저의 스크롤크기를 제외한 내부 가로사이즈
  var winWidth2 = $(window).innerWidth();   // window는 html 영역을 벗어난 언어라, 따옴표 안 붙임.
  console.log(winWidth2);

  // append 뒤에 추가             // 추가하다, 가져오다(class이름추가할수O, 없던 클래스 가져올수 없음)
  // 1. 다른 요소 불러오는 방법
  // $('#headBox').append( $('#addBanner') );

  // 2. 없는 요소를 생성방법
  $('#headBox').append( $('<div class="bg_box">bgbox1</div>') );

  // 3. css를 설정
  $('.bg_box').css({ 
                    'width': winWidth2, height:100+'%', 
                    position:'absolute', top:0, left:50+'%', zIndex:-100,
                    backgroundColor:'inherit', marginLeft:- winWidth2 / 2
                  });
  $('.bg_box').parent().css({ position:'relative' });

// ---------------------------------------------------
})(this.jQuery);