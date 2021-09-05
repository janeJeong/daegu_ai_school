
var pageContainer = document.querySelector('.page-container');
var pageBack = document.querySelector('.page-back');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight; 

// console.log(windowWidth);
// console.log(windowHeight);


// 이벤트 추가
pageContainer.addEventListener('mousemove', function(e) {

	// 마우스의 현재 좌표를 가져오기 위해 이벤트 객체 e 활용 -> pageX, pageY
	// console.log('e.pageX', e.pageX);
	// console.log('e.pageY', e.pageY);

	// 마우스 좌표값 수치를 축소한 x, y 값을 생성
	var moveX = ((windowWidth / 2) - e.pageX) * 0.1;
	var moveY = ((windowHeight / 2) - e.pageY) * 0.1;

	// console.log('moveX', moveX);
	// console.log('moveY', moveY);
	// 해당 수치를 이용해 background-back 이 움직이는 효과 생성


	// pageBack.style.marginLeft = moveX + "px";
	// pageBack.style.marginTop = moveY  + "px";

	// 템플릿 리터럴 사용 가능
	// pageBack.style.marginLeft = `${moveX}px`;
	// pageBack.style.marginTop = `${moveY}px`;


	// 움직임이 있는 애니메이션은  transform, translate 속성을 사용하는 것이 성능면에서 뛰어남(css3) 
	pageBack.style.transform = `translate(${moveX}px, ${moveY}px)`;
})