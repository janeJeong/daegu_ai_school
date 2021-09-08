var $favoriteIcon = $('.favorite_icon');

$favoriteIcon.click(function() {

	// 선택한 영역에 대해서만 이벤트를 발동하기 위해 $favoriteIcon 대신 $(this)를 넣어줌
	// if($(this).hasClass('on')) {

	// 	$(this).removeClass('on');

	// } else {

	// 	$(this).addClass('on');
	// }

	$(this).toggleClass('on');
});