## Javascript Datatype 데이터타입

### 기본 자료형 분류

- **Number**
- **String**
  - '0'의 경우 숫자가 아닌 문자
- **Boolean**
  - true(참) / false(거짓)
- **특수형**
  - 미정의 (Undefined)
    임신을하면 태아가 있긴있는것처럼
  - 값 없음 (Null) 
    값이 없음. 이름은 있음.
    0이라는 것도 값

---

#### 참조 자료형 분류

- **배열 (array)** :  데이터의 집합 (각 요소에는 인덱스 번호로 접근 가능), **[ ]**
- **객체 (object)** :  이름으로 접근 가능), **{ }**
- **함수 (function)** : 일련의 처리(절차)의 집합,  **function( ){ }**

---

##### literal (리터럴)

모든 ***값***을 의미.

리터럴에는 숫자, 문자, 배열 리터럴(배열, 객체, 함수)이 존재합니다.

```javascript
10;               // 리터럴은 10
'hello world';    // 리터럴은 'hello world'
var test   =100;  // 리터럴은 100
var box    ='hello javascript'; // 리터럴은 'hello javascript'
var allRight = true;    // 리터럴은 true -> 참거짓을 판단하는 표시
```

---

#### 기본자료형

##### Number 타입

***숫자***
(즉, 숫자리터럴)

숫자 자료형에는 소수점, 음수, 양수 모두 포함됩니다.



##### String 타입

***텍스트 (문자)***

텍스트 자료형의 경우 ' ' 을 사용해 구분합니다.
1과 '1' 의 차이점
숫자끼리 만나면, 더하기기능, 
텍스트와 만나면, 연결의 기능.



##### Boolean 타입

***논리적인 요소를 나타냄***

true 와 false 의 두 가지 값을 가질 수 있습니다.
쉽게 말하자면, 참과 거짓을 구분하는 기능입니다.
이외에는 다른 어떤 값도 없습니다.



##### 특수형

###### - Null 타입

null타입은 딱 한 가지 값을 가짐.

물건을 구매하기위해 열심히 *이름, 배송지, 연락처* 등을 작성하는 중 
*주문 취소* 버튼을 클릭해서 내용을 삭제하는 기능으로 
이해하면 쉽게 다가갈 수 있습니다.

###### - Undefined 타입

변수의 값이 없다! 할당하지 않는 값.
즉, 변수의 이름은 선언하되 값은 도출하지 않은 상태

---

#### 참조 자료형

##### 배열(array)

하나의 이름에 여러가지의 내용을 담아 처리할 때

```javascript
var fruits = ['사과','포도','바나나','석류'];
console.log(fruits[0]);
console.log(fruits[3]);
```

> 보통, 숫자의 시작은 ***1***
> 프로그램언어에서는 숫자의 시작은 ***0*** 이다!



##### 객체(object)

자바스크립트 객체는 배열과 매우 비슷. 
하지만 서로다른 원소에 접근할 때, 
배열 - 숫자,  객체 - 문자열



배열 - 여러 **개체를 표현**할 때 사용,
객체 - 다양한 **특성이나 속성**이 있는 **하나의 개체**를 표현할 때 사용.



문자열을 ***키(Key)*** 또는 ***프로퍼티(Property)***라고 부르고,
이들이 가리키는 원소를 값(value)라고 부릅니다.

```javascript
var baby = {
  'korean':80,					// 변수 'baby' 내부에는 키는 'korean', value는 80
  'english':50,					// 변수 'english' 내부에는 키는 'korean', value는 50
  'math': 70					// 변수 'math' 내부에는 키는 'korean', value는 70
};
console.log(baby.korean);		// 변수 'baby'의 국어성적을 확인하려면, 'baby.korean' 으로 확인
```

`baby.korea` 내용으로 변수이름 뒤에 `.`을 붙이고
이어서 원하는 값을 도출시킬 **key**의 이름을 작성하면 그에 따른 값을 얻을 수 있습니다.

---

#### 함수(function)

자바스크립트에서 함수(function)는
재사용할수 있도록 코드를 묶어 두는 방법 입니다.

```javascript
function(){
  console.log('함수의 동작');
}
```

=> 함수를 작성하는 문법에 대한 기본 형태입니다.

 

`function(){}` : 기본 형태
`{` 와 `}`의 사이에 동작할 기능을 작성하도록 하는 구조.

함수는 기본적으로 스스로 작동할 수 없습니다.

```javascript
var MyFunction = function(){				// 변수 'MyFunction'에 함수를 대입
  console.log("함수를 처음 사용해 보았습니다!");
};

MyFunction();								// 변수 'MyFunction'을 실행(함수는 '()' 를 붙임)
```

---

#### sublime 메모



###### scss

**name( );**

###### js

**typeof** : data구조 파악하는 용도



```javascript
<!-- step_03_js_beginner_02_dataType.html -->
console.log(hyChange);
// NaN: 숫자가 아님을 뜻하는 에러 메시지

var changeNum = parseInt(hyNum + '1');
// Parse + Integer => parseInt()    값을 숫자로 치환
 
hy = hy + 100;
var hh = hy + 100;
/* 
 *1번째줄, 2번째줄 같은 뜻이지만,
 *윗줄 맨앞 hy는 재활용한것.
*/

console.log(parseInt(hy));
// 100 : parseInt는 앞부분 부터 숫자로 인지할 수 있는 영역까지 변환

console.log(!boo);
// !의 의미: not(반대의 개념)
// a[href!="#"]{ }

<!-- step_03_js_beginner_02_dataType_2.html -->
// hoist현상
// 지정된, 할당된 이름(변수)이 최 상단으로 끌어 올려지는 것
  값을 최상단으로 올라가서 설정.
```



칠판 메모

###### Javascript

`MS` Jscript,  `TypeScript`

`adobe` actionScript

`google` Dart
