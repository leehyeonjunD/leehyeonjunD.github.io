#### JSON

##### (javascript object Notation- 자바스크립트 객체 표현방법)

- 과거 sql(db) -- 관계형db -table형태  :  mysql, orable, msSql, mariaDB.......


- 현재 sql(db) -- 빅데이터를 처리하거나, 좀더 복잡한 구조를 처리하기 위해 개량 :  MongoDB
- .html();        - 코드가 포함된 
- .val();           - form형식의 값을 가져오거나 입력할때 사용 
- .text();         - 글자를 가져오거나, 글자를 변경
- .append()  | .appenTo()
- .prepend() | .prependTo()

---

```javascript
(function($){
  var db = [
     {'name': '이도형', 'gender':'male'},
     {'name': '전혜빈', 'gender':'female'},
     {'name': '김하영', 'gender':'female'},
     {'name': '박새나', 'gender':'female'},
     {'name': '서보람', 'gender':'female'},
     {'name': '이수진', 'gender':'female'},
     {'name': '이현준', 'gender':'female'},
     {'name': '이단비', 'gender':'female'},
     {'name': '이승희', 'gender':'female'},
     {'name': '안영란', 'gender':'female'}
  ];

  // console.log(db[1].gender, db[0].name);

  var headBox = $('#headBox');
  var head_ul = headBox.children('ul');
  var head_li = head_ul.children('li');

  // head_li.eq(0).html('<span>').text(db[0].name);
  // head_li.eq(1).html('<span>').text(db[1].name);
  // head_li.eq(2).html('<span>').text(db[2].name);
  // head_li.eq(3).html('<span>').text(db[3].name);
  // head_li.eq(4).html('<span>').text(db[4].name);
  // head_li.eq(5).html('<span>').text(db[5].name);
  // head_li.eq(6).html('<span>').text(db[6].name);
  // head_li.eq(7).html('<span>').text(db[7].name);
  // head_li.eq(8).html('<span>').text(db[8].name);
  // head_li.eq(9).html('<span>').text(db[9].name);

var i = 0 ;
var li_length = head_li.length;   // 10;

for( ; i < li_length; i ++ ){
  head_li.eq(i).html('<span>').text(db[i].name);
}


})(this.jQuery);
```





```javascript
head_li.eq(0).html('<span>').text(db[0].name);
head_li.eq(1).html('<span>').text(db[1].name);
head_li.eq(2).html('<span>').text(db[2].name);
head_li.eq(3).html('<span>').text(db[3].name);
head_li.eq(4).html('<span>').text(db[4].name);
head_li.eq(5).html('<span>').text(db[5].name);
head_li.eq(6).html('<span>').text(db[6].name);
head_li.eq(7).html('<span>').text(db[7].name);
head_li.eq(8).html('<span>').text(db[8].name);
head_li.eq(9).html('<span>').text(db[9].name);
```

이것과 아래 for문은 같은뜻!

```javascript
var i = 0 ;
var li_length = head_li.length;   // 10;

for( ; i < li_length; i ++ ){
  head_li.eq(i).html('<span>');
  head_li.eq(i).find('span').text(db[i].name);
}
```

- html <span>을 만들고
  만든 span을 찾아서
  배열에서 name을 텍스트 입력해라~~~

---

