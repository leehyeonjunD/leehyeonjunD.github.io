#### [photo]

7/5

- Filter
  1. Blur
     - Gaussian Blur: 중심에서 커지는, 회전기능
     - Motion Blur
     - Radial Blur
  2. Noise
- 지우개 브러쉬 opacity -> 50%



1. 필요한 영역 잡기
2. 취소 Ctrl + D
3. Blur
4. Layer Mask `O` - 지우개로 지워도 복구가능.

---

7/6

##### 도장툴, 힐링브러쉬 차이점

- 도장툴 - (Aligned `v` - 절대좌표)
  : 그대로 카피해서 붙여줌.
- 힐링브러쉬 - (Aligned `   ` - 상대좌표)
  : 번지는 효과, 주변과 어울리려는 성격.



- 브러쉬설정 1번째모양, Hardness: 0%

- Clone Stamp Tool

- Quick Selection Tool
  Magin Wand Tool

  -Anti-alias`v`시
  : 곡선 부드럽게 잡아줌.
  ​
  -Contiguous해제시
  : 같은 색 선택 가능

- Elliptital Marquee Tool

- Ctrl + D : 해제
  -그리다가 `Space` 누르면 동그라미 이동.

- Layer Style
  -Bevel & Emboss Structure

  - Inner Shadow 안쪽 그림자
  - Inner Glow 안쪽 빛 
  - stain 금속처럼
  - Outer Glow 바깥쪽 빛
  - Drop Shadow 바깥쪽 그림자

  ​


- 도넛모양 색상 바꾸기

  - Color Overlay
  - Inner Shadow

  ​

- Opacity : 전체 투명도.

- Fill laytle 투명해지지 않음.


- 색상 반전
  Image - Adjustment - Invert
  (마스크에서 검은색/흰색 반전쓸때)
- white 가 앞에, black 뒤에 놓인 상태가 기본.



- 1. 원형툴 feather 10 px 올려놓기
  2. 원형 만들기
  3. layer 겹쳐서
  4. layer Mask 버튼
     =>(photoshop ease_mark_170706
     파일에서 파란원 쉽게 만들기)
- - Shift + mask 썸네일 클릭
    원본인지 아닌지
  - Alt + mask 클릭
    잘 지워졌는지 확인기능
- Edit - Transform - Warp
- Window - Arrange
  창에 띄워서 쉽게 이동.

---

7/12

- New File - Preset:web - size: 1024 * 768 - height:2000
- PS : Guide Maker - 센터 - 생성
- View - New Guide - Vertical - 32px,92px

---

7/14

- New file - 1920 * 3000
  96dpi, RGB
- Assitor PS : 490, 490, 12, 60, 20
- View - New Guide
  1. Vertical - 480px
  2. 480 + 60 = 540 px
  3. 540 + 20 = 560 px 
     .... .... ...반복
- 사각툴 - Shape`v` - Fill : 원하는 색 / Stroke : 색 X
- Window - Actions
- View - Actions - 새레이어 - 레코더 - Group - 새레이어
  - Alt + 클릭(옮기기) - 정지
  - Play 12개 만들기 - 맨앞 Colum1개 지우기 - 그룹핑 - Fill 50%
- Ctrl + Delete : 흰색배경
  모두선택: 정렬(위/가운데)
- Image - Canvas size - Relative `v` 2000
  네모칸 9칸중에 윗칸 2번째버튼 클릭



7/6

#### [터미널]

- 강제나가기 Ctrl + C


---

#### [SASS]

- 변수라는 값, 사용법
  $primaryColor : #bbc;

- interpolation 기법

  - background-color: darken( $primaryColor, 90%);
  - background-color: darken( $basicColor, 20%);

- nesting 기법

  - ```scss
    #adBox{
      h2{........
      &:hover{  }  
      }
    }
    ```
    - &: 추가기능을쓸때 쓰는 기능 
    - 그리고 h2올리면 마우스효과.
    - img 넣어도 됨.

  - 주의사항

  1. 중괄호 4개 이상은 권장 X {{{{  }}}}
    2. {   }//    주석 달기!

- sass는 언더바`_`: 은닉 처리.
  폴더, 파일 앞

  - ex) @import "../`_`setting/`_`base.scss.";
    1. url 안써도됨
    2. `_`base.scss => base 
       (파일명은 확장자명은 안써도 알아챈다.)

---

7/7

- ```scss
  @mixin linkImg($img, $w, $h){
    width: $w; heigh: $h;
    background-image: url($img);
  }

  li{___}
  li>a{@include linkImg(   );}
  ```