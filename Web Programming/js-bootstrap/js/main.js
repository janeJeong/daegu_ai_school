// Selector


// getElement(s)*
// var header = document.getElementsByTagName("header");
// var services = document.getElementById("services");
// var container = document.getElementsByClassName("container");

// console.log(header);
// console.log(services);
// console.log(container[2]);

/*
var services = document.getElementById("services");
var serviceContainer = services.getElementsByClassName("container");

console.log(serviceContainer);
*/



// querySelector*
/*
var header = document.querySelector("header");
var services = document.querySelector("#services");
var container = document.querySelector(".container");

// console.log(header);
// console.log(services);
// console.log(container);

var servicesContainer = document.querySelector("#services .container");
console.log(servicesContainer);
*/


/* 반복문과 결합하여 일괄적인 디자인 적용이 가능
var container = document.querySelectorAll(".container");
// console.log(container);

for(var i = 0; i < container.length; i++) {
	// console.log(container[i]);  // 각각의 container에 접근

	container[i].style.backgroundColor = "yellow"
}
*/




// 컨텐츠 정보 변경/추가 property
// innerHTML, outerHTML
// var header = document.querySelector(".masthead");

// console.log(header.innerHTML);
// console.log(header.outerHTML);

// console.log(typeof header.innerHTML);
// console.log(typeof header.outerHTML);

// header.innerHTML = "<h1>Hello World</h1>"


// textContent
// var heading = document.querySelector(".masthead-heading");

// console.log(heading.textContent);
// heading.textContent = "Nice!!!";

// heading.textContent = "<em>Hello</em> World";
// heading.innerHTML = "<em>Hello</em> World";


// innerText 
/*
var heading = document.querySelector('.masthead-heading');

// console.log(heading.innerText);
// heading.innerText = "Nice~!!"
// heading.innerText = "<em>Nice</em>~!!"

console.log(heading.innerText);  // IT'S NICE TO MEET YOU
console.log(heading.textContent); // It's Nice To Meet You
*/






// JavaScript에서 html 태그 작성 및 삽입
// creatElement()
// var h3Test = document.createElement("h3");
// h3Test.innerText = "Hello World!";
// console.log(h3Test);


// 1. appendChild()
// var masthead = document.querySelector('.masthead');
// masthead.appendChild(h3Test);

// var mastheadContainer = document.querySelector('.masthead .container');
// mastheadContainer.appendChild(h3Test);

// var mastHeading = document.querySelector('.masthead-heading');
// mastHeading.appendChild(h3Test);



// var subHeading = document.querySelector('.masthead-subheading');
// var heading = document.querySelector('.masthead-heading');
// var btn = document.querySelector('.masthead .btn');

// subHeading.appendChild(h3Test);
// heading.appendChild(h3Test);
// btn.appendChild(h3Test);



// 2. insertAdjacentHTML();
/*
var heading = document.querySelector('.masthead-heading');
var txt = "<h3>!!!!!!</h3>"

heading.insertAdjacentHTML('beforeend', txt);
*/





// removeChild(), remove()
/*
var headContainer = document.querySelector(".masthead .container"); // 부모 태그
var heading = document.querySelector(".masthead-heading"); // 삭제할 태그

// headContainer.removeChild(heading);  // 부모를 경유해서 삭제
// heading.parentElement.removeChild(heading);


heading.remove();
*/




/*
var headContainer = document.querySelector(".masthead .container");


// css의 first-child, last-child와 유사
console.log(headContainer.firstElementChild);
console.log(headContainer.lastElementChild);
*/





// css 제어
// var heading = document.querySelector('.masthead-heading');

// heading.style.color = "red";
// heading.style.backgroundColor = "greenyellow";
// heading.style.fontSize = "25px";


// heading.style.cssText = "color : red; background-color: greenyellow; font-size: 25px";



// heading.setAttribute("id", "test");
// heading.setAttribute("style", "color : red; background-color: greenyellow; font-size: 25px");

// heading.setAttribute("id","heading-test");
// document.querySelector("#heading-test").style.backgroundColor = "greenyellow";






// css 접근
// className, <<<< classList
/*
var heading = document.querySelector(".masthead-heading");
// var headingClass = heading.className;
// var HeadingArr = headingClass.split(" "); // 공백 기준

// console.log(headingClass);

// console.log(HeadingArr);
// console.log(HeadingArr[0]);
// console.log(HeadingArr[1]);


heading.className = "test";
heading.className = "masthead-heading text-uppercase test"
*/



// var heading = document.querySelector(".masthead-heading");
// var headingClass = heading.classList;

// console.log(headingClass);
// console.log(headingClass[0]);
// headingClass(headingClass[1]);


// heading.classList.add("test", "test2", "test3");
// heading.classList.remove("text-uppercase");
// heading.classList.toggle("test");
// heading.classList.toggle("text-uppercase");

// console.log(heading.classList.contains("text-uppercase"));






// EventListener
// addEventListener
/*
var heading = document.querySelector(".masthead-heading");

heading.addEventListener("click", function() {
	console.log("Click");
})
*/


// removeEventListener
/*
var heading = document.querySelector(".masthead-heading");


function test() {
	console.log("클릭");
}

heading.addEventListener("click", test);
heading.removeEventListener("click", test);
*/




// 참조타입: 배열, 객체, 함수
/*
heading.addEventListener("click", function test() {
	console.log("클릭");
});

heading.removeEventListener("click", function test() {
	console.log("클릭");
});
*/


/*
var obj1 = {name : "kim"};
var obj2 = {name : "kim"};


console.log(obj1 === obj2)
*/








// preventDefault