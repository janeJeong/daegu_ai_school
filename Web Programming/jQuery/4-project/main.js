var $close_text = $(".close_text");
var $open_text = $(".open_text");
var $list_title_wrap = $('.list_title_wrap');
var $list_article_wrap = $('.list_article_wrap');


// 리스트 모두 접기/펴기
// Close All을 누르면 해당 버튼이 사라지고 Open All이 보여짐
// + 리스트 본문 영역 감추기
$close_text.click(function() {
	$close_text.hide();
	$open_text.show();
	$list_article_wrap.addClass('hide');
});

// Open All을 누르면 해당 버튼이 사라지고 Close All이 보여짐
// + 리스트 본문 영역 펼치기
$open_text.click(function() {
	$open_text.hide();
	$close_text.show();
	$list_article_wrap.removeClass('hide');
});



// 리스트 개별적으로 접기/펴기
/*
$list_title_wrap.click(function() {

	if($(this).parent().find(".list_article_wrap").hasClass('hide')) {

		$(this).parent().find('.list_article_wrap').removeClass('hide')

	} else {

		$(this).parent().find('.list_article_wrap').addClass('hide')
	};
});
*/



$list_title_wrap.click(function() {
	$(this).next().toggleClass('hide');

	//`hide` 클래스가 존재하는 요소의 개수에 따라 분기처리
	var hideLength = $('.list_article_wrap.hide').length;

	if(hideLength === 4); {
		$open_text.show();
		$close_text.hide();
	} 

	if(hideLength === 0) {
		$close_text.show();
		$open_text.hide();
	};

});





// 리스트를 개별적으로 모두 접었을 때, Close All이 나타나게 하기