```javascript
(function($){
  var db = [
     {'name': '이도형', 'gender':'male'},
     {'name': '전혜빈', 'gender':'female'},
     {'name': '김하영', 'gender':'female'},
     {'name': '박새나', 'gender':'female'},
     {'name': '서보람', 'gender':'female'},
     {'name': '이수진', 'gender':'female'},
     {'name': '이현준', 'gender':'female'},
     {'name': '이단비', 'gender':'female'},
     {'name': '이승희', 'gender':'female'},
     {'name': '안영란', 'gender':'female'}
  ];

  // console.log(db[1].gender, db[0].name);

  var headBox = $('#headBox');
  var head_ul = headBox.children('ul');
  var head_li = head_ul.children('li');

  // head_li.eq(0).html('<span>').text(db[0].name);
  // head_li.eq(1).html('<span>').text(db[1].name);
  // head_li.eq(2).html('<span>').text(db[2].name);
  // head_li.eq(3).html('<span>').text(db[3].name);
  // head_li.eq(4).html('<span>').text(db[4].name);
  // head_li.eq(5).html('<span>').text(db[5].name);
  // head_li.eq(6).html('<span>').text(db[6].name);
  // head_li.eq(7).html('<span>').text(db[7].name);
  // head_li.eq(8).html('<span>').text(db[8].name);
  // head_li.eq(9).html('<span>').text(db[9].name);

var i = 0 ;
var li_length = head_li.length;   // 10;

for( ; i < li_length; i ++ ){
  head_li.eq(i).html('<span>');
  head_li.eq(i).find('span').text(db[i].name);
}

// ------------------------------------------------------

// 네이버, 다음, 구글, w3schools, darum.daum, nuli.navercorp
// 위 홈페이지 주소를 찾아 링크와 함께 만드시오.


var site = [
    {'site':'네이버',         'address':'http://naver.com'},
    {'site':'다음',           'address':'http://daum.net'},
    {'site':'구글',           'address':'http://google.com'},
    {'site':'w3schools',      'address':'https://www.w3schools.com/'},
    {'site':'darum.daum',     'address':'http://darum.daum.net/'},
    {'site':'nuli.navercorp', 'address':'http://nuli.navercorp.com/'}
  ];


// $('body').append('<div id="webPage"></div>');
// 위내용은 script 코드뒤에 작성되는 문제가 있다.

// 내부가 아닌 형제에서 이전 또는 이후
// before() | after()

$('body').find('script').before('<div id="webPage"></div>');
var webPage = $('#webPage');
webPage.html('<ul>');
var web_ul  = webPage.find('ul');

// web_ul.html('<li>');
// web_ul.append('<li>');


// <ul>
  // <li><a href="http://naver.com">네이버</a></li>

  // .attr([속성명],[변경할값])




})(this.jQuery);
```

```javascript
$('body').find('script').before('<div id="webPage"></div>');
var webPage = $('#webPage');
webPage.html('<ul>');
var web_ul  = webPage.find('ul');

// web_ul.html('<li>');
// web_ul.append('<li>');
```

$('body'): html의 `body`에서 
.find('script'):  `script`를 찾아서
.before('<div id="webPage"></div>'): 형제 이전에 생성

---

```javascript
(function($){
  var db = [
     {'name': '이도형', 'gender':'male'},
     {'name': '전혜빈', 'gender':'female'},
     {'name': '김하영', 'gender':'female'},
     {'name': '박새나', 'gender':'female'},
     {'name': '서보람', 'gender':'female'},
     {'name': '이수진', 'gender':'female'},
     {'name': '이현준', 'gender':'female'},
     {'name': '이단비', 'gender':'female'},
     {'name': '이승희', 'gender':'female'},
     {'name': '안영란', 'gender':'female'}
  ];

  // console.log(db[1].gender, db[0].name);

  var headBox = $('#headBox');
  var head_ul = headBox.children('ul');
  var head_li = head_ul.children('li');

  // head_li.eq(0).html('<span>').text(db[0].name);
  // head_li.eq(1).html('<span>').text(db[1].name);
  // head_li.eq(2).html('<span>').text(db[2].name);
  // head_li.eq(3).html('<span>').text(db[3].name);
  // head_li.eq(4).html('<span>').text(db[4].name);
  // head_li.eq(5).html('<span>').text(db[5].name);
  // head_li.eq(6).html('<span>').text(db[6].name);
  // head_li.eq(7).html('<span>').text(db[7].name);
  // head_li.eq(8).html('<span>').text(db[8].name);
  // head_li.eq(9).html('<span>').text(db[9].name);

var i = 0 ;
var li_length = head_li.length;   // 10;

for( ; i < li_length; i ++ ){
  head_li.eq(i).html('<span>');
  head_li.eq(i).find('span').text(db[i].name);
}

// ------------------------------------------------------

// 네이버, 다음, 구글, w3schools, darum.daum, nuli.navercorp
// 위 홈페이지 주소를 찾아 링크와 함께 만드시오.


var site = [
    {'site':'네이버',         'address':'http://naver.com'},
    {'site':'다음',           'address':'http://daum.net'},
    {'site':'구글',           'address':'http://google.com'},
    {'site':'w3schools',      'address':'https://www.w3schools.com/'},
    {'site':'darum.daum',     'address':'http://darum.daum.net/'},
    {'site':'nuli.navercorp', 'address':'http://nuli.navercorp.com/'}
  ];


// $('body').append('<div id="webPage"></div>');
// 위내용은 script 코드뒤에 작성되는 문제가 있다.

// 내부가 아닌 형제에서 이전 또는 이후
// before() | after()

$('body').find('script').before('<div id="webPage"></div>');
var webPage = $('#webPage');
webPage.html('<ul>');
var web_ul  = webPage.find('ul');

// web_ul.html('<li>');       // 기존의 내용을 무시하고 덮어씌우기
// web_ul.append('<li>');     // 기존의 내용 뒤에 추가

// 변수 초기화
i = 0;
for(; i<site.length; i++){
// 생성된 ul내부에 필요갯수만큼의 li>a생성
  web_ul.append('<li><a></a></li>');

  web_ul.find('li').eq(i).find('a').attr('href',site[i].address);

  web_ul.find('li').eq(i).find('a').text(site[i].site);
}

// 변수 초기화(2번째 방법)
// i = 0;
// var li_eq;
// for(; i<site.length; i++){
//   web_ul.append('<li><a></a></li>');
//   li_eq = web_ul.find('li').eq(i).find('a');

//   li_eq.attr('href',site[i].address);
//   li_eq.text(site[i].site);
// }

// ---------------------------------------------------------
// #car 를 생성하고 해당하는 내용에 img태그를 생성하여 이미지 및 설명을 작성하시오.

webPage.after('<div id="car">');
$('#car').html('<ul>');
var carUl = $('#car').children('ul');
// 위 코드는 가능한 내용이지만(알 수 없는 오류도 발생) 가독성이 떨어지고, 변수할당이 없어, 사용하기 불편하다.
// 상황에 맞게 적절한 변수 할당과, 기능의 분류를 하는 것이 좋다.
// car리스트 json형태로 처리
var address = '../img/json/'
var car = [
    {'alt':'sunset', 'img':'sunset.jpg'},
    {'alt':'cat', 'img':'cat.jpeg'},
    {'alt':'white', 'img':'white.jpeg'},
    {'alt':'nightview', 'img':'nightview.jpeg'},
    {'alt':'wave', 'img':'wave.jpeg'}
];

  // console.log(address + car[0].img);

i = 0;
var carLength = car.length;
var myImg, myAlt, liImg;
console.log(carLength);

for(; i<carLength; i++){
  carUl.append('<li><img>');
  myImg = address + car[i].img;
  myAlt = car[i].alt;
  liImg = carUl.find('li').eq(i).find('img');

  liImg.attr('src',myImg);
  liImg.attr('alt',myAlt);
  liImg.attr({'src':myImg, 'alt':myAlt});
}

})(this.jQuery);
```

