/* guess_sub1.html jquery 영역 */
(function($){

  var btnMenu   = $('#btn_menu');
  var nav       = $('.navigation');
  var footHover = $('#footBox').children('p');
  var address   = $('address');

nav.hide();

  // nav클릭 이벤트 ( .on() )
  btnMenu.on('click', function(){
    nav.slideToggle(400);
  });


address.hide();

  // p클릭 이벤트( .on() )
  footHover.on('click', function(){
    address.fadeToggle(600)
        .animate({
          fontSize:'0.8em', 
          height:100
        }).fadeIn(4000).fadeOut(4000);
  });

  // input email, pwd 알림창
// if (email === '' || name === '') {
//   alert("Please fill all fields...!!!!!!");
// e.preventDefault();
// } else if (!(email).match(emailReg)) {
// alert("Invalid Email...!!!!!!");
// e.preventDefault();
// } else {
// alert("Form Submitted Successfully......");
// }


})(this.jQuery);