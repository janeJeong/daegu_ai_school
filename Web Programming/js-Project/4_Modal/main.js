// 필요한 객체 불러오기
var btnModal = document.querySelector('.btn-modal');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal .btn-close');

// 버튼 클릭 시, modal 창 띄우기
btnModal.addEventListener('click', function() {
	modal.classList.add('active');
});

// Close 버튼 클릭 시, modal 창 닫기
btnClose.addEventListener('click', function() {
	modal.classList.remove('active');
});

// modal창 외부 클릭 시, modal 창 닫기
modal.addEventListener('click', function(e) {
	var target = e.target;
	var isLayer = target.classList.contains('modal-layer');

	if(isLayer) {
		modal.classList.remove('active');
	}
});
