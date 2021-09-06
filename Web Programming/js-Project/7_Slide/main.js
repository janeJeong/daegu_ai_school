var firstSlide = document.querySelector('.item:first-child');
// firstSlide.classList.add('show');


function slide() {
	// show 클래스가 들어가 있는 슬라이드
	var currentSlide = document.querySelector('.show');


	// 현재 show의 유무에 따라 분기 처리
	if(currentSlide) {
		currentSlide.classList.remove('show');
		var nextSlide = currentSlide.nextElementSibling;


		// 다음 슬라이드의 유무에 따라 분기 처리
		if(nextSlide) {
			nextSlide.classList.add('show');

		} else {
			// 다음 슬라이드가 없을 시, 처음 슬라이드로 돌아감
			firstSlide.classList.add('show');
		}


	} else {
		firstSlide.classList.add('show');
	}
}


slide();
// 자동화 트리거
setInterval(slide, 2000);