#### jquery?

jquery란? 자바스크립트의 라이브러리,
- 복잡하고 어려운 자바스크립트의 코드를 좀더 쉽고 빠르게 작성하도록 만들어진 도구
- 크로스브라우징이 어느정도 고려되어 있다
  (자바스크립트는 직접 해야한다.)
- 단점, 자바스크립트를 직접적으로 사용하는 것이 아니기 때문에 다소 느리다.
- 한번 에러나면 수습하기 좀 어렵다.
- 기존의 플러그인(jQuery를 더 쉽게 만드는 도구)을 여러개 겹치는 경우(3개이상사용시 특히)해결



##### 선택자

jQuery선택자는 css의 선택자와 거의 같다.
사실상 기능이 조금더 많다!

###### css

```css
#box{}
.box2{}
div{}
.box3 li{}
ul>li>a{}
```

###### jquery

```javascript
$('#box').css({})
$('.box2').css({})
$('div').css({})
$('.box3 li').css({})
$('ul>li>a').css({})
```

---

#### 메소드 체인

```javascript
$('.gnb > li:nth-child(1)').css({'backgroundColor':'#0cc'});
$('.gnb > li').eq(0).css({'backgroundColor':'#0cc'});
$('.gnb > li:nth-child(2)').css({'backgroundColor':'#3cc'});
$('.gnb > li').eq(1).css({'backgroundColor':'#0cc'});
$('.gnb > li:nth-child(3)').css({'backgroundColor':'#6cc'});
$('.gnb > li').eq(2).css({'backgroundColor':'#0cc'});

같은 뜻 다른 방법
$('.gnb > li:first-child').css({'backgroundColor':'#0cc'});
$('.gnb > li:first').css({'backgroundColor':'#0cc'});
$('.gnb > li').eq(0).css({'backgroundColor':'#0cc'});

$('.gnb > li:last-child').css({'backgroundColor':'#9cf'});
$('.gnb > li:last').css({'backgroundColor':'#9cf'});

$('.gnb').children('li').eq(0).css({'backgroundColor':'#0cc'});
```



이벤트 메서드

```javascript
이벤트 메서드 .on()
   var gnb = $('.gnb');
   gnb.children('li').on('mouseenter')
```

다 소문자로 씀

---



#### jQuery

1. 짧고, 편하다!
2. 느리다

선택자            $(**'**   **'**)

.children( )    .eq( n )              .index( )

.find( )           .siblings( )

​                      .parents( )



*** $('.list').children('li')

​       $('.list').children(    )

```javascript
<script>
	(function($){
      .css({camelCase:' '});
	})(this.jQuery);  
</script>
```

---





display:none;	->	display: block  (메뉴 보이게함)

hide( )          show( )                 toggle( )

fadeOut( )    fadeIn( )              fadeToggle( )

slideUp( )   slideDown( )        slideToggle( )