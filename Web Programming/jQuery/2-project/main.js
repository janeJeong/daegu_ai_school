var $select = $('.select');

/*
$select.click(function() {

	// 전체 요소에 대해 on 클래스를 삭제하고, 선택한 요소에 대해서만 on클래스 삽입 
	// -> 아래의 순서를 바꿨을 때, 제대로 작동 x
	$select.removeClass('on');
	$(this).addClass('on')x;
});
*/



$select.click(function() {
	// 나를 제외한 형제 요소들에 대해 on클래스 제거
		$(this).addClass('on').siblings().removeClass('on');
	// console.log($(this).addClass('on').siblings());

});	