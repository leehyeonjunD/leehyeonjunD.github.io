# [마크다운 에디트]

*마크다운이란? <br>메모장을 좀더 보기쉽게 정리한 웹상의 워드 파일이라고 볼 수 있다.

## 마크다운을 사용하는 이유!
1. 문서작성이 빠르다.
2. 언제 어디서나 확인이 가능하다.
3. HTML언어와 동일한 의미를 가질 수 있다.

## 마크다운을 이해하려면?
* 제목
* 내용
* 링크
* 이미지
* 리스트
'<hr>'
---

### 제목
: 웹/문서에서도 동일하게 **총 6단계**를 가짐

- 동아일보>헤드라인1면뉴스>작은단위의 헤드라인 제목>대분류>중분류>소분류
- 사장>이사>부장>차장>과장>대리>주임>사원
- 웹문서(마크다운/HTML)들은 모두 피라미드와 동일한 구조
- h1>h2>h3>h4>h5>h6

### 내용
: 뜻대로 내용을 말함, 소설에 나오는 글(신문 기사)
- 단락

### 링크
: 클릭하면 어딘가로 ~~이동~~
- 절대경로(http://naver.com, c: , d:)
- 상대경로(나의 위치를 기준으로 )
1. ```markdown
    [네이버로 이동](http://naver.com)
    <http://speedcode.net>
```
2.  [네이버로 이동](http://naver.com)
    
    [코드연습](http://speedcode.net)
3.  <http://speedcode.net>
    
> 주소를 설명없이 바로 작성하고 싶을때!!!
> 앞에 '<'표기 마지막에 '>'표기
> 사이에 웹주소(프로토콜포함)  http://www.daum.net'(예시)작성

```markdown
 <http://www.daum.net>
```
    
    
### 이미지
: 이미지(사진, 그림)
- 확장자: png, jpg, gif
```markdown
 ![이미지 설명](이미지 위치 및 파일)
 ![팔찌](http://shop1.daumcdn.net/thumb/C220x108/?fname=http%3A%2F%2Fshop4.daumcdn.net%2Fshophow%2Fsib%2F0_170530164220_uAXrkIScAWeNfVjfVHhCqnNZELnEiubo&scode=shdefault2)
```
![팔찌](http://shop1.daumcdn.net/thumb/C220x108/?fname=http%3A%2F%2Fshop4.daumcdn.net%2Fshophow%2Fsib%2F0_170530164220_uAXrkIScAWeNfVjfVHhCqnNZELnEiubo&scode=shdefault2)


### 리스트
: 목록을 나열하는 것
<순서를 표현하는 것을 기준으로 분류>
- 순서가 없는 리스트
  - 다단리스트
  - 2단 리스트
    - 다단리스트
    - 3단 리스트
      - 다단리스트
      - 4단


1. 순서가 있는 리스트
1. 앞의 숫자는 관계가 없다.
3. 결과는 리스트의 숫자로 표기.
   4. 다단리스트
   5. 순서를 가질 수 있다.
   6. 당연히 여러단이 가능하다.
     7. 다단리스트 
     8. 3단 리스트로 순서를 가진다.
       * 순서가 있는 것과
       * 없는 것을 섞어 사용할 수 있다.