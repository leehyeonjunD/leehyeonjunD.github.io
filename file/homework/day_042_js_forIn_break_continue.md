##### for~in

객체의 열거 속성을 통해 지정된 변수를 반복합니다.

```javascript
var(가변수 in 배열/객체){
  루프 내에서 실행하는 명령;
}
```

```javascript
var member = ['에스프레소','아메리카노','아포카토'];
for (var i in member){
  console.log('판매하는 커피는:'+ member[i]);
}
```

##### 제이슨 형식

---

###### webfolio.github.io 처럼 페이지 하나 만들수있음.

```javascript
var triangle = {width:30, height:50};
for (var j in triangle){
  console.log(j + '=' + triangle[j]);
}
```

```javascript
var book = {};
book.title = 'Javascript기초이해하기';
book.publish = '아무개출판';
book.price = '24,000';

for (var k in book){
  console.log(k + '는' + book[k]);
}
```

---

##### break/continue

###### 루프 도중 Skip / 중단하기

```javascript
for(var i=1; i<10; i++){
  if(i>5){
    break;
  }
  console.log(i);
}
```

일부를 건너띄고 나타나게 할수있는방법은?
**break**대신 **continue**를 사용하면 가능!

```javascript
for(var i = 1; i< 10; i++){
    if(i === 5){
      continue;
    }
    console.log(i);
}
```

```javascript
var result = 0;
for (var i=0; i<=100; i++){
 result += i;
 if(result > 1000){
 break;
 }
}
console.log('합계 값이 1000을 넘는 것은' +i);
```

```javascript
day_042.html 파일 참조
```



```javascript
var i=2017;
var j = i - 150;
for(; i>=j; i--){
  document.write('<p>' + i + '</p>')
}

Date();

var date = new Date();
// new Date를 var에 집어넣어야 아래값이 나옴.

date.getFullYear();        // 2017
```

