#### video tag

- mp3, mp4 파일명 저작권로열티 내야함
  video 재생되지않는경우
  모든 브라우저 다 되지않음.
- 쓸데없는 여백도 붙어서 옴.
- div로 감싸는게 좋음.
- css로 가로세로 쓰는게 좋음
- allowfullscreen 풀화면으로제공.
- 백엔드
  html에 css style 을 씀..
  html에 쓰면 javascript에서 에러남.
  css로 따로 빼서 써야한다고 말해줘야함.
- youtube 주소앞에
  www.ssyoutube~~
  download video 작은글씨버튼 누르고
  화질medium quality

---

##### 제어를 하는 명령어

*controls  :  재생, 정지, 볼륨 등을 조절가능
-단, 브라우저마다 크기/모양이 다르다

*preload   :  재생하기전 미리 로딩처리하여 끊김이 덜하도록 만드는 기능

*autoplay  :  비디오를 자동으로 재생하게 만드는 기능

*volume   :   비디오 재생시 크기값을 조절하는 기능(0 ~ 1)

*muted     :   음소거

*poster     :    이미지 사진

---

**audio 에서는 poster, width, height 속성을 사용할 수 없다.
**controls는 브라우저마다 크기/모양이 다르므로 별도의 디자인 작업후 자바스크립트로 제어하는 것이 좋다.

**재생( load() ), 정지( pause() )

**여러곡을 사용하려면, 자바스크립트의 기능( )으로 사용하는 것이 일반적

---

```html
***video 용어
<video>코드로 감싸고 내부에
<source src="[비디오파일]" type="video/[확장자명]" />
순서에 맞게 호환되는 사용 확장자가 진행


```

---

***중요

1초에 3번이상 깜빡거리는 영상있으면 자제!
3초안에 끌수있는 버튼 생성해야함!

(동영상은 그냥 올리는 게 아니라
접근성에 맞는지 확인해야합니다.)

---

```html
<audio src="">사용가능하지만 실제로는 복수형을 사용</audio>
```

---

---

#### jquery

```javascript
// javascript
1. id="jsBtn" 가져오기
document.getElementById() == id
    var jsBtn = document.getElementById('jsBtn');
    var jsBtn = document.getElementById('jsBox');
2. 버튼을 클릭
jsBtn 클릭(이벤트)
adEventListener()  ==  이벤트(크롬,사파리,파이어폭스,오페라..)
attatchEvent()  ==  이벤트(익스플로러8버전)
```

---

##### call back

콜백함수란 하나의 기능뒤에 다른 함수를 불러와서 불러와서 사용하는 기법

```javascript
1.
jsBtn.addEventListener('click', function(){});

2.
jsBtn.addEventListener('click', jsBox);
function jsBox(){
        
}
```

---

즉시실행함수(IIFE)  :  함수작성과 동시에 동작(호출)

```javascript
기본
(function($){

})(this.jQuery);
```

```
// window.jQuery(document.ready().function(){});
    // jQuery(document.ready().function(){});
    // $(document.ready().function(){});
    // $(function(){});
```

---

```scss
main.scss
@import "var";
@import "mixin";
@import "header";
@import "addBanner";
@import "footer";

sub.scss
@import "var";
@import "mixin";
@import "articleMain";
```

