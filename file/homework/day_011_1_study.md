*      단위: px pt em rem %
  최초설정값: 16px 12pt 1em 1rem 100%

# inline / block
* `inline`
  - .
* `block`
  - 쌓인다.싸이즈.
  - width -> auto 잘 주지않음
          -> 부모태그의 크기
  - height -> 설정안해도됨. -> 100%
          -> 자식의 내용

# html / css
* `meta:compat + tab'
  비표준(익스 하위버전) 브라우저들을 가장 최신버전으로 실행 -->
  style 태그 안에서 주석은 이런 모양으로 달아야 한다.

* 단위표현 `px, pt, em, rem, %`
* body도 html의 요소로 포함되기 때문에 css로 선택이 가능하다.
* 태그를 선택할 때에는 태그명{}
* id이름을 선택할 때에는 `#아이디명{}`
* class이름을 선택시에는 `.클래스명{}`
* 각 속성이 끝났을 경우에는 ;기호를 사용한다.
* css는 속성의 기능에 `속성명:속성값;`으로 표기한다.

# style
* margin
* margin:50px auto; -> 위/아래 50px만큼씩 떨어뜨린다. 좌/우는 자동(가운데배치)

* '*'의 뜻은 전체라는 의미: 실제로 많이 사용하는 것은 지양
* 간단하게 처리할 수 있는 기능을 모든 곳곳에 사용해서 무거워짐
* style태그 안에서 쓰이는 언어가 다르기 때문이다.

```
/* 이렇게 주석을
   쓰거나 */
// 이렇게 한줄만 쓴다.
```

* 나중에 쓴게 적용됨.
  1. `#box`
  2. `.test`
  3. `div`
  - 조상위치 > id > class > element