*포지션

**position**: css에서 화면에 보여지는 개체의 위치를 정할때 사용하는 기능(속성)
position은 기본적으로 자주사용하는 기능이지만 처음부터 position을 남용하는 것은 좋지 않은 사항

  - 잘못사용할경우:하나를 수정하더라도 다른것에 영향이 전혀 없어서 일일히 수정해줘야하는 일
    - 페이지 내에서 모든 개체(div,p,h... )를 일일히 위치를 정해주면- 간단하게 수정할 일도 어렵게된다.
  - 잘못사용할경우:하나를 수정하였을 경우 같이 변경되어 전체가 흐트러지는 경우
    - **relative(부모속성)** 속성에 맞춰 움직이는 것들이 일괄 변형되어 중심을 잡기 어려워지는 현상
    - 결론:position은 무조건 잘써야한다!(가장 마지막에 사용해야하는 기능)

* 주로 사용되는 곳
  - 슬라이드 광고배너 좌/우 버튼
  - 화면의 정가운데 배치된 팝업창
  - top버튼
  - 브라우저 오른쪽에 고정되어있는 창
  - 11번가/G마켓.. 하단/우측에 고정된 내용
  - 쇼핑몰에서 사용하는 이미지의 끝에 붙어있는 순위
___
***기초속성

* static(기본): 따로 position의 속성을 사용하지 않아도 적용되는 기본 상태 (포지션기능 동작x)

* fixed:브라우저 화면내에서 스티커로 붙여놓은것 같은 효과. 화면상의 고정위치(마음대로이동) ex) top버튼
	absolute를 가질수있음

* relative: 특별하게 위치를 잡거나 하는 기능으로 사용하지 않음.
일반적으로 absolute의 부모역할을 하는 기준

* absolute: 자신의 부모를 기준으로 위치를 움직여서 처리
부모는 반드시(relative,absolute,fixed 중 하나의 속성을 가지고 있어야함) 부모 필요. ex) 슬라이드 광고배너 좌/우 버튼
	absolute가 absolute생성 가능.
___
***z-index

*z-index는 **position 사용시**(static제외) z축을 기준으로 이동하여 위치를 만들어내는 것
편의상 앞/뒤의 배치, 단위는 존재하지 않음,마이너스(-)값부터 플러스(+)의값까지 가능
일반적으로 수치는 100단위씩 사용(전체 위치를 파악하기 좀더 용이하게 하려는 목적)
  - z-index수치를 -로 사용하는것은 불가능(부모의 값 존재할때)

*x,y,z축 : 3D. z축은 나를 향해서 앞으로 +,
y축은 한글,워드 문서처럼 아래로 +

top left right bottom
ex) 탑은 위에서 얼마정도 떨어뜨리겠다.
ex) 레프트는 왼쪽으로 얼마정도 떨어뜨리겠다.

margin은 자기중심으로부터 거리가 떨어짐.
___
***position 속성은 보통 단독으로 쓰이기 보단
left, right, top, bottom 속성과 함께 쓰인다.

* position사용시 (static 제외)사용 가능한 기능으로, 해당위치에서 원하는 방향으로 위치이동시 필요한 기능
  - 단위값 사용

*text-align:center; line-height:90px; 
: 좌우상하 정렬

*positon: fixed;
width:100px
화면 가운데: top:50%		margin-top:-height/2;
			left:50%	margin-left:-width/2;


* position:static; 가장 기본형태:
아무것도 작성하지않아도 되는 상태

* position:fixed; 브라우저자체를 기준위치로 본다.
relative없으면 top:0; left:0; 꼭 들어감

* position:relative; 자기자신을 기준위치로 본다.

* position:absolute; static을 제외한 나머지 position 속성을 가진 부모

* z-index는 부모의 기준수치를 넘을 수 없다.
  부모의 z-index가 없으면 괜찮.


처음에떠있는팝업창과 달리
      모달창은 자식으로 튀어나왔다가
      부모에게다시 돌아간다



* button[type="button"]
버튼태그인데 속성이 버튼인것!

실전프로젝트 반응형 웹퍼블리싱 

###### 단축키
meta:vp -> 반응형 웹
`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">`