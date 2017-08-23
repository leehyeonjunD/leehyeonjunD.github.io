1.gulp-server
1-1. gulp- 원리.. + 기본경로 별도 처리
2.illustrator - test
3.illustrator - pentool
4.infographic resume

---

####gulp

#####스크립트과 json의 차이점

키와 값을 쌍따옴표로 적는다.

- 유틸리티 메서드: 선택자를 먼저 처리하는 것이 아닌, 기능을 먼저 사용하도록 처리

---

```$ npm install gulp -g```

```$ yarn add gulp -D```

```$ yarn add gulp-sass```

``$ yarn add browser-sync -D``

---

**gulp.task(name)**		// 임무 할당(원하는 이름을 사용)

**gulp.task(name ,  deps ,  func)**
// 실제형태: `gulp.task('default', [], function(){});`
// name:   gulp의 일을 처리하는 이름(임의 이름)
// deps:   바로뒤의 함수기능을 수행하기전에 처리되는 일련의 기능(배열, 생략가능)
// func:   gulp.task의 기능을 수행(함수)

**gulp.src( )**	// 원본의 위치
**.pipe( )**		// 메소드를 연결하여 수행하기 위한 기능
**gulp.dest( )**		// 결과의 위치
**gulp.watch('변화를 감지할 위치',  [처리할 task])**
// 실시간으로 감지해서 변화를 처리하도록 하는 기능

---

###css

`background-image:linear-gradient(45deg, #f05, #33f);`

