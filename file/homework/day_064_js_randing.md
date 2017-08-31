- 우리가 주로 사용하는 영역은 document
-  document 내부에서 기능을 사용하는 것들은 모두 요소(태그, 속성,...)을 사용하여 처리하는 기능 - DOM
-  하지만, $(window)내용은, 자바스크립트상에서 window객체
- window는 document보다 더 큰 범위의 영역 - window는 브라우저 자체 - BOM

=> 봄에는 offset이 포함이 되지 않는다.



####{duration:500}

js에서
animation기능을 쓰지못할때 대신 사용.
css와 같은 객체로 사용하지않고
`.css({backgroundColor:'#afc'},{duration:timed})`