* layout_03 실습
- 
- 화면에서의 양쪽 여백을 주고 싶을때
: `margin:0 auto;`
___
##### overflow displaynone visibilityhidden
* overflow:일정한 크기의 값을 가진 태그에 내용이 넘쳤을 경우 처리하는 속성기법
* overflow 종류: overflow, overflow-X(가로영역), overflow-Y(세로영역)
* overflow 속성: normal, auto, scroll, hidden
___
##### margin padding box-sizing
* 자식요소에 margin VS 부모요소에 padding
* margin을 사용하는 방법은 직접적으로 하나하나 간격을 설정하는 방법
* 모든 필요 요소에 매번 사용해야하는 불편함이 발생
* 부모요소에 padding을 사용하면 각각 처리하는 내용중에 공통영역을 한꺼번에 처리하기 때문에
* 전체 코드의 양이 줄고, 통일성을 잡을 수 있다.
* padding 또는 border를 사용할때
* 해당하는 크기를 조절한다면(padding-top:20px을 사용하여 전체 높이를 20만큼 줄여야한다면)
* box-sizing:border-box; 속성을 사용하면 전체의 크기를 조정하지 않아도 된다.(안쪽으로 새겨지는것)

* box-sizing 은 padding, border에 대한 선의 위치를 설정하는 속성
* 속성은 2가지: content-box(지정상자의 바깥쪽) | border-box(지정상자의 안쪽)
___

`overflow:hidden;`
: 존재는있지만 안보이게함,
포커스가 가고 접근성 읽어줌.

가로로 넘쳤을 경우 overflow-X
세로로 넘쳤을 경우 overflow-Y
기본설정 normal
넘치면 스크롤 자동으로처리 auto
오른쪽스크롤생기게 scroll
강제로숨기기 hidden

예: 스크롤가능한 텍스트
부모태그에 overflow:hidden;
자식태그에 overflow:scroll;
```
<style>
	#of{width: 120px; height: 300px; border: 2px solid  #389; margin: 0 auto; overflow: hidden;}
	p{width:100%; height: inherit; overflow-y: scroll; padding-right: 100px;}
</style>
```
___
* `display:none;`
: 존재가 없는것으로 인지
video,audio일경우 소리는나옴.(접근성면에서만 존재부정)

* `visibility: hidden;`
: 존재가 없는것으로 인지(디스플레이논과 똑같)
공간은 존재 그 안에는 존재x (접근성: 안읽어줌)

* `overflow:hidden;`
: 존재는있지만 안보이게함,
접근성 리딩 O, focus O
___
* normalize: 일반적으로 자주 사용하는 기법을 등록해서 필요에따라 바로 사용할 수 있도록 처리(단축키)- 즐겨찾기라고 생각하기
___
`margin-top:20px; margin-left:30px; margin-bottom:20px;`
==
`margin:20px; margin-left:30px;`
-> 위의 경우 right에 마진없음
아래의 경우 상하좌우 다 마진있음

`margin-left:-30px;`
width수정안하고 앞으로 이동.
___
##### 단축키
`lorem` + `tab`
텍스트 생성.

`link` + `tab`
`<link rel="stylesheet" href="">`
`<link rel="stylesheet" type="text/css" href="">`

##### 코드
padding

style 코드 밑에
`@import url("../css/base/reset.css");`
`@import url("../css/base/normalize.css");`
`@import url("../css/src/layout_03.css");`

#### 보통 링크 쓰고 스크립트 순으로~