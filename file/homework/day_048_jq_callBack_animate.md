##### call back함수

**$(selector).hide(speed,callback);**

```json
선택자.메소드(기능, 함수(){
  	선택.메소드(기능, 함수(){
    	선택.메소드(기능, 함수(){
      	.....
    	});
  	});
});
```



****

**animate** 기능은   == css({'transition'})
.css({transition:'all 500ms'});
.animate({},500);   // call back method // display:block안됨
.animate({height:'auto'});   // auto가 없다

---

```javascript
$('dd').not( $(this).next('dd') )
```