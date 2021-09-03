// 클래스 (생성자 함수)


// 객체지향 프로그래밍 (OOP - Object Oriented Programming)
/*
var superMan = {
	name : "슈퍼맨", 
	age : 30,
	gender : "남성", 
	skills : ["레이저빔", "공중부양", "파워"]
}

var spiderMan = {
	name : "스파이더맨",
	age : 18,
	gender : "남성",
	skills : ["거미줄", "벽타기", "스파이더센서"]
}

var blackWidow = {
	name : "블랙위도우",
	age : 34,
	gender : "여성",
	skills : ["격투", "암살", "잠입"]
}
*/
// => 각각의 히어로들의 공통된 요소들을 하나의 집합체로 관리하는 것이 효율적
// 공통된 요소들을 묶어내는 일종의 박스가 '클래스'

/*
// 생성자 함수 - 기능을 만들 때 사용하는 일반 함수와 구분하기 위해 첫 글자를 대문자로 작성 : 
// = 붕어빵 틀에 비유

function Heroes(name, age) {
	this.name = name;
	this.age = age;

	console.log(this);
}

// 인스턴스 - 생성자 함수를 호출한 결과값이 담겨진 결과물
// = 붕어빵에 비유
var superMan = new Heroes('슈퍼맨', 30);
var blackWidow = new Heroes('블랙위도우', 34);

console.log(superMan);
console.log(blackWidow);
*/


/*
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.fullName = function() {
		console.log(this.firstName + " " + this.lastName);
	}
}

var jeong = new Person("Jane", "Jeong");
var park = new Person("David", "Park");
var choi = new Person("Yujin", "Choi");

console.log(jeong);
console.log(park);
console.log(choi);

jeong.fullName();
park.fullName();
*/



/*
// 프로토타입
// Person 생성자 함수를 만들 때, Person.prototype 객체를 같이 생성한다.
// 조상 (Person.prototype)  
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

//Person.prototype 객체에 fullName 이라는 메서드를 추가한 것 (조상에게 기술을 부여한 것)
Person.prototype.fullName = function() { 
	console.log(this.firstName + " " + this.lastName);
}

// 후손(인스턴스 자체) - 조상에게 부여한 기술을 가져다 사용o , 가지고 있는 것은 x -> 불필요한 메모리를 가지지 x
var jeong = new Person("Jane", "Jeong");
var park = new Person("David", "Park");

jeong.fullName();
park.fullName();

console.log(jeong);
console.log(park);
*/




// __proto__
// var arr1 = [];
// var str1 = "Hello";
// var func1 = function() {}

// Array() - 자바스크립트에서 만들어놓은 배열을 만드는 생성자 함수, 데이터가 들어갈 자리를 미리 만들어 놓음
// String() - 만들어진 문자열의 데이터 타입은 객체

/*
var arr2 = new Array();  
var str2 = new String("Nice");
var func2 = new Function("x, y", "return x * y");

console.dir(arr2);
console.dir(str2);
console.dir(func2);
*/



/*
var person = new Object();
console.log(person);

person.name = "Jane";  // 새로운 프로퍼티 추가 가능
person.sayHi = function() {
	console.log("hi"); 
}  // 새로운 메서드 추가 가능

console.log(person);
console.log(person.__proto__ === Object.prototype);
*/



/*
var arr2 = new Array();  
var str2 = new String("Nice");
var func2 = new Function("x, y", "return x * y");

console.log(arr2.__proto__ === Array.prototype);
console.log(str2.__proto__ === String.prototype);
console.log(func2.__proto__ === Function.prototype);

console.log(String.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);


console.dir(func2);
*/



// constructor : 인스턴스의 생성자 함수를 알아낼 때 사용
/*
var str11 = new String("Nice");

console.dir(str11);
console.log(str11.constructor);
console.log(str11.constructor === String);
console.log(String.prototype.constructor === String);


var arr11 = new Array();

console.log(arr11.constructor);
console.log(Array.prototype.constructor === Array);


var func11 = new Function();
console.log(func11.constructor);
console.log(Function.prototype.constructor === Function);
*/




