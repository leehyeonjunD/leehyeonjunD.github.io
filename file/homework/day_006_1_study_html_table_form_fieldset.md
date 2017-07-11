# 웹개발에 대한 기초 이해

## **html table 색 들어간 표 만들기.**
*
github.com
- assets - day_03_markdown,day_04,day_05_

*
atom 프로그램 켬 - new file - Split Up,Down,Left,Right
나눠서 비교해서 볼 수 있음.

* <!-- 1번째 줄 -->
 주석 넣으면 편함. 

``` github.com/service1705/assets/beginner/day_05_table/table.test.html
들어가보기
- octotree 켜서 내가 해본 것과 비교할 수 있다.
```
```
주석
/* __________ */
/*
 * ___________
 * ___________
*/
```
```
색
{#f0a}
{rgba(255,0,200,0.5)}
```
###### 저번 시간에 배웠던 - atom -
```
* '<!doctype html>'
'<html lang="ko-KR">'
  '<head>'
    '<meta charset="utf-8" />'
    '<title>table test</title>'
*     <style>
      table,td,th,thead,tbody,tfoot{
        border:1px solid #f0a;
        border-spacing: 0; border-collapse: collapse;}
      td,th{padding:0.3em;}
      table,thead,tbody,tfoot{border-width: 3px;}
```
###### 이번 시간에 배운 - style -
```
* <style>
      table,tr,td,th,thead,tbody,tfoot{
        border:1px solid #fff;
        border-spacing:0; border-collapse: collapse;}
      thead{background-color: #25a; border-bottom-width:3px;}
      th{color:#fff;}
      td,th{width:250px; height:50px; text-align:center;}
      /*.first_cell{background-color:rgba(0,100,255,0.2);}
      .second_cell{background-color:rgba(200,200,200,0.1);}*/
    </style>
```
```
* 'td,th{padding:0.3em; text-align: center;}'
* 'color_pink{}':
  <thead>
        <tr class="color_pink">
          <th></th>
          <th>1분기</th>
          <th>2분기</th>
          <th>3분기</th>
          <th>4분기</th>
        </tr><!-- 제목줄 -->
* 'first_cell{}', 'second_cell{}':
  <tbody>
        <tr class="first_cell">
          <td>A</td>
          <td>45</td>
          <td>23</td>
          <td>17</td>
          <td>12</td>
        </tr><!-- 1번째줄 -->
        <tr class="second_cell">
          <td>B</td>
          <td>56</td>
          <td>49</td>
          <td>34</td>
          <td>34</td>
        </tr><!-- 2번째줄 -->
* last_cell{}:
  - <tr class="color_pink">
        <td class="first_cell">5</td>
        <td>송태민</td>
        <td>010-5678-9123</td>
        <td>제본기</td>
        <td>1</td>
        <td class="last_cell">신규</td>
      </tr><!-- 5번째줄 -->
* .color_pink{background-color:rgba(255,0,200,0.2);}
     .first_cell{border-left-width:0;}
     .last_cell{border-right-width:0;}
     table,thead,tbody,tfoot{
       border-width: 3px;
       border-left-width:0; border-right-width:0;}

<tbody>
      <tr class="color_pink">
        <td class="first_cell">1</td>
        <td>홍길동</td>
        <td>010-1234-5678</td>
        <td>볼펜</td>
        <td>30</td>
        <td class="last_cell">실버</td>
      </tr><!-- 1번째줄 -->
```
___
# atom 사용시 설치하는 플러그인(팩키지)
> 아톰 에디트는 추가적인 기능을 설치해서 사용할 수 있습니다.
> 그중에 대표적으로 사용가능한 몇가지를 소개합니다.

### print-code
> 프린트를 하는 기능

### markdown write
> 마크다운 작성

### markdown preview plus
>마크다운 작성내용 보기

### atom beautify
> 코드 보기좋게 만들기
> 한줄보기 단축키 'ctrl'+'shift''m'
> 예쁘게 보이기 단축키 'ctrl'+'alt''b'

### lint
>코드 오타(오류) 알려주는 기능
___

## form: 양방향 통신.
  - 서버와 직접적으로 연결하는 기능 중 하나.
  - 짧지만, 중요.
  - form > fieldset > legend
```
<form action="__#__" method="GET">
```
* 공개?/비공개?
  get / post

* k.php 문서찾아와:
```<form action="k.pgp">```

* <fieldset>
    <legend>
    form 영역 제목
    </legend>
  </fieldset>
___
### 본격적인 폼에 대한 내용!
___
#### 폼의 기능 크게 4가지로 분류됨.
  1. 입력
  2. 선택
  3. 버튼
  4. 복합처리.

+ ```<input type="기능" name="___" id="___" value="값"/>```
  - name="___": 외부에 알려지는 이름.(공식 이름)
  - id class: 내부적으로 연동. (집에서 쓰는 이름)

```
<label__________>
</label>
```
___
##### type="___"
### 1. 입력
  - text     글자
  - password ...

>* html5>
> - search
> - tel (모바일에서 숫자키패드만 크게 뜨는 것)
> - email

___
### 2. 선택
  - radio      * o 남 o 여
  - checkbox   * v훈남 _근육남 v귀여운 v잘생김
```
ex) input type="checkbox" name="Guy" value="gentleman"
        input type="checkbox" name="Guy" value="cute"
        input type="checkbox" name="Guy" value="hot"
```

>* html5>
>  - number
>  - range  볼륨조절, 밝기조절
>  - color
>  - ~~date~~
>  - ~~year~~
>  - ~~month~~
>  - ~~week~~

___
### 3. 버튼
  - submit : 확인(전송, 페이지이동)
  - reset  : 취소(초기화)
    -이 두 code는 같이 쓰임, 90% 1번 쓰임. 
  - button : 버튼(중복확인, 주소검색, ...)
  - image  : 이미지, src="___"(확인버튼)
  - file   : 자료 담는 기능
___
### 4. 복합
  1. 입력 ```<textarea         >           </textarea>```
  2. 선택 ```<select id="___" name="____"    ____>
<option> 선택 </option>
<option value> 선택1 </option>
<option value> 선택2 </option>
<option value> 선택3 </option>
...
```
  3. 버튼 ```<button type="______"  ------------- >
</button>```

>* html5>
>```<datalist>```
___

## 웹 접근성
*
```
<label for="username">사용자이름을입력하세요</label>
<input type="text" id="username" name="value" />
```
*
```
<br />     -엔터, 글자 사이에
<div></div> -블럭, 구역 나눠주기, 의미없음.
```
___