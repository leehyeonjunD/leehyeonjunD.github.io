
* box-sizing: 기본이 content-box
  border-box를 사용하면 padding은 개체의 내부로 생성이 된다.(개체의 크기가 작아짐)
  border또한 border-box를 사용하면 내부로 생성이 됨.

* float 사용시 margin: float을 사용하지 않으면 겹치는 여백은 큰쪽을 따르나.
  float을 사용한다면 둘은 중첩이 되지 않고 둘다 생성이 된다.

* * li의 간격을 조정하기 위해 각각의 li에 margin-left설정
* 전체 8개의 리스트 100% / 8, 이중에 사이간격은 7개만큼 띄워야함 4% / 7  ->   12*8 = 96 이기때문에 남은 4%에서 7을 나눔
* 처음 li에는 margin-left가 적용하지 않으므로 첫 li에 margin-left:0; 처리(별도의 class이름 할당)
___
*  border:10px solid transparent; 선 투명하게
*  border 선 그대로의 의미를 하면 선만 그릴수있지만,
  선 그 이상의 효과를 낼 수 있다.
___

layoutTest_170620_01.html
layoutTest_170620_01.html

___
##### **문서 이름 쓰는 순서**
`회사이름_작업명_170620_01.html`
- 띄어쓰기 x
- 특수 x, [ ] { }-깨짐.., ( )-그나마 괜찮.

___
#### 단축키
`ctrl` + `shift` + `D` : 복사
`ctrl` + `alt` + `방향키` : 선택
`ctrl` + `alt` + `I` : 12345
`ctrl` + `alt` + `a` : 한줄 정렬