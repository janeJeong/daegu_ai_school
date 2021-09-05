// add버튼 클릭 시, 리스트에 추가
// add 객체에 접근
var addBtn = document.getElementById('add'); 

// add 버튼 '클릭' 시 이벤트 발동
addBtn.addEventListener('click', function() { 

	var value = document.getElementById('txt').value;

	// if 문으로 입력된 값이 있는 경우/없는 경우 분기처리
	if(value) {
		// console.log(value);

		addListTodo(value);
		document.getElementById('txt').value = "";
	}

});



// 입력 받은 값으로 리스트 생성
function addListTodo(text) {

	// 함수 호출 시, todo 영역을 가져오고 <li> 생성
	var list = document.getElementById('todo');
	var item = document.createElement('li');
	// <input>에 입력한 글자를 `<li>`의 값으로 할당
	item.textContent = text;

	// console.log(item);

	// 버튼 영역을 감싸는 <div class="buttons"> 생성 
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');


	// 리스트 삭제/완료 버튼 생성
	var remove = document.createElement('button');
	remove.classList.add('remove');
	// removeList 이벤트와 연동
	remove.addEventListener('click', removeList); 

	var complete = document.createElement('button');
	complete.classList.add('complete');
	// completeList 이벤트와 연동
	complete.addEventListener('click', completeList);

	// 조립 (안쪽에서 부터 바깥쪽으로)
	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	// console.log(item);

	// 가장 마지막에 입력한 값이 리스트의 최상단에 위치되게 하기
	// childNodes[0] - 가장 먼저 나오는 <li>?의 위치(인덱스)
	list.insertBefore(item, list.childNodes[0]);
}



// remove 버튼 클릭 시, 목록에서 삭제
// 1. 클릭한 영역의 <li> 삭제
// 2. 클릭한 영역 가져오기
function removeList() {

	// this = remove 객체, parentNode를 활용해 remove 객체의 부모의 부모인 <li> 선택
	var item = this.parentNode.parentNode; 
	var parent = item.parentNode;  // <ul> 선택

	parent.removeChild(item);
}


// complete 버튼 클릭 시, 리스트 하단으로 이동
// 1. complete를 클릭한 영역이 리스트에서 삭제돼야 함(remove의 기능 갖고 있음)
// 2. todo <-> completed 이동 기능
function completeList() {

	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	
	var id = parent.id;
	// 삼항 연산자 사용 -> <li>가 어떤 <ul>안에 있는가에 따라 달라짐
	var target = (id === 'todo')
					? document.getElementById('completed')
					: document.getElementById('todo');

	// 삭제 기능
	parent.removeChild(item);

	// 최신 값을 최상단에 배치
	target.insertBefore(item, target.childNodes[0]);
}