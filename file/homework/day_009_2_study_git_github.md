git, github 는 무엇?
git깃이란?

**버전** version
**관리** control
**시스템** system

네이버클라우드, 구글 드라이브, 드랍박스, 위키피디아와 유사함.
많은 사람들이 협업으로 작성, 수정가능.<br />수정하기 전의 문서를 확인 가능.
Git 사용법
___
- github 계정(온라인)
- 내 컴퓨터 (오프라인) -동기화해주어야 함.
  접속계정 : git config
  저장 : git clone
  선택 : git add
  메시지 : git commit
  전송 : git push
___
* git add____(파일 이름) : 파일첨부
* git commit -m "___" : 제목, 내용
* git push : 보내기
* git status : 상태 확인

___
1. github.com에서 저장소생성 (Repository)
2. 이름 생성
  - 저장소 (디스크)
  - site (계정명.github.io)
3. 내컴퓨터에서 원하는 폴더 이동 후 git-bash 실행
  - 원하는 폴더 이름 = git-bash
4. 내컴퓨터에 복제 (clone) : git clone ........(나의 저장소주소).git
5. 계정등록 (최초한번만!)
   git config --global user.name (사용자이름) 엔터.
   git config --global user.email (로그인 메일주소) 엔터.


6. 자료 다운 $ git pull 엔터.
7. 작업->담아서->메세지입력->전송.
	 ->파일첨부->제목,내용->보내기.
git add ____(파일/폴더명) ->
git commit -m "__내용__" ->
git push

___
내주신 실습내용.

1. README.md -> #welcome to git!!!
2. README.md -> ##깃 사용법 간단하게 테스트 (추가)
3. index.html -> <h1> 나의 사이트1 </h1>
		 <div> <a href="http://webportfolio.github"> test</a></div> </li>
4. css, js, img, html 폴더 추가생성 (각 폴더에 임의 데이터 삽입) 
5. git add README.md
         git commit -m "first commit"
         git remote add origin https://github.com/leehyeonjunD/leehyeonjunD.github.io.git
         git push -u origin master
___
[오늘 실습한 것]
work/git 폴더에서 git-bash실행.
1. git config --global user.name leehyeonjunD
2. git config --global user.email leehyeonjun@gmail.com
3. git clone https://github.com/leehyeonjunD/leehyeonjunD.github.io.git
4. cd leehyeonjunD.github.io
5. mkdir css js img html
6. touch css/a.css img/d.jpg js/b.ai html/c.html
7. echo "# welcome to git!!!" >> README.md
8. echo "## 깃 사용법 간단하게 테스트" >> README.md
9. atom 켜서 작성.
   index.html -> <h1> 나의 사이트1 </h1>
		 <div> <a href="http://webportfolio.github"> test</a></div>
10. git add README.md
11. git commit -m "first commit"
12. (git remote add origin https://github.com/leehyeonjunD/leehyeonjunD.github.io.git)
13. git push -u origin master
14. git status
15. ls
16. git clone 다른 학생 깃주소
17. (나중에 수정했을때 clone -> config -> remote 이순서가 편함.)
