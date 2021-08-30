// comic 박스 생성
// 변수 선언
// var comic;

// comic 박스 안에 원피스 데이터를 할당한 상태
// 변수 초기화
// comic = "원피스";

// console.log(comic);


//변수 선언과 동시에 초기화 진행
// var apple = "사과"; 


/*
var a;
var b;
var c;
*/


// 변수 동시 선언
// var a, b, c;


// 변수 동시 초기화
/*
var d = 10;
var e = 20;
var f = 30; 
*/

// var d = 10, e = 20, f = 30;





// 모든 변수는 선언과 동시에 undefined 자동으로 할당된다.
// var computer;
// console.log(computer);


/*
var house;
house = "집";
console.log(house);

house = "아파트";
console.log(house);
*/



/*
var house;
console.log(house);

//undefined -> 집
house = "집"
console.log(house);
*/



// 캐멀 케이스
// var mathScoreStudent = 10;

// 스네이크 케이스
// var math_score_Student = 10;



//<변수명 작성시 주의점>
// var math-score-student = 100;

// var _math;
// var $math;

// var apple10; (o)
// var 10apple; (x)





//데이터 타입
//문자열 (String)
// var msg1 = "Hellow World";
// var msg2 = 'Welcome';

// console.log(msg1);
// console.log(msg2);

// var msg3 = "Nice to meet you';"; (혼용 x)

// She is girl
// She's girl

// var msg4 = "She's girl";
// var msg5 = 'She\'s girl';

// console.log(msg4);
// console.log(msg5);


// 숫자 (Number)
// var num1 = 10;
// var	num2 = -10;
// var num3 = 3.14;
// var num4 = -3.14;

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// console.log(num1 + num2);
// console.log(num1 + num3);


// 연산자
// 숫자 사칙연산
// var a = 20;
// var b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);


// 문자열
// var str1 = "20";
// var str2 = "10";

// console.log(str1 + str2);
// console.log(str1 - str2);
// console.log(str1 * str2);
// console.log(str1 / str2);
// console.log(str1 % str2);


// var firstName = "Jane"
// var lastName = "Jeong"

// console.log(firstName + "       " + lastName)



// var str11 = "현재 시간은 ";
// var time = 10;
// var str12 = "시 입니다.";

// console.log(str11 + time + str12);




// ++, -- 연산자
// var num10 = 10;

// num10 = num10 - 1;
// console.log(num10);
// console.log(--num10);  -> 9
// console.log(--num10);  -> 8

// console.log(++num10); -> 11
// console.log(++num10); -> 12

// console.log(num10--); -> 10
// console.log(num10);  -> 9

// console.log(--num10);
// console.log(num10);



// +=, -+, *=, /+. %=
// var num20 = 20;

// num20 = num20 + 10;
// num20 += 10;

// console.log(num20);



// 비교연산자 >, <, ==, ===, <=, >=
// var a = 10;
// var b = 20;
// var c = 30;


// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// console.log(a == b);
// console.log(a === b);

// console.log(a != b);
// console.log(a !== b);


// var num10 = 10;
// var num20 = 20;

// var str10 = "10";
// var str20 = "20";

// console.log(num10 == str10);
// console.log(num10 === str10);

// console.log(num20 != str20);
// console.log(num20 !== str20);



// 논리 연산자 : AND (&&), OR(||)
// var num30 = 30;
// var num40 = 40;
// var num50 = 30;

// console.log(num30 == num40 && num30 === num50 && num40 != num50);
// console.log(num30 == num40 || num30 === num50 || num40 > num50);



// 불리언(boolean) : ture, false

// console.log(true);
// console.log(false);
// console.log(1 === 2);
// console.log(10 < 20);
// console.log(10 === 10 || 20 === 30)

// var bool = true
// bool = false





// null, undefined
// null : 변수 초기화 명시적으로... 빈 값을 변수 안에 할당한 상태
// var n = null;

// undefined : 변수를 선언만 한 상태
// var u;

// console.log(n);
// console.log(u);


//  null과 undefined 차이점

// console.log(typeof 10);
// console.log(typeof "Hello World");

// console.log(typeof null);
// console.log(typeof undefined);

// console.log(null == undefined);
// console.log(null === undefined);


// !
// console.log(!true);
// console.log(!false);

// console.log(!null);   //ture
// console.log(!!null);  //!ture

// console.log(!undefined);
// console.log(!!undefined);

// console.log(10 + null); // null -> 0
// console.log(10 + undefined);  //NaN (Not a Number);



// 참조타입
// // 함수 (Function)
// console.log(10 + 10);
// console.log(20 + 30);
// console.log(5 + 10);


// 임의의 숫자 두 개를 전달받아서 덧셈을 하는 기능을 만들고 싶을 때.


// 함수 선언 : 기능을 만든 상태
// function sum() {

// 	console.log(10 + 10);
// }

// 함수 호출 : 만들어진 기능의 스위치를 켜는 행위 자체 
/*
sum();
sum();
sum();
sum();
*/



