// asos init
AOS.init({
	once : true	
});

// typed init 
var typed = new Typed('#title', {
    strings: ['투다다다닥!'],
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    startDelay: 400,
    showCursor: false,
    loop: false
 });
 var typed2 = new Typed('#sub', {
    strings: ['무언가 열심히 개발중입니다 :)', '열심히 개발하다 보면 언젠간...', '멋진 제품을 만들 수 있겠죠?', '기대해 주세요!'],
    typeSpeed: 80,
    backSpeed: 40,
    fadeOut: false,
    startDelay: 500,
    showCursor: false,
    loop: false
 });