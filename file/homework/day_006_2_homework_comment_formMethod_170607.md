## ++**조건부 주석에 대하여 알아보기**++

### *조건부 주석*

![표1](http://postfiles12.naver.net/MjAxNzA2MDdfMTUy/MDAxNDk2ODM3NTEwMTQ4.DLVuHIIdbg3qoqIZ-gUR7UqMshmuE_LuC2DHIZXZqmcg.p33iTX1FrokQx8v9-yAm3bjJwNRpmTRYo_hWzZng0_wg.JPEG.ggoma1052k/1.JPG?type=w1)
![표2](http://postfiles5.naver.net/MjAxNzA2MDdfMzIg/MDAxNDk2ODM3NTEwNDk5.50iiOTfIHA8KWvNwm_I9v83ui-cQUnsfxXXY-vRb-0cg.AkIHNtruKJvN_klV72ITcoROWpaCZUf71Va0bYBU5FEg.JPEG.ggoma1052k/2.JPG?type=w1)
![표3](http://postfiles11.naver.net/MjAxNzA2MDdfMTQw/MDAxNDk2ODM3NTExNzM4.i1M1izykb7Gqjk_M_F9Azdz2MirW8xGutgA_jLOsTlgg.FaPzsU5kh-1H4werLNj_tn4bVHOP7_VerSXEGxw7c4Mg.JPEG.ggoma1052k/3.JPG?type=w1)

---
___
## ++**form method 종류에 대해 알아보기**++

>form method 속성은 폼 제출시 사용 되는 ++*HTTP*++ 메서드를 지정합니다.
제출 버튼이고 formmethod 속성을 갖고 있다면, ++method 속성++의 값이 아닌 formmethod 속성의 값으로 처리합니다.
formmethod 속성이 명시 되지 않았다면, 폼 소유자의 ++method 속성++의 값으로 처리합니다.


### *method 종류*

- **GET** : URI(URL)가 가진 정보를 검색하기 위해 서버 측에 요청하는 형태이다.
- **POST** : 요청 URI(URL)에 폼 입력을 처리하기 위해 구성한 서버 측 스크립트(ASP,PHP,JSP 등)혹은 CGI 프로그램으로 구성되고 Form Action과 함께 전송되는데 이때, 헤더 정보에 포함되지 않고 데이터 부분에 요청 정보가 들어가게 된다.



- **HEAD** : GET과 유사한 방식이나 웹 서버에서 헤더 정보 이외에는 어떤 데이터도 보내지 않는다.<br> 웹 서버의 다운 여부 점검이나 웹 서버 정보(버전 등)등을 얻기 위해 사용될 수 있다.
- **OPTION** : 해당 메소드를 통해 시스템에서 지원되는 메소드 종류를 확인할 수 있다.
- **PUT** : POST와 유사한 전송 구조를 가지기 때문에 헤더 이외에 메시지(데이터)가 함께 전송된다.<br> 원격지 서버에 지정한 콘텐츠를 저장하기 위해 사용되며 홈페이지 변조에 많이 악용되고 있다.
- **Delete** : 원격지 웹 서버에 파일을 삭제하기 위해 사용되며 PUT과는 반대 개념의 메소드이다.
- **TRACE** : 원격지 서버에 Lopback메시지를 호출하기 위해 사용된다.
- **CONNECT** : 웹 서버에 Proxy 기능을 요청할 때 사용된다. 
---
```
예제

<form>
  <input type="submit" value="등록" formmethod="POST">
</form>
```
___