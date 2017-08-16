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