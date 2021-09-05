var fixedNav = document.querySelector('nav');


// 스크롤 감지 방법
// window.addEventListener('scroll');
// winddow.onscroll = function () {스크롤 발생시 동작되는 기능}
// document.addEventListener('scroll')

/*
window.addEventListener('scroll', function () {
	// 스크롤 위치 감지 property
	var top = window.scrollY // explore 제외 모든 브라우저 지원
				|| window.pageYOffset // explore 9 이상부터 지원
				|| document.documentElement.scrollTop // explore 8 이하 가능, chrome x
				|| document.body.scrollTop // chrome, safari, opera, edge 가능


	// 스크롤 위치가 내려갈 때, .active 클래스 추가
	/
	if(top > 50) {
		fixedNav.classList.add('active');
	} else {
		fixedNav.classList.remove('active');
	}
	*

	(top > 50)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');

});
*/







// ver2
/*
var oldVal = 0; // 기준점

// 스크롤 위치 감지
window.addEventListener('scroll', function () {
	var newVal = window.scrollY
				|| window.pageYOffset
				|| document.documentElement.scrollTop
				|| document.body.scrollTop

	console.log('oldVal', oldVal);
	console.log('newVal', newVal);


	// 스크롤을 내린 상태
	if(oldVal - newVal < 0) {
		fixedNav.classList.add('active');
	}

	// 스크롤을 올린 상태
	if(oldVal -newVal > 0) {
		fixedNav.classList.remove('active');
	}

	oldVal = newVal
	
})
*/







// ver3
/*
window.addEventListener('wheel', function(e) {
	// console.log(e);

	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');
})

// firefox
window.addEventListener('DOMMouseScroll', function(e) {


	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');
})
*/
// => 둘 의 함수 코드가 동일하기 때문에 하나의 함수로 만들어 줌


/*
window.addEventListener('wheel', mouseWheelEvt);
window.addEventListener('DOMMouseScroll', mouseWheelEvt);

function mouseWheelEvt(e) {
	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');
}
*/




// console.log(navigator.userAgent.indexOf('Firefox') !== -1);

var isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
var wheelEvt = isFirefox ? 'DOMMousScroll' : 'wheel';

window.addEventListener(wheelEvt, mouseWheelEvt);

function mouseWheelEvt(e) {
	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active')
		: fixedNav.classList.remove('active');
};
