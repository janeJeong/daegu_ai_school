// IF 조건문
/*
var a = 40;
var b = 40;
var c = 60;
*/


/*
if(a > b) {
	console.log("a는 b보다 작다.");
}
*/

/*
if(a > b) {
	console.log("a는 b보다 크다.");
}  else {
	console.log("a는 b보다 작다.");
}
*/


/*
if(a > b) {
	console.log("a는 b보다 크다.");
} else if(b > c) {
	console.log("b는 c보다 크다.");
} else if(a < c) {
	console.log("a는 c보다 작다.");
} else if(b < c) {
	console.log("b는 c보다 작다.");
} else {
	console.log("모든 조건을 만족하지 않는다.")
}
*/


// 중첩 if문
/*
if(a !== b) {
	if (a > b) {
		console.log("a는 b보다 크다.");
	} else {
		console.log("a는 b보다 작다.");
	}
} else {
	console.log("a와 b는 같다.");
}
*/



//거짓이 되는 상황
//false, "", 0, null, undefined 
/*
if(10) {
	console.log("참")
} else {
	console.log("거짓")
}
*/ 


// 삼항 연산자
/*
var age = 15;

if(age >= 18) {
	console.log("성인");
} else {
	console.log("어린이");
}


var result = (age >= 18) ? "성인" : "어린이";
console.log(result)
*/


// 조건문 응용
/*
var userId = prompt("아이디를 입력해 주세요.");
var userPw = prompt("비밀번호를 입력해 주세요.");

console.log(userId);
console.log(typeof userPw);


if(userId === "jane" && parseInt(userPw) === 12345) {
	alert("로그인되었습니다.");
} else {
	alert("아이디 또는 비밀번호가 틀렸습니다.")
}
*/



// 전역변수, 지역변수
/*
var globalV = "전역변수";

function func() {
	var localV  = "지역변수"

	console.log(globalV);
	console.log(localV);
}

// func();

console.log(globalV);
console.log(localV);
*/

/*
var gv = "전역변수";

function func() {
	gv = "지역변수";  // var을 써주지 않으면 변수안에 들어간 데이터를 변경하게 됨
	console.log(gv);
}

func();

console.log(gv);
*/



/*
var gv = "전역변수";

if(true) {
	var lv = "지역변수???";  //-> 전역변수!

	// console.log(gv);
	// console.log(lv);
}

console.log(gv);
console.log(lv);
*/


/*
var gv = "전역변수";
var aaa = "aaa";
*/

/*
function a() {
	console.log("a");
}
*/




// 전역 스코프
/*
var gv = "전역변수";

function func() {
	console.log(gv);
}

func();

console.log(gv);
*/

// 지역 스코프
/*
function func() {
	var lv = "지역변수";
	console.log(lv);
}

func();  // 함수 호출

console.log(lv);
*/


// 함수는 서로의 스코프레 접근할 수 없다!!
/*
function a() {
	var apple = "사과";
}   
// apple이 영향력을 발휘할 수 있는 범위는 함수 호출과 관계없이 여기까지

function b() {
	console.log(apple);
}
// 함수b 내부에는 apple이 존재 x, 하지만 전역변수로 apple이 존재하는 것도 x => error

b();
*/




// 스코프 체인
/*
var a = 10;  // -> 전역 변수, 전역 스코프

function func1() {
	var b = 20;

	function func2() {
		var c = 30;

		console.log(a + b + c);
	}

	func2();

	console.log(c)
}

func1();
*/




// 렉시컬 스코핑
/*
var name = "Jane";  // 전역변수 name

function func1() {
	console.log(name);
} 

function func2() {
	var name = "Jun";  // 지역변수 name

	func1();  // -> 함수를 호출했다고 해서 console.log(name)이 되는 것은 x
}

func2();
*/




// 호이스팅 (hoisting)
// 변수 호이스팅
/*
console.log(a);
// var a;
// a = "나는 A다.";  // 초기화

var a = "나는 A다."; // 변수 선언과 동시에 초기화

console.log(a);
*/




// 함수 호이스팅
// func1();

// function func1() {
// 	console.log("Func1 함수다.");
// }

// func1();




//  var func2 = undefined
/*
func2();
var func2 = function () {   // 변수는 값을 할당하기 이전에 호이스팅으로 인해, 이미 undefined가 들어가 있다.
	console.log("Func2 함수다.");
}

// func2();

*/




//자주 사용하는 객체와 메서드
//Math
//console.log(Math);
/*
var num1 = Math.abs(-3);
console.log(num1);

var num2 = Math.ceil(0.3);
console.log(num2);

var num3 = Math.floor(10.9);
console.log(num3);

var num4 = Math.random();
console.log(num4);
*/



// parseInt(), parseFloat()
// String => Number
/*
var str1 = "20.6";
var str2 = "3.14";

var num1 = parseInt(str1);
var num2 = parseFloat(str2);

console.log(num1);
console.log(num2);
*/