/*
var str21 = new String("AAA");
var arr21 = new Array();

console.log(String.__proto__ === Function.prototype);
console.log(Array.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);
*/



/*
// 생성자 함수
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// 인스턴스 
var jeong = new Person("Jane", "Jeong")

// console.log(jeong);
// console.log(jeong.__proto__ === Person.prototype);  // true
// console.log(Person.prototype.__proto__ === Object.prototype);  // true
// console.log(jeong.__proto__ === Object.prototype);  // false -> 중간 단계의 조상을 띄어넘는 것은 x

// console.log(Person.__proto__ === Function.prototype);
// // true 모든 생성자 함수의 직계 조상은 Function.prototype 객체
// console.log(Function.prototype.__proto__ === Object.prototype); // true



console.log(jeong.constructor === Person);  // true
console.log(Person.prototype.constructor === Person);  // true
*/







// this - this가 어디에 포함되어 있는가에 따라서 가리키는 대상이 매번 달라짐

// 일반 함수 this -> window (브라우저)
// 중첩 함수 this -> window (브라우저)
// 반 함수 this : window (브라우저)
// 이벤트에서의 this -> 이벤트 객체
// 객체안에 있는 메서드 안에서의 this -> 객체
// 메서드 안에 함수(중첩함수)가 들어가 있는 경우 this : window(브라우저)
// 중첩으로 들어가 있는 함수 안에서의 this -> 무조건 window


// 일반 함수 / 중첩 함수 this
/*
function a() {

	function b() {
		console.log(this);
	}

	b();  // window
}

a();  // window
*/


// 이벤트에서의 this
/*
var prevBtn = document.querySelector('.prevBtn');

prevBtn.addEventListener('click', function() {
	console.log(this);  // prevBtn
})
*/


// 메서드 안에서의 this
/*
var obj = {
	age: 100,
	sum: function() {
		console.log(this.age); 


		function a() {
			console.log(this); // window 
		}

		a();
	}
}

obj.sum();
*/


// 중첩 함수의 this도 obj(객체)를 가리키게 하고 싶을 때 -> that
/*
var obj = {
	age: 100,
	sum: function() {

		var that = this; // sum 안에서의 this는 obj를 가리킴 -> that에는 obj가 들어가게 됨

		function a() {
			console.log(that); 
		}

		a();
	}
}

obj.sum();
*/


// 템플릿 리터럴 (Template Literal)
// 	`(벡틱)으로 문자열을 만들 수 있음
/*
var name = "jane";

console.log("내 이름은" + " " + name + "입니다.");
console.log(`내 이름은 ${name}입니다.`);
*/





// 실습 1
var arr = [];
var i = 0;

// 생성자 함수
function PuppyPicture(name, img, txt) {
	this.name = name;
	this.img = img;
	this.txt = txt;     // 매개변수 값 할당
}

function creatPuppyPicture(name, img, txt) {
	var fullImg = `img/img-${img}.jpg`;

	var puppy = new PuppyPicture(name, fullImg, txt);  // 이미지 인스턴스
	arr.push(puppy); // 객체 결과물을 배열 안쪽의 데이터로 넣어줌
}

creatPuppyPicture("puppy 1 name", 0, "puppy 1 description"); // 위의 매개변수에 각각 할당
creatPuppyPicture("puppy 2 name", 1, "puppy 2 description");
creatPuppyPicture("puppy 3 name", 2, "puppy 3 description");
creatPuppyPicture("puppy 4 name", 3, "puppy 4 description");



document.querySelectorAll('.btn').forEach(function(element, index) {
	element.addEventListener('click', function(e) {
		e.preventDefault();

		if(e.target.classList.contains('prevBtn')) {

			if(i === 0) {
				i = arr.length;
			}

			i--;

			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;
		}

		if(e.target.classList.contains('nextBtn')) {

			if(i === arr.length -1) {
				i = -1;
			}

			i++;

			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;

		}

	});
});





























/* 이전 이미지 슬라이드 효과 (0831)
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
*/

