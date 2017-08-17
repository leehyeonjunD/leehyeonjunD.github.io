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

- `mousedown`  // 마우스버튼 누르고있을때, 왼(1), 가운데(2), 오른(3)

- `mouseup`      // 마우스버튼 띌때, 왼(1), 가운데(2), 오른(3)
  ​

- `keypress`    // 타자를 치는것(누르기떼기둘다)

- `keydown`      // 누르고 있을때

- `keyup`          // 떼고 있을때
  ​

- `mouseenter`   // 올린것 (하위요소를 하나로 인지)

- `mouseleave`   // 벗어난것 (하위요소를 하나로 인지)

- `mouseover`     // 올린것 (메모리 중첩)

- `mouseout`      // 벗어난것 (메모리 중첩)
  ​

- `scroll`            // 브라우저 내부의 스크롤이 이동(변경)

- `mousewheel`    // 'fire fox'에서는 다른 용어 사용.

- `resize`            // 화면크기가 변하는 경우

- `change`            // 값이나 내용이 변경

  ​

- `focus`           // 활성화가 된 경우

- `blur`
  ​

- `trigger`

- `draggable`

