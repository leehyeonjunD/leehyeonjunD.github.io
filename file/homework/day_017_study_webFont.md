*웹폰트
*type
	serif 세리프: Egyption
    sans-serif 싼스세리프: Myriad Din
*알파벳의 기본구조
*어간<행간
어간이 행간보다 넓으면 안 예쁨
*장평: 글자늘이고줄이는것
* 칼럼->레이아웃
* 폰트패밀리: "영어"-"한글"



##### 단축키
*cc:ie : 익스플로러 최적화 시키기 위함.
lte: 9버전보다 작거나 같을때.
ie(... 6,7,8,9) <=(ie 9보다 작거나 같은버전)9
`<!--[if lte IE 9]>
 <![endif]-->`
```
*익스플로러 코드 읽히게 함:
<script src="../ie/html5shiv/dist/html5shiv.min.js"></script>
```

*lorem : 임의의 더미 문자

*스타일 -폰트설정하기
`font-family:serif;` -명조계통
`font-family:sans-serif` -고딕계통

* 사용할 수 있는 웹폰트
`www.google.com/fonts`
  - about->Early Access->korea검색

*웹에서 사용하는 폰트 = 웹폰트

*font-weight
서체의 굵기를 조정:
100 ~ 900(100단계씩 사용) 
regular(400) | normal 기준으로
가늘어지면, light, lighter, ... 
굵어지면 semi bold, bold, bolder ...
이는 서체를 개발한 회사(디자이너)에 따라 존재의 유무를 판단.
font-style
서체의 기울기를 조정:
normal(기본), italic(기울기) 두가지를 기억
line-height
행간
행간의 기본 높이는 120%(1.2em)
letter-spacing
자간: 글자와 글자 사이의 간격
word-spacing
어간: 단어와 단어 사이의 간격
font-stretch
장평:글자하나의 가로 넓이를 조정
text-transform
영문을 기준으로, 대문자(uppercase), 소문자(lowercase), 단어 첫글자(capitalize)를 대문자
text-decoration
글자의 장식을 뜻하며, 밑줄(underline), 상단라인(overline), 취소선(line-through)
text-indent
글자 들여쓰기
color
글씨색깔
text-align
글씨 좌우 정렬, 왼쪽(left), 오른쪽(right), 가운데(center), 양쪽(justify)-여러줄일경우
vertical-align
텍스트 세로정렬, block코드에서는 작동되지 않음
___
* 미디어쿼리
웹사이트를 접할 수 있는 기기