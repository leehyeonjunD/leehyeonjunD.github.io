## .
1. Link
  - 절대 : 10분페이지 https://______.github.io/_____
  - 상대 : ./main.html
		   ./resume.html
           ./pf.html
2. CSS
   - 단위 : 16px, 12pt, 100%, 1em, 1rem
     - vw,vh,vmin,vmax
   - 선택자 : type선택 (body,div,p,a...)
			 id선택(#___)
             class선택(.___)
             우선순위: 조상,___>#___>.___>div

```
<ul>
 <li>
  <ol>
   <li>
    <a href="#">
    </a>```

+ 자손
```
`A B{  }`
`ul a{  }`
`ol a{  }`
`li a{  }`
```
+ 자식
```
` A>B{  }`
`ul>li{  }`
`ul li{  }`
```
 ol>li{}
 ul ol>li{}
 ul>li>ol>li{}
 .name>li{}
```

* float: 정렬
형제는 다 써줘야 함

* 1.2em -> 19.2px
* 1em -> 16px
* 2em -> 32px

* .before_test:before{content:"hyeon___";____}
* :hover: 마우스를 올리면 나타남.
___
```
 * 블록 요소를 옆으로 나열하기 위해 float기능을 사용한다.
 * 왼쪽을 기준으로 나열하기 위해서는 float:left
 * 오른쪽을 기준으로 나열하기 위해서는 float:right
 * 문제점1: 부모요소에 높이값을 설정하면 - 넘어가는 사이즈를 설정시 매번 변경!
 * 문제점2: 부모요소에 높이값을 auto로 설정 - 부모의 높이는 0처리(float의 의미)
 * 해결하기 위한 용어1: clear속성을 사용
 * 해결하기 위한 용어2: 정의된 이름은 아니지만 보편적으로 .clearfix의 기법
 * 해결하기 위한 용어(방법)3: css의 추가기능(선택자의 기능) - ::before , ::after
 * --------------------------------------------------------
 * 크기값 계산하기: 3등분의 경우 소수점의 크기값을 계산해야하므로
 * 소수점 6자리까지 계산하여 사용합니다.(%, em, rem ...)- px의 수치 제외
 * css3의 최신기능에는 수치를 자동으로 계산하는 속성값이 있다.( calc() - 표준 X )
 * calc() : calc()는 ()안에 원하는 수치와, 사칙연산 그리고 계산내용을 작성
 * 이때 연산기호( *, /, +, -, %)앞, 뒤에는 공백을 만들어 주어야 계산이 된다.
 * 기술은 구현되지만 표준으로 등록되지 않은 경우에는 사용할 수 있다.
 * 이러한 경우에 미래에 사용할 수 있는 기능을 강제로 끌어쓰는 방법
 * 밴더프리픽스: 앞, 뒤에 밴더(-)를 달고, 해당하는 브라우저의 방식 작성하여 구현- 카카오똑의 실험실, 베타테스트 같은 기능
 * 차후 표준으로 등재(권고)시 밴더프리픽스의 기능은 삭제
```
___
* 이해1: div.clearfix를 사용 -->
* `<div class="clearfix">clearfix위치</div> -->`
* 이해2: br.clearfix를 사용 -->
* `<br class="clearfix" /> -->`
* 이해3: 가상선택자 ::after를 사용(부모에 class="clearfix" 삽입


* display:
> inline
block
inline-block
> none {1.사라짐:읽지않음(스크린리더),개발자만볼수있는부분}

* 가상선택자:
> table
table-cell
flex
> grid...


* `가상`
`::before`
:hover{}(마우스 올릴때)
:linked (잘 안씀)
:visited (방문한것)
:active (마우스-point wheel)
        - 클릭- 누르는것
        -(mouse down 누르고 mouse up 띄고 mouse click)

`::after`
:selected(form)
:checked
:root (최초의상태setting)

* `visiblity`
> visibility 속성은 태그의 가시성을 결정한다. 총 4가지 속성이 있으며 기본값은 inherit 이다.

>visible : 보임
hidden : 숨기지만, 자신의 영역은 계속 차지한다.
collapse : 겹치도록 지정( 테이블의 행과 열 요소만 지정할 수 있으며, 그 외 요소의 지정하면 hidden으로 해석된다.)
> inherit	: 부모 요소의 값을 상속


___
## `.clearfix` : 용어 이름
crain, mak bottom이라고 해도 상관없음. 이름을 붙인 것뿐.

float:?
clear:both
  - clear는 float(나열)기능을 상쇄시킴.(플롯으로 내려가려는걸 막아주는 턱 역할)

clearfix:after{content:" ";}
  - (Opera는 따옴표 사이에 공간을 띄어줘야 인식함.)
  - after: inline요소
  -           clear:both;
  -           display:block;

## .
* calc: calculator 계산기
 + - / * 가능
 꼭 앞 뒤 띄어쓰기해야 계산됨