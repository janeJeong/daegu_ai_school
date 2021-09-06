var btns = document.querySelectorAll('.accordion'); 
// accordian 클래스 명을 가진 모든 html 태그를 유사 배열 형식으로 반환

btns.forEach(function(btn) {

	btn.addEventListener('click', function() {

		// console.log(this); -> btn객체 자체
		this.classList.toggle('active');

		var panel = this.nextElementSibling;
		console.log(panel.scrollHeight);


		// maxHeight 존재 여부로 분기 처리
		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			// maxHeight = 0 일 경우
			panel.style.maxHeight = panel.scrollHeight + "px"; 
		}

	})
})
