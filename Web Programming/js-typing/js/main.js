//실습 2. 무한 루프
/*
var arr = [10, 20, 30];
var index = 0; // 기준점

// 10 -> 20 -> 30 -> 10 -> 20 .....

// 0 % 3 = 0; (나머지)
// 1 % 3 = 1;
// 2 % 3 = 2;
// 3 % 3 = 0;
// 4 % 3 = 1;
// 5 % 3 = 2;
// 6 % 3 = 0;
// 7 % 3 = 1;
// 8 % 3 = 2;

function loop() {

	var current = index % arr.length;  // 최초값 0 % 3 = 0, arr.length = 고정값
	console.log(arr[current]);
	index++

	setTimeout(function() {
		loop();
	}, 1000); // 1초마다 function()이 실행되게 함
}

loop(); // 최초 loop는 실행
*/



// 실습3
var txtElement = document.getElementById('txt'); // 이벤트를 설정할 html 태그 가져오기
var words = ["엔드게임", "인피니티 워", "에이지 오브 울트론"]; // 이벤트 실행시 호출할 함수 생성

// 생성자 함수
function TypeWriter(txtElement, words) {
	this.txtElement = txtElement;  // txt
	this.words = words;  // words 함수

	// 글자가 하나씩 완성되는 영역

	this.txt = ""; // 출력될 글자들이 들어갈 위치
	this.wordsIndex = 0; // 기준점
	this.isDeleting = false;  // 기준점2 - 현재 상태(삭제중/작성중), 처음에는 작성 중이기 때문에 false 기본값으로 넣어줌

	this.type();
}



// type 메서드 생성
TypeWriter.prototype.type = function() { 

	//현재 배열 안에 있는 데이터 가져오기
	var current = this.wordsIndex % this.words.length; // 최초값 0 % 3 = 0
	var fullTxt = this.words[current]; // 현재 current에 있는  값을 기준으로 배열 안의 데이터를 가져온다




	// this.isDeleting = true / false 분기처리 
	if(this.isDeleting) {

		// 엔드게임 -> 엔드게
		// 엔드게 -> 엔드 ...
		this.txt = fullTxt.substring(0, this.txt.length - 1);

	} else {

		// "" -> 엔
		this.txt = fullTxt.substring(0, this.txt.length + 1); // 0번째 부터 txt현 상태에 대한 length에 +1 까지
	}

	this.txtElement.textContent = this.txt; //h1 태그에 노출





	// 분기처리 - 텍스트가 완성되었을 때 / 텍스트가 모두 삭제되었을 때

	if(!this.isDeleting && this.txt === fullTxt) {
		
		this.isDeleting = true;

	}  else if(this.isDeleting && this.txt === "") {

		this.isDeleting = false;
		this.wordsIndex++ // 다음 텍스트로 넘어가기
	}




	var that = this  // this.type(); 이 window를 가리키는 것을 막기 위해 (중첩 함수의 this의 대상을 해당 객체자체로 바꾸기 위해)

	setTimeout(function() {  // 자기자신(TypeWriter.prototype.type) 다시 호출

		// console.log(this); 
		// this.type(); // this -> window
		that.type();

	}, 400);

}

new TypeWriter(txtElement, words); // 생성자 함수 호출시, 인스턴스가 반드시 필요한 것은 x