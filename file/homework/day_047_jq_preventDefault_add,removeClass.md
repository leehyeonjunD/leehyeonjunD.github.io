8/3 

```javascript
gnbList.eq(2).on('click', function(e){
 e.preventDefault();
 banner.toggle();
});
```

pre(먼저), event(이벤트 효과), default(취소)

버튼 / 링크 또는 여러 이벤트 기능을 무효화
함수의 마지막에 작성되는 return false; 기능과 동일



애니메이션 처리되는 이벤트 효과에서는 마우스든 다른 효과든 중간에 정지 처리되어야 할 필요가 있다.

애니메이션 효과를 주는 메소드(api)앞에 .stop() 메소드를 연결하기만하면 간단하게 처리할 수 있다.

stop(): 반복처리되는 이벤트 기능이 메모리되어 처리되는 것을 삭제하는 기능.



##### addClass()

addClass()란, css(style)에 존재하는 class이름을 가져와서 html요소에 삽입

```javascript
gnb.addClass('clearfix');
```

```html
<div id="gnb">
<div id="gnb" class="clearfix">
```



##### removeClass()

removeClass()란, 선택된 요소에 담긴 class이름을 삭제처리

```javascript
gnb.removeClass('clearfix');
```

```html
<div id="gnb" class="clearfix">
<div id="gnb" class>
```



```javascript
(function($){
  var content = $('#contentBox');
  var conMenu = content.find('dd');
  var conBtn = content.find('dt');
  conMenu.hide();
  
  var rotate = 0;
  conBtn.on('click', function(e){
    e.preventDefault();
    var _$this = $(this);
    
    var viewDD = _$this.next('dd').css('display');
    console.log(viewDD);
    
    rotate += 180;
    console.log(rotate);
    _$this.find('i').css({transform:'rotate('+ rotate +'deg)'});
    conMenu.stop().slideUp();
    _$this.next('dd').stop().slideToggle();
})(this.jQuery);
```

