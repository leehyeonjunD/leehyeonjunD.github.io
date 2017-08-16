```
제어명령
if문, while, for문, for~in문, forEach
```

##### 분기

어떠한 내용을 선택해야하는 경우

- 단순 분기(if)
- 다수 분기(switch)

###### if(단순 분기)

"만일 ~라면..., 아니면..."
참 / 거짓 어느쪽인지 따라 대응하는 명령을 실행하도록 합니다.

```javascript
if(조건식){
	조건식이 true인 경우에 실행하는 명령	// 1번명령내용 진행
} else{
	조건식이 false인 경우에 실행하는 명령  // 2번명령내용 진행
}
```

값이 **참**인 경우 **1번 명령 내용**을 진행하며
**거짓**인 경우 **2번 명령 내용**을 진행하도록 처리하는 기능.

```javascript
var a = 10, b = 3;
if( !(a <= b) ){
  console.log('a의 값이 b값보다 작거나 같습니다.');
} else {
  console.log('b의 값이 a보다 크거나 같습니다.');
}
```



```javascript
if(조건식1){
	조건식1이 true인 경우에 실행하는 명령
} else if(조건식2){
	조건식2가 false인 경우에 실행하는 명령
} else{
	위 조건 모두 false인 경우 실행하는 명령
}	// 조건식1이 참일 경우 다음 조건식은 실행되지 않음.
```

```javascript
var x = 30;
if( x >= 20 ){
	console.log('변수 x는 20이상이다');
} else if( x >= 10 ) {
	console.log('변수 x는 20미만 10이상이다');
} else{
	console.log('변수 x는 10미만이다');
}
```



##### if(Nest)

```javascript
var x = 30;
if( x >= 10 ){
	if( x>= 20 ){
		console.log('변수 x는 20이상이다.');
}
} else{
	console.log('변수 x는 10미만이다.');
}
```

##### 중괄호 생략

```javascript
var x = 15;
if( x >= 10 )
	console.log('변수 x는 10이상이다.');
else
	console.log('변수 x는 10미만이다.');
```

단, 블록의 범위가 불명확 관계라 추천하지 않습니다.

```javascript
var x=1, y=2;
if( x == 1 )
	if( y == 1 ) console.log('변수 x,y는 모두 1이다');
else console.log('변수 x는 1이 아니다.');
// 잘못된 값이 나옴.
```

```javascript
var x=1, y=2;
if( x == 1 ){
	if( y == 1 ){ console.log('변수 x,y는 모두 1이다'); }
}else{ console.log('변수 x는 1이 아니다.');}
// 아무것도 안나옴
```



##### switch(다수 분기)

```javascript
1. switch(   )
2. 	  case	:
3.		break;
4.	  default	:
// break안할경우 '입금->송금->인출' 되는것과 같음.
```

```javascript
switch(식){
	case 값1:
		식 = 값1 인 경우에 실행되는 명령
	break;
  case 값2:
		식 = 값2 인 경우에 실행되는 명령
	break;
  case 값N:
		식 = 값N 인 경우에 실행되는 명령
	break;
  default:
		식의 값이 모든 값에 조건상 일치하지 않을 경우 실행되는 명령
}
```

```javascript
var rank = 'B';
switch(rank){
 case 'A':
  console.log('A랭크');
  break;
 case 'B':
  console.log('B랭크');
  break;
 case 'C':
  console.log('C랭크');
  break;
 default:
  console.log('랭크 외 입니다.');
}
```

```javascript
var MyRank = function(myrank) {
 var rank = myrank;
 switch(rank){
  case 'A':
   console.log('당신은 A랭크입니다');
  break;
  case 'B':
   console.log('당신은 B랭크입니다');
  break;
   default:
   console.log('랭크 외 입니다');
}
};
```

```javascript
<script>
  // switch (함수처리)
  // step_02 영문 글자수 파악하여 처리
var MyRank = function(myrank){
  var rank;
  
  if(myrank.length == 1){
	rank = myrank.toUpperCase();
    
  switch(rank){
    case 'A':
      console.log('당신은 A랭크로 최고 등급입니다.');
    break;
    case 'B':
      console.log('당신은 B랭크로 잘한 등급입니다.');
    break;
    case 'C':
      console.log('당신은 C랭크로 보통 등급입니다.');
    break;
    case 'D':
      console.log('당신은 D랭크로 노력 등급입니다.');
    break;
    default :
      console.log('당신은 등급외 입니다.');
  }	// switch
    
  }else{
    console.log('작성하는 글자는 '+ myrank +'입니다.');
    console.log('영문 알파벳 한자리 글자를 입력하세요.');
  } // if문 구분
};
</script>
```

// ------------------------------- 성적등급 -----------------------------------

```javascript
var score = function(num){
 var Num;
 if(num???? == 1){
  Num = num????;
 switch(Num){
  case 'num >= 0 && num <= 50':
   console.log('당신은 D등급입니다.');
  break;
  case 'num >= 51 && num <= 70':
   console.log('당신은 C등급입니다.');
  break;
  case 'num >= 71 && num <= 85':
   console.log('당신은 B등급입니다.');
  break;
  case 'num >= 86 && num <= 100':
   console.log('당신은 A등급입니다.');
  break;
  default :
   console.log('x');
  }else{
   console.log('작성하는 숫자는 '+ num +'입니다.');
   console.log('숫자 한자리 또는 두자리를 입력하세요.');
 }
};  // 내가한번써보기
```

```javascript
var ScoreTest = function(num){
 // 1. 50점 이하 파악
 if(0 <= num && num <= 50){
  console.log('당신은 50점이 안되었으므로 등급은 D입니다');
} else if(51 <= num && num <= 70) {
  console.log('당신의 등급은 C입니다');
} else if(71 <= num && num <= 85) {
  console.log('당신의 등급은 B입니다');
} else if(86 <= num && num <= 100) {
  console.log('당신의 등급은 A입니다');
} else{
  console.log('잘못된 값을 입력하셧습니다 0~100 사이의 숫자를 입력하세요')
}
 // return num;
};

// console.log( ScoreTest(100) );
// 샘 풀이
```

값을 주었을때
조건을 파악하고
myScore의 등급을 체크!
결과를 도출.검증