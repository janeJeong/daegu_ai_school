var form = document.getElementById('form');
var input = document.getElementById('msg');
var feedback = document.querySelector('.feedback');
var txt = document.getElementById('txt');


form.addEventListener('submit', function(e) {

	e.preventDefault();
	// console.log(e);
	// console.log("제출");

	var msg = input.value;  //value 프로퍼티: <input>에 입력되는 글자만을 가져올 때 사용
	
	if(msg) {  // true인 경우(텍스트가 있는 경우)

 		txt.textContent = msg;
 		form.reset()  // 입력받은 텍스트 초기화

	} else {   // false인 경우(텍스트가 없는 경우)

		feedback.classList.add('show');

		setTimeout(function() {

			feedback.classList.remove('show');

		}, 2000);
	}
})




// setTimeout(function() {
// 	console.log("2초 후에 실행")
// }, 2000)



