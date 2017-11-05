// json_01.js

// JSON(javascript object Notation- 자바스크립트 객체 표현방법)
// 과거 sql(db) -- 관계형db -table형태  :  mysql, orable, msSql, mariaDB.......
// 현재 sql(db) -- 빅데이터를 처리하거나, 좀더 복잡한 구조를 처리하기 위해 개량 :  MongoDB

  // .html(); - 코드가 포함된 
  // .val();  - form형식의 값을 가져오거나 입력할때 사용 
  // .text(); - 글자를 가져오거나, 글자를 변경
  // .append()  | .appenTo()
  // .prepend() | .prependTo()

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

