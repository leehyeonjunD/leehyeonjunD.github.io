```
복습*		(): 실행 또는 실행, method
          return / scope: 변수에 대한 영역
		  if(true){          } : 값이 참이면 실행됨
		  naming(식별자) 기법, 이름설정하는 3가지 방법, 명명규칙
```

# javascript

##### 변수를 선언할때,  **var** 를 붙인다.

###### 변수를 저장하는 방법

```
var minute = 60;
var hour = 60;
var hourSecond = minute * hour;
console.log(hourSecond);			// 3600
```

```
var day = 24;
var year = 365;

var daySecond;		// 하루는 몇초인지 확인
var yearSecond;		// 일년은 몇초인지 확인
```



###### 증가와 감소

1씩 증가하는 값은 `++`라고 표기.

1씩 감소하는 값은 `--`라고 표기.

```javascript
var minuteTime = 30;
++minuteTime;
console.log(minuteTime);// 31
++minuteTime;
console.log(minuteTime);// 32
---
var myEgg = 30;
--myEgg;
console.log(myEgg);		// 29
---
var applePrice = 500;
applePrice = applePrice + 300;
console.log(applePrice);// 800

applePrice = applePrice - 200;
console.log(applePrice);// 600
---
*grapePrice += 1000;	//grapePrice = grapePrice + 1000;
*grapePrice -= 1500;	//grapePrice = grapePrice - 1500;

```

문자열

```javascript
var myKey = 10;
myKey = 'martiz'		// martiz
// 현재의 변수가 변동된 것임.
```

```javascript
var myNum = '100';
var encoding = parseInt(myNum);

console.log(encoding);		// 100
// 이는 문자 100으로 표현되어있지만
// 숫자로도 전환이 가능한 코드입니다.
// 그래서 parseInt()라는 추가 명령어를 첨부함.
// parseInt()는 정수로 전환하라는 명령어 입니다.

// '( )'안에 필요한 값을 넣으면 숫자료 전환가능한 내용은 정수형 숫자로 변합니다. 단, 문자 중간에 숫자가 온다면 처리 되지 않습니다.

어떠한 명령어중에 ()를 동반하는 명령어는 메소드 라고 합니다. 어떠한 기능을 실행하게 하는 기능이라고 보시면 됩니다. 간단한 예로 console.log()를 보면 log() 부분이 parseInt()형태와 동일하게 되어져 있습니다. 결국 log()기능도 실행을 하는 명령어인 메소드 라고 보면 됩니다.
```



```javascript
// log()기능도 실행을 하는 명령어인 메소드 라고 보면 됩니다.
var myText = '1myText10000';
var encoding = parseInt(myText);
console.log(encoding);		// 1
// 첫글자가 숫자 형태로 되어 잇어야 하며,
// 한글자라도 문자가 들어있다면 그 이후내용 사라짐.
```

```javascript
var brokenString = "I'm a broken string";
console.log(brokenString);

var brokenString = 'I\'m a broken string';
console.log(brokenString);
```

---

##### 문자열 길이 구하기

- .length

```javascript
var myjs = 'javascript'.length;
var learn = '쉽게이해하기';

console.log(myjs + learn.length);	// 16
```

```javascript
var java = 'java';
var script = ' script';
var webLang = java + script;

console.log(webLang.length);		// 11
```

---

##### 문자열에서 한글자 가져오기

###### `[ ]` 형식 사용하기

```javascript
var secret1 = '자바스크립트를 이해하기';
var secret2 = '병역 신체검사';
var secret3 = '잘만든 작품을 보면 나오는 감탄사!';
var secretTextResult = secret1[0] + secret2[3] + secret3[15];

console.log(secretTextResult);		// 자신감
```

* charAt()

```javascript

var charText = 'my character';
var char = charText.charAt(1);

console.log(char);					// y
```

- slice()

```javascript
var longText = '긴 문자열의 내용을 잘라내기';
var cutText = longText.slice(2, 5);

console.log(cutText);				// 문자열
// 변수에 담아서 사용하는 것이 좋다.
// 앞의 숫자에 해당하는 글자위치부터(0의 숫자는 첫번째를 의미) 뒤의 숫자의 미만까지를 제외한 나머지를 잘라내는 기능입니다.
```

