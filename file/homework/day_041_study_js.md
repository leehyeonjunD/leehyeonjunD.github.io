### 반복문 loop

프로그램의 구조

- 기술된 순서대로 처리를 행하는 **순차** 구조
- 조건에 따라 처리를 분기하는 **선택** 구조
- 특정의 처리를 반복 실행하는 **반복** 구조

---

### 반복

- while / do~while : 반복문/최소 한번은 실행후 반복
- for : 반복문
- for~in : 객체를 순환할때 사용
- forEach : 각각 처리하는 구문
- break/continue : 상황에 따른 종료 및 건너띄기

---

##### while 

어떤 조건문이 참이기만 하면 문장을 계속해서 수행

```javascript
while(조건식){
 // 조건식이 true일 때에 실행되는 명령
}
```

조건문은 반복문 안의 문장이 실행되기 전에 확인 됩니다.

```javascript
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n);
}
console.log(x);
```

---

##### 무한루프

자바스크립트에서는 **무한루프**라는 것이 있습니다. 영원히 종료되지 않는(종료조건이 부합되지 않는 상태)루프를 말합니다.

```
var n = 0;
while (true) {
  console.log("Hello, world_" + ++n);
}
```

위 내용은 과연 어떻게 될까요? 결과는 이전과 마찬가지로 무한 반복 처리됩니다. `while`의 조건식에서 무조건 `true`로 처리하였기 때문에 계속 진행 될 수 밖에 없는 결과를 만들어 내는 것 입니다.

---

###### 1부터 100까지의 합이 무엇인지 만들어 보세요.

내가해본것

```javascript
var n = 0;
var x = 0;
while (n < 100) {
  n++;
  x += n;
  console.log(n);
}
```

답

```javascript
var num = 0;
var max = 0;
while (num < 100) {
  num ++;
  max += num;
}
console.log('1부터 100까지의 총합은: ' + max + ' 입니다.');
```

```javascript
var num = 0;
var max = 0;
while (num <= 100) {
  max += num;
  num ++;
}
console.log('1부터 100까지의 총합은: ' + max + ' 입니다.');
```

#### 반복

- 최초의 값
- 조건을 충족
- 증감식

------

##### do~while

일단 한번은 실행한다!

while문은 거의 do~while문 때문에 있는 것이다.

```javascript
do{
  // 처음한번은 무조건 실행, 
  // 이후, 조건식이 true일때에 실행되는 명령
} while(조건식);				// 필요한 조건식을 나중에 작성
```

---

##### for

조건식의 진위(true/false)에 대응하여 루프를 제어하는 반복문이 `while/do~while` 이라면, 미리 지정한 횟수만큼 반복처리를 행하는 명령이 `for` 문 입니다.

`for`는 가장 많이 사용하는 명령구문입니다. 꼭 익혀두셔야 하는 내용이니 차근 차근 익혀보세요.

```javascript
for (초기화식; 루프 계속 조건식; 증감식){
  // 루프 내에서 실행하는 명령;
}
```

```javascript
for (var i=0; i < 10; i++){
  console.log(i+'의 값을 도출합니다');
}
```

```javascript
var array = ['포도', '사과', '바나나', '망고'];

for(var i= 0; i<array.length; i++) {
  //  console.log(array[i]);
}
console.log(i);     // 설계 오류
```

`for`를 동작하는 내부에서 `i`는 지역변수로 동작하는 것이 아니라는 이야기 입니다. 그렇기 때문에 아래처럼 표현을 바꿀 수도 있습니다.

```javascript
var n = "외부(전역)변수";
var x = "두번째 외부";

function inVar(){
  var n = "지역변수";
  var y = "내부 변수2"
console.log(n);
console.log(x);     // 지역변수로 처리
}

console.log(n);
console.log(y);
```

```javascript
x = 4;
var y = 0;
const -> 상수
let -> 변수

ex) const x=4;
ex) for(let i=0; ....){
    }        // i코드 - 에러 발생
```

```javascript
var array = ['강동원', '이민기', '원빈', '정우성'];
var i = 0; 
for(; i<array.length; i++) {
    console.log(array[i]);
}
console.log(i);
```

---

##### for문과 while문의 차이

```javascript
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (;cars[i];) {
    console.log(text += cars[i]+' ');
    i++;
}
```

```javascript
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
    console.log(text += cars[i]+' ');
    i++;
}
```

---

```javascript
for(var i=0; i<=3; i++){
  for(var j=1; j<=3; j++){
    console.log("i: " + i, "j: "+j);
  }
}
```

---

```javascript
for(var i=0; i<=100; i+=3){}
```

---

```javascript
for(var i=0; i<5; i++){
    var count = 1;
    var result = "";
    for(var j=0; j<count; j++){
      result += "*";
    }
      document.write(result, '<br>');
}
```

---

```javascript
var screen = window.innerWidth;
console.log(screen);
```

window : 객체     /       .innerWidth; : property

- 브라우저 => 화면크기값 확인할 수 잇다.

  -> why? 반응형웹에서 필요한 기능 도출시키기 위함.

##### 해상도

1. `dpi = ppi`  - 1인치 안에 몇개?
2. 화면 크기   1920, 1024, 128 ...
3. 물리 / 논리 픽셀

************중요중요

```javascript
// 기본 크기를 목록으로 설정
var device = [480, 640, 768, 1024, 1280];
// 크기별, 명칭
var level = ['mobile_1','mobile_2','tablet_1','tablet_2','pc_1','pc_2'];
// 화면 크기값 가져초기
var screen = window.innerWidth;
// 반복문을 통한 크기값 설정
for(var i = 0; i<device.length; i++){
  if( device[i] < screen && screen <= device[i+1]){
	//console.log('현재 화면의 크기는 ' + device[i]+'보다 크고 '+device[i+1]+' 보다 작은' + screen + '크기 입니다.');
	console.log('view는 '+ level[i]+' 입니다');
  }
}// for
// 목록 내에 들어있는 화면크기와 일치 하지 않는 경우
if(screen > device[device.length - 1]){
	console.log('현재 화면의 크기는 ' + device[i - 1] + ' 보다 큰 화면입니다.');
}
```