`변수 webPage`의 뒤에 만들어라.
`#car`에 html 코드 `<ul>`를 만들어라.
ul을 변수로 처리.
주소를 변수로 간략하게 처리.
이미지 설명과 이미지이름 변수 처리.
변수 초기화.
`car`의 갯수를 변수로 처리.
3개의 변수를 추가로 만들어줌.
숫자보다 작다면 1씩 더해라.
`<li><img>`를 추가해라.

---

json_02.js

```javascript
// json_02.js
(function($){
//   var product = [

//     {'car'    :
//               ['audi','jaguar','롤스로이스','폭스바겐','현다이']},
//     {'pen'    :
//               ['모나미','지브라','라미','몽블랑']},
//     {'coffee' :
//               ['자바','비엔나','스타벅스','자바시티','던킨'],
//      'juice'  :
//               ['ade','smoodi','fruit']
//     }

//   ];
// console.log(product[2]);
// console.log(product[2].coffee);
// console.log(product[2].coffee.length);
// console.log(product[2].juice[0]);

// ---------------------------------------------------------------------

var address  = '../img/coffee/';
var coffee_1 = [
  [ {'img': {'src':'chai.jpg','alt':'제품1 이미지설명'} },
    {'menu':{'title':'chai<br />차이',
    'content':'홍차, 시나몬, 클로브, 카르다몸과 다른 향신료들의 달콤하고 향기로운 블렌드. 이국적인 향과 향긋한 맛을 지니고 있습니다.'}}
  ],  // 제품 1
  [ {'img': {'src':'english_breakfast.jpg','alt':'제품1 이미지설명'} },
    {'menu':{'title':'english_breakfast<br />잉글리시 블랙퍼스트',
    'content':'다질링과 실론 차의 완벽한 블렌드. 커피빈만의 특별한 제조법은 중간 정도의 무게감과 상쾌한 맛이 잘 조화된 차 한잔을 만들어 냅니다. 우유와 잘 어울립니다.'}}
  ],  // 제품 2
  [ {'img': {'src':'strawberry_cream_oolong.jpg','alt':'제품1 이미지설명'} },
    {'menu':{'title':'strawberry_cream_oolong<br />스트로베리',
    'content':'태국 북부산악지역인 메살롱 지역에서 생산되는 우롱차에 스트로베리와 크림맛을 가향하여 만들어 집니다. 달콤한 디저트나 견과류와 잘 어울립니다.'}}
  ]   // 제품 3

];

$('body').find('#headBox').after('<div id="coffee"><ul>');
var coffee = $('#coffee').children('ul');

// #coffee 에 li항목을 만들고, 각각의 내용을 삽입 test
// coffee.append('<li>');
// coffee.find('li').append('<div><img>');
// coffee.find('li').append('<dl><dt>');
// coffee.find('li').children('dt').after('<dd>');

// 반복 --------------------------------------------------


coffee.append('<li> <div><img></div>  <dl> <dt></dt> <dd></dd> </dl> </li>')
var img     = coffee.find('li').eq(0).find('img');
var title   = coffee.find('li').eq(0).find('dt');
var content = coffee.find('li').eq(0).find('dd');

img.attr({'src':address + coffee_01[0] [0].img.src ,
          'alt':address + coffee_01[0] [0].img.alt});
title.text(coffee_01[0] [1].menu.title);
content.text(coffee_01[0] [1].menu.content);


})(this.jQuery);
```