```javascript
var typing = '문자를 잘라낼 때 하나의 숫자만 사용하기';
var oneCut = typing.slice(14);

console.log(oneCut);				// 숫자만 사용하기
// 열다섯번째의 텍스트부터 이후의 모든 텍스트
```

```javascript
var typing2 = '텍스트를 잘라낼 때 마이너스 값을 이용해 보겠습니다.';
var minusCut = typing2.slice(11, -12);

console.log(minusCut);				// 마이너스의 값
```

```javascript
var arrTyping = ['first','text','three','four','fiver'];
var arrCut = arrTyping.slice(1,3);

console.log(arrCut);

// (2) ["text", "three"]
```

- substring()

```javascript
var typing2 = '텍스트를 잘라낼 때 마이너스 값을 이용해 보겠습니다.';
var minusCut = typing2.substring(11, -12);

console.log(minusCut);
```

문자열만 사용가능!



- substr()

```javascript
var typing3 = '문자열을 잘라 내는 기능은 여러가지가 있습니다.';
var textCut = typing3.substr(5, 8);

console.log(textCut);
// 현 위치에서부터 8글자
```

---

##### 문자열 위치 파악하기

- indexOf()  /  lastIndexOf()

```javascript
var charText = 'my character';
var indexChar = charText.indexOf('c');

console.log(indexChar);			// 3

var lastIndexChar = charText.lastIndexOf('c');

console.log(lastIndexChar);		// 8
// 앞에서부터 오는 c / 제일 뒤에 오는 c 
```

- split()

```javascript
var typing4 = '텍스트를 잘라낼 때 마이너스 값을 이용해 보겠습니다.';
var textCut2 = typing4.split(' ');

console.log(textCut2);
// (7) ["텍스트를", "잘라낼", "때", "마이너스", "값을", "이용해", "보겠습니다."]
```

- trim()    :   의미없는 공백을 말함.

```javascript
var whiteSpace = ' 앞, 뒤에 생기는 공백을 제거하고 싶다면? ';
var trimCut = whiteSpace.trim();

console.log(trimCut);
// 앞, 뒤에 생기는 공백을 제거하고 싶다면?

// 양쪽 끝에 공백을 제거,  but 그 사이의 공백 제거 X
```

- replace()    :    실제로 많이 쓰는 기능.

```javascript
var originalString = "How are you?"
var newString = originalString.replace("How", "Where");

console.log(newString);			// Where are you?

// 1번째 매개변수를 2번째 매개변수로 치환
```

```java
'오늘-하루는-어땠나요?-그대!!!';
-.replace('-',' ');

* jpg -> png
* 작은 썸네일 이미지 -> 용량이 큰 이미지
```



```javascript
var originalString = "Scss is a programming language. I'm learning scss."
var newString = originalString.replace(/scss/gi, "JavaScript");

console.log(newString);

// 대소문자 가리지 마라.라는 뜻.
// 정규표현식을 사용하여 replace()을 더욱 강력하게 만들 수 있다.
// 예를 들어 replace()첫 번째 값에만 영향을 주지만
// 값의 g모든 인스턴스를 잡으 려면 (전역) 플래그를 사용하고
// i대소 문자를 무시 하는 (대소 문자 구분 안 함) 플래그를 사용할 수 있습니다.

// 플래그(flag) ->>      /scss/
```

---

###### 문자열 대/소문자 바꾸기

- toUpperCase  /  toLowerCase

```javascript
'hello my javascript studing team'.toUpperCase();
'HELLO MY JAVASCRIPT STUDING LEADER'.toLowerCase();
```

```javascript
<script>
var TextFn = function(myText) {
  	var text = 'hello My Javascript Studing team';
	var firstText, moreText;
	firstText = text.charAt(0).toUpperCase();
	moreText = text.slice(1).toLowerCase();
	var totalText = firstText + moreText;
	return totalText;  
};
	console.log( TextFn('hello My Javascript Studing team') );
</script>
```

