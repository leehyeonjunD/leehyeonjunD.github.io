### margin과 padding
* margin 여백(외부여백)
* padding 여백(내부여백) -눈에보이지x
* border 선(외곽선)
* outline
  - 일반 사용x
  - focus(활성화)
  	활성화 상태를 테두리선으로 보이게 만드는 것!



___
## layout_01

* 구형브라우저에서는 header, section, aside, article, footer를 인지할 수 없다! 그래서 강제로 블럭처리한다!
```
<script>
    var hd = document.getElementsByTagName('header');  </script>
```
* clearfix
`.clearfix::after{content:" "; display: block; 
width: 0; height: 0; clear: both;}`

cc:ie6
->
```
<!--[if lte IE 6]>
    <script src="../ie/html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

***
단축키: #wrap
```
<div id="wrap"></div>
```
header#headbox
```
<header id="headbox"></header>
```
  <ul>
    <li></li>
  </ul>

### emmet

* shift + ctrl + D : 복사
* ul>li{$$}*10 : ul li 10개
* bgc#ccc : 백그라운드컬러 #원하는컬러
* h1{logo} : `<h1>logo</h1>`