for문

```javascript
// json_02.js
(function($){
//   var product = [

//     {'car'    :
//               ['audi','jaguar','롤스로이스','폭스바겐','현다이']},
//     {'pen'    :
//               ['모나미','지브라','라미','몽블랑']},
//     {'coffee' :
//               ['자바','비엔나','스타벅스','자바시티','던킨'],
//      'juice'  :
//               ['ade','smoodi','fruit']
//     }

//   ];
// console.log(product[2]);
// console.log(product[2].coffee);
// console.log(product[2].coffee.length);
// console.log(product[2].juice[0]);

// ---------------------------------------------------------------------

var address  = '../img/coffee/';
var coffee_01 = [
  [ {'img': {'src':'chai.jpg','alt':'제품1 이미지설명'} },
    {'menu':{'title':'chai<br />차이',
    'content':'홍차, 시나몬, 클로브, 카르다몸과 다른 향신료들의 달콤하고 향기로운 블렌드. 이국적인 향과 향긋한 맛을 지니고 있습니다.'}}
  ],  // 제품 1
  [ {'img': {'src':'english_breakfast.jpg','alt':'제품1 이미지설명'} },
    {'menu':{'title':'english_breakfast<br />잉글리시 블랙퍼스트',
    'content':'다질링과 실론 차의 완벽한 블렌드. 커피빈만의 특별한 제조법은 중간 정도의 무게감과 상쾌한 맛이 잘 조화된 차 한잔을 만들어 냅니다. 우유와 잘 어울립니다.'}}
  ],  // 제품 2
  [ {'img': {'src':'strawberry_cream_oolong.jpg','alt':'제품1 이미지설명'} },
    {'menu':{'title':'strawberry_cream_oolong<br />스트로베리',
    'content':'태국 북부산악지역인 메살롱 지역에서 생산되는 우롱차에 스트로베리와 크림맛을 가향하여 만들어 집니다. 달콤한 디저트나 견과류와 잘 어울립니다.'}}
  ]   // 제품 3

];

$('body').find('#headBox').after('<div id="coffee"><ul>');
var coffee = $('#coffee').children('ul');

// #coffee 에 li항목을 만들고, 각각의 내용을 삽입 test
// coffee.append('<li>');
// coffee.find('li').append('<div><img>');
// coffee.find('li').append('<dl><dt>');
// coffee.find('li').children('dt').after('<dd>');


// 반복 --------------------------------------------------
var img, title, content,
    i = 0,
    coffeeLength = coffee_01.length;
console.log(coffeeLength);
for(; i < coffeeLength; i++){
  coffee.append('<li> <div><img></div>  <dl> <dt></dt> <dd></dd> </dl> </li>')
  img     = coffee.find('li').eq(i).find('img');
  title   = coffee.find('li').eq(i).find('dt');
  content = coffee.find('li').eq(i).find('dd');

  img.attr({'src':address + coffee_01[0] [0].img.src ,
            'alt':address + coffee_01[0] [0].img.alt});
  title.text(coffee_01[0] [1].menu.title);
  content.text(coffee_01[0] [1].menu.content);  
}


})(this.jQuery);
```

