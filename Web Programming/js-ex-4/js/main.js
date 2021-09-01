var arr = [
	{
		img : "img/img-0.jpg",
		name : "puppy 0",
		txt : "puppy description 0"
	},
	{
		img : "img/img-1.jpg",
		name : "puppy 1",
		txt : "puppy description 1"
	},
	{
		img : "img/img-2.jpg",
		name : "puppy 2",
		txt : "puppy description 2"
	},
	{
		img : "img/img-3.jpg",
		name : "puppy 3",
		txt : "puppy description 3"
	},

];


var i = 0; // 기준점

// console.log(document.querySelectorAll('.btn'));
document.querySelectorAll('.btn').forEach(function(element, index) {

	// console.log(element);  // 배열 안의 데이터를 각각 출력

	element.addEventListener('click', function(e) {

		e.preventDefault();
		// console.log("hello")
		// console.log(e.target);

		// 클릭한 영역에 어떤 클래스가 있는지 분기 처리
		if(e.target.classList.contains('prevBtn')) {
			console.log("prev");

			if(i === 0) {
				i = arr.length; // 현재 배열의 length 는 4
			}

			i--;

			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;
		}

		if(e.target.classList.contains('nextBtn')) {
			// console.log("next");

			if(i === arr.length -1) {
				i = -1;
			}

			i++; // 이 지점에서 i가 0으로 감

			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;

		}

	});
});
