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






// 반복문
// 고정값 : console.log(2 * );
// 일정한 규직을 갖고 있는 가변값 : 1, 2, 3, 4, 5, 6, 7, 8, 9
/*
console.log(2 * 1);
console.log(2 * 2);
console.log(2 * 3);
console.log(2 * 4);
console.log(2 * 5);
console.log(2 * 6);
console.log(2 * 7);
console.log(2 * 8);
console.log(2 * 9);
*/


// while
/*
var num = 1;  // 2, 3, ... 10

while (num < 10) {
	// 2 * 1 = 2
	// 2 * 2 = 4
	// 2 * 3 = 6
	// 2 * 9 = 18
	console.log(2 * num)
	num++;
}

console.log("반복문 종료");
*/



// do ~ while
/*
var i = 12;

do {
	console.log(i);
	i++
} while (i < 10);
*/



// 고정값
// 일정한 규칙을 갖고 있는 가변값
// for
/*
for (var i = 1; i < 10; i++) {  // i = 전역변수
	console.log(2 * i);
}
*/



// 중첩 반복문
// 중첩 for문

// 2단 ~ 9단
/*
for(var i = 2; i < 10; i++) {

	for(var j = 1; j < 10; j++) {
		console.log(i * j);
	} 
	// 안쪽에 반복문이 종료되면 바깥쪽이 새로운 가변값으로 초기값이 변경되면서 내부에 있는 for문이 초기값으로 변경된다.  
}
*/



// break, continue 
/*
for (var i = 1; i < 10; i++) {

	if(i === 5) {
		break;   // 숫자 5가 되는 순간 반복을 멈춤, 아래쪽의 코드는 실행되지 x 
	}

	console.log(2 * i);
}*/

/*
for (var i = 1; i < 10; i++) {

	if(i === 5) {
		continue;  // 숫자 5의 결과값은 스킵하고 진행
	}

	console.log(2 * i);
}
*/




// 반복문 응용

// var arr = ['바나나', '사과', '수박'];
// console.log(arr);
// console.log(arr.length);


// 고정값 : console.log(arr[]) ;
// 가변값 : 0, 1, 2
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
/*
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/



// for ~ in
/*
for (var i in arr) {

	console.log(i);
	console.log(arr[i]);
}
*/


/*
arr.forEach( function(element, index) {

	console.log(element);
	console.log(index);

})
*/



/*
arr.map(function(element, index) {

	console.log(element);
	console.log(index);

})
*/

/*
var result = arr.map(function(element, index) {

	return element + " " + "10";
})

console.log(result);
*/





// 객체 반복문 for ~ in
/*
var student = {
	name: "Jane",
	age: 23,
	skills : ["자바스크립트", "HTML", "CSS"],
	sum: function(num1, num2) {
		console.log(num1 + num2);
	}
}


// for ~ in
// student.name  
// student['name']  => 객체 안의 데이터에 접근하는 방법
for (var prop in student) {   // prop = 키값, 데이터가 들어가는 좌표
	console.log(prop);
	console.log(student[prop]);
}
*/





//문자열 properties, methods
//length
// var txtLength = "        Hello World           "

// // console.log(txtLength.length);
// console.log(txtLength);
// console.log(txtLength.trim());

/*
var result = prompt("이름을 입력해 주세요");
console.log(result);
console.log(result.trim().length);
*/


// var str = "Nice to meet you to to";

// console.log(str.length);
// console.log(str.charAt(str.length - 1));
// console.log(str.slice(2));

// console.log(str.split('/'));


// console.log(str.replace('Nice', 'Glad'));


// console.log(str.indexOf('to'));


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

/*
var search = prompt("검색어를 입력해 주세요.");

if(search.toLowerCase() === "apple") {
	console.log("사과 데이터를 출력한다.")
} else {
	console.log("false")
}
*/





// 배열 properties, methods
// var arr = ["사과", "배", "수박"]

// console.log(arr.length);

// arr.push("포도", "토마토");
// console.log(arr);

/*
arr.unshift("포도");
arr.unshift("토마토");  // 토마토가 배열의 맨 앞으로 감
console.log(arr);
*/


/*
arr.pop();
arr.pop();
console.log(arr);
*/


// arr.shift();
// console.log(arr);


/*
var arr1 = ["사과", "배", "바나나"];
var arr2 = ["노트북", "마이크", "키보드"];

// var str1 = arr1.join(' / ');
// console.log(str1)

var merge = arr1.concat(arr2);  // 어떤 배열을 기준으로 합칠지 정해야 함
console.log(merge);
*/