// Parameter (매개변수), Argument (인수)
// 매개변수 : num1, num2
// function sum(num1, num2) {

// 	console.log(num1 + num2);
// }

// 인수(인자) : 호출시 전달되는 값
// sum(10, 20);
// sum(100, 50);

/*
function fullName(firstName, lastName) {
	console.log(firstName + " " + lastName);
} 

fullName("jane", "jeong")
*/


/*
function area(width, height) {
	console.log(width);
	console.log(height);

	// var result = width * height;
	// console.log(result)
}

area(10);
*/


// 매개변수에는 모든 자바스크립트의 데이터 타입이 들어갈 수 있다
/*
function test(a) {
	console.log(a);
}

test(10);
test("Hello");
test(true);
test(null);

test(function a() {}); // 함수 자체 전달도 가능
test([10, 20, 30]);
test({name: "jane"});
*/



// return
/*
function sum(num1, num2) {
	// console.log(num1 + num2);
	return num1 + num2;
}

var result = sum(10, 20);  // 함수 호출 = 30, result = 30
console.log(result);
*/

/*
function area(hor, ver) {
	return hor * ver;  // 넓이를 구하는 함수
}

var volume = area(10, 20) * 100; // 200을 갖고 있는 상태
console.log(volume);
*/




// 배열 (array)
// var banana = "바나나";
// var apple = "사과";
// var melon = "멜론";   => 비효율적


/*
var fruit = ["바나나", "사과", "멜론"];
console.log(fruit);

// 인덱스 (index)
console.log(fruit[2]);
console.log(fruit[0]);
fruit[2] = "수박";
console.log(fruit);
*/


/*
var arr = [
	10, 
	"Hello", 
	true, 
	null, 
	undefined, 
	function a() {},
	[10, 20, 30],
	{name: "kim"}
*/


// 배열을 작성할 때, 주의점
// var num = [10, 20, 30, 3.14];
// var fruit = ["사과", "배", "바나나", "양상추"];


// 배열 안에 있는 배열 데이터에 접근하는 방법
/*
var score = [[10, 20, 30], [100, 200, 300]];

console.log(score);
console.log(score[1]);
console.log(score[1][2]);
*/



// 객체 (Object)
// 이름, 나이, 스킬, 성별
// age, name, skills - key
// Jane, 23, ["JS", "HTML", "CSS"] - value
// key - value = property
/*
var student = {
	name: "Jane",
	age: 23,
	skills: ["JS", "HTML", "CSS"]
}

console.log(student);
console.log(student.name);
console.log(student['name']);
console.log(student.skills[1]);

student.age = 100;

console.log(student);


student.gender = "여자";
console.log(student);
*/




/*
var student = {
	name: "Jane",
	age: 23,
	skills: ["JS", "HTML", "CSS"],

	test1: true,
	test2: null,
	test3: undefined,
	test4: {color: "red"},


	// 메서드 : 객체 안쪽에서 만들어진 함수
	sum: function (num1, num2) {  // sum이라는 키값 자체가 함수명을 대체
		return num1 + num2
	}
};

var result = student.sum(10, 20);
console.log(result);

student.sum(10, 20);
// student라는 객체 안에 있는 sum이라는 에서드를 이용한 것.

console.log("Hellow World");
// console이라는 객체 안에 있는 log 라는 메서드를 아용한 것.
*/




// 원시 타입과 참조 타입 차이점
// 원시 타입
/*
var str1 = "Hello World";
var str2 = str1;  // -> 복사본

// str1 = "Nice"  // -> 복사본에는 영향을 줄 수 없음
str2 = "Nice"

console.log(str1);
console.log(str2);
*/

// 참조 타입
/*
var obj1 = {name: "Jane"}
var obj2 = obj1;

obj2.name = "Park";

console.log(obj1);
console.log(obj2);
*/



// yellow, green, pinink #dc143, rgba(123, 123, 123, 0.5);

var colors = [
	'yellow', 
	'green', 
	'pink', 
	'#dc143c', 
	'rgba(123, 123, 123, 0.5)'
];

var bg = document.getElementById('color-bg');
var btn = document.getElementById('btn');


//btn.addEventListener()
btn.addEventListener('click', function() {

	// 0 ~ 4
	var random = Math.floor(Math.random() * 5) 
	// console.log(random);
	console.log(colors[random]);

	bg.style.backgroundColor = colors[random];
})





// 1 ~ 6 숫자를 랜덤하게 가져오는 게임
// Math.random() 					 : 0 ~ 0.9999999999~
// Math.random() * 6) 				 : 0 ~ 5.999999999~
// Math.floor(Math.random() * 6)     : 0 ~ 5
// Math.floor(Math.random() * 6) + 1 : 1 ~ 6

/*
console.log(Math.random());
console.log(Math.random() * 6);
console.log(Math.floor(Math.random() * 6));
console.log(Math.floor(Math.random() * 6) + 1);
*/




// 예약어
// var, typeof, function, null, undefined, false, true 

// var var;
// var function;










console.log("Main");

var mainVar = "Main Var";

function mainFunc() {
	console.log("Main Func");
}