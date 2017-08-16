7.10

### scss?

scss?

- 새파일 scss 만들고
- node-sass -o css scss --output-style nested -w
- 저장 후 css만들어졌는지 확인.

-------------------------------------------
 -webkit  (웹킷)
 -moz	(모질라)
 -ms	(마이크로소프트)
 -o		(오페라)

---



/* scss */

```scss
@mixin prefix($attr, $value){
 -webkit-#{$attr}:$value;
 -moz-#{$attr}:$value;
 -ms-#{$attr}:$value;
 -o-#{$attr}:$value;
 #{$attr}:$value;
```

  => 변수를 강제로 #{} 감싸줘야함.

-------------------------------------------

### operator(연산자)

-------------------------------------------

### list(array)

```scss
{ css list 문법 }

ex) li:nth-child(1){}
```

```scss
{ scss list 문법 } li문법을 쓰겠다는 명령어

ex) nth($img, 1)
```

-------------------------------------------

### maps(object)

map-get(변수이름, 변수의 내부에 있는 속성명);

-------------------------------------------

### data type

-------------------------------------------

오후

1. 기업홈페이지 기획 -> prototype(wire frame)-3p

2. html/css 기초레이아웃 -> css를 scss로 변경

----제출 포트폴리오