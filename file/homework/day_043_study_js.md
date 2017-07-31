```
this, 전역객체, 생산자
```

##### 전역객체(Global Object)

최상위에 1개의 **전역객체(Global Object)**를 만듭니다.

```javascript
var obj = {
  myFunction : function(){
    			return 'global Object test';
  				},
  funTest2 :'window객체 내부에 들어있는 obj객체를 확인'
};
```

```
window.obj.funTest2, window.obj.myFunction()
```

window는 맨 위에 있는 아이다.



##### this

함수 내에서 함수 호출 맥락(context)

```javascript
function func(){
  return this;
}
console.log( func() );
```

객체의 소속인 메소드의 `this`는 그 객체를 가르킨다는 것을 알 수 있습니다.

```javascript
var obj = {
  func : function(){
    return this;
    }
};
console.log( obj.func() );
```

 여기서 `this`는 **object** 즉, `obj`라는 것

```javascript
var o ={
    func : function(){
        if(o === this){
            console.log("o === this");
        }
    }
};
o.func();
```

o.func ( ); = window.o.func ( );



##### 생산자(new)

기능들을 그룹핑한거 : 함수,
이름들을 그룹핑한거 : new

* 객체화시키겠다

```javascript
var i = new Circle();
function Circle (xPoint, yPoint, radius) {
  this.x = xPoint;
  this.y = yPoint;
  this.r = radius;
}
var i = new Circle(5,11,99);
var k = new Circle(15,10,70);
var j = new Circle(20,5,69);
```

---

```javascript
var funcThis = null;

function Func(){
  return funcThis = this;
}
var o1 = Func();
var o2 = new Func();

console.log( Func() );
console.log(o1);
console.log(o2);
```

함수를 객체로 바꾼것.

```javascript
var ln = new Fun();
ln          // Fun{}
ln.test		// "number1"
ln.turn		// "yuna"
```

new라는 곳에 담아서 써야한다.

---

- new Date();
  1. 은닉화
  2. 반복사용 줄이기 위해
  3. 복제 ( 원본을 훼손하지 않기위해 )

---

```javascript
function Person(n,t){
	this.name = n;
	this.time = t;
	this.study = n + "가 가르치는 수업" + p1.time +'에 합니다';
};

var p1 = new Person('xido', '09:30 ~ 20:00');
var p2 = new Person('suk', '09:30 ~ 17:30');
var p3 = new Person('sn', '09:30 ~ 22:00');


p1
p2
p3.name
```

