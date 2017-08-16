## 링크
```"<a href ="http://naver.com"> 링크</a>"```
- a : 요소명(node)
- href ="http://naver.com" : 속성(attribute)
- href : 속성명(property)
- "http://naver.com" : 속성값(value)
- 링크 : node text
___
## '경로'
파일이나 폴더가 위치하는 고유한 장소를 나타냄. 하이퍼 링크를 걸어줄 때 많이 사용.

```
* 상대경로 : 무조건 '나'의 기준, 같은 웹 사이트 안에 있는 주소를 의미.
 - ./
 - ../
 - ../../../

* 절대경로 : 웹 사이트처럼 도메인 바깥에 위치하는 장소.
- http://-________-
```
  ````
[ http ]

* 프로토콜 : 통신경로.
ex) 경부고속도로..

* 통신 에러
  - 404:서버|Data
  - 500:서버오류

```
```
실제보임 : http://     - 보안x
        https://    - 인증서, secret
        httpss://   -super secret
관리용 : webpvi://    - Nas : 놓고 다니는 하드/클라우드/개인용으로 씀.(영화,음악...)
        ftp://       -관리용
        ftps://      -관리용
```
```
* markdown: "[]()"
* html: <img alt="설명" src="이미지 경로" />
  - src="이미지 경로" : 약도
    - 시각장애인들은 사용하지 못하니, 주소의 목적지, 연락처 등을 제공해야 함.
```
___
#### **웹접근성**
##### + *국어 - '수화' 과목 추가.*
##### + *시각장애인*
```
시계
1. 브래드리 타임피스.
2. dot
```
##### + *청각장애인* - 자막 (ex. 유튜브, 뉴스, 칸아카데미...)
##### + *손없는분* - 체크박스 옆에 클릭했을 때에도 체크박스에 체크되는 것.
```
확장기능(웹접근성)
1. web developer
2. octotree
3. n-wax
4. atavi
5. chrome vox (사용하지 않을땐 꼭 끄기)
```
```
웹접근성 확인하는 프로그램 사용법.

+ 크롬 - *표시 (web developer) 
css - Disable All Styles (앞을 보지 못하는 사람을 위함)
브라우저(firefox|chrome) 에서 'tab'키를 눌렀을 때 - 포커스 - 링크/입력 - 포커스/활성화 됨.

+ F12 클릭 - 크롬 : 개발자모드 - 영어
   - 파이어폭스 : 개발자모드 - 한글
```
~~다음 규정 열심히 만듦. 가이드라인. 다룸 많이 가보기.darum.net. google 규정은 영어로 돼있음.~~
___

## HTML
#### HTML이란 웹에서 문서를 출력할때 사용하는 일종의 표현 규격.
HTML 문서는 꺽쇠(<,>)로 이루어진 태그로 구성되어있음.
태그는 속성을 가질 수 있음.
##### 웹 브라우징은 사용자와 웹 브라우저, 그리고 서버가 서로 통신하는 작업이며 아래 사진과 같은 절차를 가지고 있다.
 ![웹브라우징의 원리](http://div.or.kr/modules/lecture/template/img/html-studying/web_browsing.png)
___
#### 속성(이름)

```
 *  id : -> **#**
원칙상 하나의 id당 하나의 태그에만 적용할 수 있다.(**한페이지당 한번만 사용가능**)

 * class : -> **.**
하나의 class당 여러 태그에 적용할 수 있다.(**반복 가능**)
```
```
* <a id="name" >__</a>
<div id="name"__</div>
-> id 는 하나만 가능.

* <p class="my name is"_>-> class 은 여러개 가능.
* 이름을 짓는 방법
  - Camel_Case: id
  - Snake_case: classm

1. ' #snake '
2. ' .snake_~ '
3. ' snake-case '
```
___

##### 사용법
```
<div id="my-box1"></div>
<div id="my-box2" class="boxes"></div>
<div id="my-box3" class="boxes"></div>
<div class="boxes"></div>
```
___
1. chrome vox - 브라우저 이용.
2. 실로암
3. Nvda - 전세계적으로 이용, 무료.
4. 센스리더 - 한국에서 95%이용, 유료, 개발자는 30분 무료, 윈도우 제휴
___

## Table

1. 표 역할
날짜(캘린더), 시간표, 주식, 경기표, 날씨표, 화장실 관리표...
2. 유지
3. 접근성 떨어짐.
* 영문
* _ $ 특수x
* 첫글자 숫자x 영소
* 띄어쓰기x


```
<table summary="_________">
<caption> table 제목 </caption>

caption과 같이 섬세하게 작성.
모든 사람들을 위해서 정확하게!
```
___
```
ex) <table summary="_________">
       <caption> 2017. u-20. 한국 그리스 </caption>
```
->>
```
1.  <table summary="_________">
       <caption> <span>2017년 청소년축구월드컵</span>.u-20.한국<span>대</span>그리스<span>평가전</span> </caption>
2. aria
```
___

Table 태그: 표를 만드는 태그.
코딩으로 표를 만들때도 사용, 웹사이트이 프레임(구조)를 잡을 때 더욱 많이 사용합니다.
웹에디터에서 이미지 등의 배치가 맘대로 안 될때, html 모드로 들어가서 table 태그를 이용해서 원하는 대로 수정할 수도 있습니다.
___
#### table 태그의 구성
```
[atom]

간단한 표 만들기
file:///F:/googleDrive/%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C%EC%A0%9C%EC%B6%9C/html/table_01.html
간단한 표2 만들기
file:///F:/googleDrive/%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C%EC%A0%9C%EC%B6%9C/html/table_02.html
```
___

#### colspan & rowspan
> row : 가로
>col : 세로

* colspan 가로셀 합치기
* rowspan 세로셀 합치기.

colspan="3" colspan --> 가로로 합칠 셀 합
rowspan="3" rowspan --> 세로로 합칠 셀 합
___
출처:
http://blog.daum.net/mool2000/29
http://www.homejjang.com/03/colspan.php
___

table
caption
summary="  "
     1. 횡 ->
     2. 횡에 있는 셀    칸
     3. 가로 합치기   colspan
     4. 세로 합치기   rowapan
     5. thead
        tbody
        tfoot
     6. tr, td, th
     7. colgroup, col, scope(접근성)












