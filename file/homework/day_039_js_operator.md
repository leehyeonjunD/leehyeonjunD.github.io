###### 연산자

=, , , - +



`x = a + b;`

x a b : 오퍼랜드 연산대상의 변수/리터럴

= + : 오퍼레이터(연산자)



###### 산술연산자

대수 연산자
표준적 사칙연산

`+, -, *, /, %, ++, --`

###### 문자열 연산자



###### 증감 연산자

1씩 더하거나, 1씩 뺄때

- 전위형 덧셈

```javascript
var before = 0;

console.log('최초:', before);
++before;
console.log('처음1더하기:', before);
++before;
console.log('두번째1더하기:', before);

console.log('현재값:', before);
console.log('바로1더하기:', before);
console.log('두번째 바로 1더하기:', ++before);
console.log('세번째 바로 1더하기:', ++before);
console.log('네번째 바로 1더하기:', ++before);
console.log('다섯번째 바로 1더하기:', ++before);
```

- 후위형 덧셈

ex)  만나이, 실제나이

```javascript
var after = 20;

console.log('최초:', after);
after++;
console.log('처음1더하기:', after);
after++;
console.log('두번째1더하기:', after);

console.log('현재값:', after);
console.log('바로1더하기:', after++);
console.log('두번째 바로 1더하기:', after++);
console.log('세번째 바로 1더하기:', after++);
console.log('중간 확인하기:', after);
console.log('다시 바로 1더하기:', after++);
console.log('다시 두번째 바로 1더하기:', after++);
console.log('값 재확인:', after);
```



###### 복합 대입 연산자

=  +=  -=  *=  /=  %=

&= |= ^= <<= (비트) 

```javascript
var x = 1;
var y = x;
x = 2;
console.log(y);

var ary1 = [0,1,2];
var ary2 = ary1;
ary1[0] = 5;
console.log(ary2);
```



###### 구조해제/비구조화 할당

비구조화, 객체 파괴, 비구조화 할당 이름이 다양.

```javascript
var foo = ["one","two","three"];

var one = foo[0];
var two = foo[1];
var three = foo[2];

var [one,two,three] = foo;
```

ex) 은닉: 보안코드에 씀

-보안코드 잘못쓸경우:

id          \n

pw         (자동완성됨!!..)



###### 삼항 연산자

=, == , !=, !==

<, <=, > >=우변이 작거나 같은경우

? :  
('조건식 ? 식1 : 식2' 조건식이 true인경우 식1, false인경우 식2를 취한다.)

```javascript
홍어? 삼겹살 : 묵은지
 if ? true  : false
질문? true  : false ;
```

```javascript
if(  질문  ){
  //참( true )
}else{
  //거짓( false )
}
```

sass 삼항 연산자

```

```



###### 등가 연산자(==)

==연산자는 좌변/우변의 값을 비교하여 같은 경우에는
true, 같지 않을 경우에는 false를 반환합니다. 그러나 오퍼랜드의
데이터형에 따라 비교의 기준이 다르므로 주의가 필요합니다.

```
표 읽기(js_basics_02_operator_1.html)
```

동치연산사 표현법

반대개념 !=, !==

```javascript
var num2 = 1;
var boo1 = true;
console.log(num2 == boo1);				// true
console.log(typeof(num2), typeof(boo1));// number boolean
console.log(num2 === boo1);				// false
```

```javascript
var und;
var nl = null;

null == false
'true' = true
```

###### 조건연산자(삼항연산자)

`test ? expression1 : expression2`

식을 ?을 통해 **참/거짓**을 판단하게하고,
:를 기점을 참이면 왼쪽, 거짓이면 오른쪽의 식을 진행하도록 처리.

**정보처리기사(개발계통 필수자격증)

```javascript
var now = new Date();
var greeting = "Good" + ((now.getHours() > 17) ? " evening.":" day.");

console.log(greeting);
```

**newDate();** 는 현재의 시간을 확인하는 메소드입니다.
앞에 **new**라는 붙으면 생성자로 별도로 처리하도록 하게만드는 기능입니다.
현재 시간을 파악하여, 17시 기준으로 넘으면(**참**) **evening** 를 호출, 넘지 않으면 **day**를 호출하도록 되어있습니다.



```javascript
var now = new Date();
var greeting = "Good";
if(now.getHours() > 17){
greeting += " evening.";
}else{
  greeting += " day.";
}

console.log(greeting);
```



###### 논리연산자

- true / false

  - 1=='1' && 1==='1'
    true           false

  ​                 false

  ​

  - ​            ||               

  ​       false            true

  ​                  true

  ​

  - ```javascript
    if( dp <= 640 ){
    }else if( 640<dp&& dp<=1024 ){
    }
    ```