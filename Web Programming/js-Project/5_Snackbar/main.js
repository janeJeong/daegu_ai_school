function snackBarFunc() {
	var snackbar = document.querySelector('#snackbar');
	snackbar.classList.add('show');

	setTimeout(function() {
		snackbar.classList.remove('show');
	}, 3500) // 전체 애메이션이 발동하는 시간
}