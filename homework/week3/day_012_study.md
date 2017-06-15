# .
1. Link
  - 절대 : 10분페이지 https://______.github.io/_____
  - 상대 : ./main.html
		   ./resume.html
           ./pf.html
2. CSS
   - 단위 : 16px, 12pt, 100%, 1em, 1rem
     - vw,vh,vmin,vmax
   - 선택자 : type선택 (body,div,p,a...)
			 id선택(#___)
             class선택(.___)
             우선순위: 조상,___>#___>.___>div
___
* 블록 요소를 옆으로 나열하기 위해 float기능을 사용한다.
* 왼쪽을 기준으로 나열하기 위해서는 float:left
* 오른쪽을 기준으로 나열하기 위해서는 float:right
* 문제점1: 부모요소에 높이값을 설정하면 - 넘어가는 사이즈를 설정시 매번 변경!
* 문제점2: 부모요소에 높이값을 auto로 설정 - 부모의 높이는 0처리(float의 의미)
* 해결하기 위한 용어1: clear속성을 사용
* 해결하기 위한 용어2: 정의된 이름은 아니지만 보편적으로 .clearfix의 기법
* 해결하기 위한 용어(방법)3: css의 추가기능(선택자의 기능) - ::before , ::after

___
.clearfix의 이해
* div코드로 눈에 보이게 만들어서 사용
* br코드로 변형시켜 사용
* 가상선택자(:after)를 사용
