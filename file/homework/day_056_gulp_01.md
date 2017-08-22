## GULP

GULP란? 
streaming build system이라 불리기도 하며, 자동화 도구(task runner system)으로 불리기도 하는 시스템.

자동화 도구의 기능: 변환, 병합화(파일을 합침), 난독화(개발자 외에 파일명, 내용을 확인하기 어렵게 만들기), 캡슐화(보호처리하여 내용을 볼 수 없게 처리) 등의 기능을 자동으로 처리하는 시스템

---

##gulp에 필요한 기본 자료

1. node.js (lts버전)
2. node package (기본은 npm, 별도의 기능으로 만들어진 yarn을 사용해도 무방)
3. git-bash

### yarn설치

```cli
$ npm install yarn -g
```

위 기능이 대표적이나 현재는 별도설치를 권장

---

> 아래 내용을 미리 기억하고 진행하겠습니다.

- node_modules (자동 생성)
- package.json (자동 생성)
- gulpfile.js (직접 생성)
- .gitignore (직접 생성: node_modules 폴더는 git에 올리지 않는다!)

---

1. gulp를 컴퓨터 전역/해당폴더에 설치

   ```cli
   $ yarn add gulp-cli -g		// npm install gulp-cli -g
   						    // npm init -y
   $ yarn add gulp --dev		// npm install gulp --save-dev
   ```

   develop 개발자들이 사용하는 기능 -> 사용할 기능 기록!



---

.task 일 할당
.src 원본
.pipe

.dest 변환 처리해서 저장 폴더