문제!

```
1. .me_link이름을 .slide_btn>ul에 적용
2. .slide_btn>ul>li의 가로값을 세로에도 적용(가로 == 세로)
```

- jquer-06-slide_button.html

```javascript
// 1
// show/hide -  fadeIn/fadeOut - slideDown/slideUp
// addClass/removeClass


$('.slide_btn>ul').addClass('me_link');

// 2
// .slide_btn>ul>li의 가로값

// $('.slide_btn>ul>li').css('width');       // 기본 가로값 파악
// $('.slide_btn>ul>li').width();            // 기본 가로값
// $('.slide_btn>ul>li').innerWidth();       // padding 포함
// $('.slide_btn>ul>li').outerWidth();       // border 포함
// $('.slide_btn>ul>li').outerWidth(true);   // margin 포함

var slide_li_width = $('.slide_btn>ul>li').width();
$('.slide_btn>ul>li').height(slide_li_width);
```

- 슬라이드버튼 접어놓기

```javascript
var slide_btn = $('.slide_btn');
var slide_ul  = slide_btn.children('ul');
var slide_li  = slide_ul.children('li');
var slide_button = $('.slide_btn').find('button');

slide_ul.addClass('me_link')


var slide_li_width = slide_li.width();
slide_li.height(slide_li_width);

slide_btn.addClass('leftMove')

// click
slide_button.on('click',function(e){
  e.preventDefault();
```

- 슬라이드버튼 클릭하면 나오게

```javascript
var slide_btn = $('.slide_btn');
var slide_ul  = slide_btn.children('ul');
var slide_li  = slide_ul.children('li');
var slide_button = $('.slide_btn').find('button');

slide_ul.addClass('me_link')


var slide_li_width = slide_li.width();
slide_li.height(slide_li_width);

slide_btn.addClass('leftMove')

// click시 .leftMove를 삭제
slide_button.on('click',function(e){
  e.preventDefault();
  slide_btn.removeClass('leftMove');
});
```

- 클릭하면 들어갔다 나왔다가 할수있게

```javascript
var slide_btn = $('.slide_btn');
var slide_ul  = slide_btn.children('ul');
var slide_li  = slide_ul.children('li');
var slide_button = $('.slide_btn').find('button');

slide_ul.addClass('me_link')


var slide_li_width = slide_li.width();
slide_li.height(slide_li_width);

slide_btn.addClass('leftMove')

// click시 .leftMove를 삭제
slide_button.on('click',function(e){
  e.preventDefault();
  slide_btn.toggleClass('leftMove');
});
```

---

- 네이버 웹툰의 리모턴 기능(어려움)

  Draggable

  1. 마우스 mousedown
  2. page X           screen X
     page Y           screen Y
  3. draggable
     참고: `https://jqueryui.com/draggable/`

---

transition: all .15s ease-in-out;
푸터 0.15s로 바꾸기

---

- 문제!

```javascript
1. if문을 이용하여 이모지(이모티콘) 변경처리
  // slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');

2. 열기 글자와 닫기 글자 기능 토글    hint: text
// text() : 글자만 인지
// html() : 요소까지 포함(요소 코드로 작성하지 않으면 글자로 인지)

  // slide_button.find('span').text('닫기');
  // slide_button.html('닫기');

3. 버튼에 마우스 올렸을 경우 .slide_btn이 살짝 나오기(약 10px정도)
```

---

- "열기" 버튼 닫았을때 "닫기"나오고 다시 "열기" 글자 나오게

```javascript
var slide_btn    = $('.slide_btn');
var slide_ul     = slide_btn.children('ul');
var slide_li     = slide_ul.children('li');
var slide_button = $('.slide_btn').find('button');
var slide_icon   = slide_button.find('i');

slide_ul.addClass('me_link')


var slide_li_width = slide_li.width();
slide_li.height(slide_li_width);

slide_btn.addClass('leftMove')

console.log(slide_btn.css('left'));

slide_button.on('click',function(e){
  e.preventDefault();

  var slide_left = parseInt( slide_btn.css('left') );

if( slide_left < 0 ){
  slide_btn.removeClass('leftMove', 500);
  slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');
  slide_button.find('span').text('닫기');
}else{
  slide_btn.addClass('leftMove', 500);
  slide_icon.removeClass('fa-arrow-left').addClass('fa-arrow-right');
  slide_button.find('span').text('열기');
  }

});
```

```javascript
  // hasClass()     : class이름의 존재 유무를 판단(true/false)
  // is()           : class뿐 아니라 다른 내용도 판단가능

  // var slide_left = parseInt( slide_btn.css('left') );
     var slide_left = slide_btn.hasClass('leftMove');
```

- ㅅ

```javascript
var timed = 500;
var slLeft = parseInt( slide_btn.css('left') );
// 3. 버튼에 마우스 올렸을경우 .slide_btn이 살짝 나오기
slide_button.on('mouseenter', function(event){
  event.preventDefault();
  slide_btn.animate({transform:'translateX(20px)', trasition:'all '+timed+'ms'});
});
slide_button.on('mouseleave', function(event){
  event.preventDefault();
  slide_btn.animate({transform:'translateX(0)', trasition:'all '+timed+'ms'});
});
```

- 추가해결해야 하는 내용: 내용을(slide_btn) 보여주는 경우에는 버튼에 마우스 올려도 이동처리 되지 않도록 처리

```javascript
	var timed = 500;
	// 3. 버튼에 마우스 올렸을경우 .slide_btn이 살짝 나오기(약 10px정도)
	slide_button.on('mouseenter', function(event) {
		event.preventDefault();
		if(parseInt(slide_btn.css('left')) < 0 ){
			// slide_btn.css({'transform':'translateX(20px)', 'transition':'all '+timed+'ms'});
			slide_btn.css({'marginLeft':'20px', 'transition':'all '+timed+'ms'});
		}
	});
	slide_button.on('mouseleave', function(event) {
		event.preventDefault();
		// slide_btn.css({'transform':'translateX(0)', 'transition':'all '+timed+'ms'});
		slide_btn.css({'marginLeft':'0', 'transition':'all '+timed+'ms'});
	});

// 문제 해결: transition이 아닌 ie하위버전 호환처리

```

