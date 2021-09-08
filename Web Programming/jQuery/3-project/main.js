// 방법 1
/*
var $profile = $('.profile');
var $profilePopup = $('.profile-popup');

$profile.on({

	// 마우스 오버시 이벤트
	mouseenter: function() {
		// 부모를 경유해서 찾는 방법
		// $profile.parent().find('.profile-popup').css('display', 'block');
		// $profile.parent().find('.profile-popup').show();

		// 클래스로 선택한 요소가 여러 개 있을 경우, 선택한 요소에서만 이벤트를 작동하기 위해 this 사용
		$(this).parent().find('.profile-popup').show();

	},
	
	// 마우스를 뗐을 때 이벤트
	mouseleave: function() {
		// $profilePopup.css('display', 'none');
		$profilePopup.hide();
	}
})
*/



// 방법 2

var $profile = $('.profile');

$profile.on({
	mouseenter: function() {
		$(this).next().fadeIn();
	},

	mouseleave: function() {
		$(this).next().fadeOut();
	}
})
