```javascript
$('ul').children('li')
$('ul').find('li')
$('li').parent( )
$('dd').siblings( )
$('li:first')
$('li:last')
$('li').eq(0)	순서를 선택
$('li').index( )	순서를 탐색
$('li:nth-child(odd)')
$('li:nth-child(even)')
```

- `.show()`
- `.hide()`
- `.toggle()`


- `.fadeOut()`
- `.fadeIn()`
- `.fadeToggle()`
- `.slideUp()`
- `.slideDown()`
- `.slideToggle()`
- `.addClass()`
- `.removeClass()`
- `.toggleClass()`

---

#### event

```javascript
$('[선택]').on('[이벤트]', function(event){
  event.preventDefault();
  
  // return false;
});
```

  pre	  // 먼저
  event	  // 발생되는 기능
  default   // 취소

---

##### 자바스크립트 이벤트 메소드

- `click`          // 한번 클릭

- `dblclick`    // 더블 클릭(왼버트)

- `mousedown`  // 누르고 있을때, 왼(1), 가운데(2), 오른(3)

- `mouseup`      // 떼고 있을때, 왼(1), 가운데(2), 오른(3)
  ​

- `keypress`    // 타자를 치는것(누르기떼기둘다)

- `keydown`      // 누르고 있을때

- `keyup`          // 떼고 있을때
  ​

- `mouseenter`

- `mouseleave`

- `mouseover`

- `mouseout`
  ​

- `scroll`

- `mousewheel`    // 'fire fox'에 대해서는 별도로 처리

- `resize`

  ​

- `focus`           // 창 활성화

- `blur`
  ​

- `trigger`

- `draggable`

