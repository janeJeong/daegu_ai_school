// 과거 jquery 작성 방식
/*
$(document).ready(function() {

});
*/



$(function() {

	// 선택자
	/*
	$('header').css('border', 'solid 10px red');
	$('#masthead-id').css("color", "red");
	$('.masthead-heading').css("color", "blue");
	*/


	// 해당 요소를 개별적으로 가져올 수도 있음
	// console.log($("#masthead-id"));


	// 가져온 영역을 자바스크립트 변수 안에다가 할당 가능
	// -> 암묵적으로 변수명 앞에 $기호로 변수명을 시작 
	// -> (jQuerㅛ 라이브러리를 이용해 할당시킨 값임을 명시적으로 표기)
	// var masthead = $("#masthead-id");
	// console.log(masthead);



	// 가상 선택자
	/*
	$('.nav-item:even').css('background-color', 'blue');
	$('.nav-item:odd').css('background-color', 'green');
	$('.nav-item:eq(3)').css('background-color', 'pink');
	*/


	// $('header #masthead-id.masrhead-subheading').css('color', 'red');

	// console.log($("#test"));




	// 이벤트
	/*
	$("header #masthead-id").mouseenter(function() {
		// $("header #masthead-id").css('background-color', 'yellow');
		$(this).css('background-color', 'yellow');
	});

	$("header #masthead-id").mouseleave(function() {
		// $("header #masthead-id").css('background-color', 'blue');
		$(this).css('background-color', 'blue');
	})

	$("header #masthead-id").click(function() {
		// $("header #masthead-id").css('background-color', 'pink');
		$(this).css('background-color', 'pink');
	})
	*/


	/*
	$("header #masthead-id").on({
		mouseenter: function() {
			$(this).fadeTo('fast', 1);
		},
		mouseleave: function() {
			$(this).fadeTo('fast', 0.5);
		}
	})
	*/



	// `display: none;` 관련 메서드
	/*
	$("#masthead-id").click(function() {
		$(".masthead-heading").hide();
	});

	$("#masthead-id").click(function() {
		$(".masthead-heading").toggle();
	});
	*/



	/*
	$("#masthead-id").click(function() {
		$(".masthead-heading").slideToggle();
	});
	*/



	/*
	$("header .btn-one").click(function() {
		$(".masthead-heading").fadeOut();
	});

	$("header .btn-two").click(function() {
		$(".masthead-heading").fadeIn();
	});
	*/



	// 클래스 제어 코드
	/*
	$("header .btn-one").click(function() {
		$('#masthead-id').addClass('blue');
		$('.masthead-heading').addClass('important');
	});

	$("header .btn-two").click(function() {
		$('#masthead-id').removeClass('blue');
		$('.masthead-heading').removeClass('important');
	});
	*/





	var $id = $("#masthead-id");

	$(".btn-one").click(function() {
	// 	console.log($id.hasClass('blue'));

	// 	if($id.hasClass('blue')) {
	// 		$id.removeClass('blue');
	// 	} else {
	// 		$id.addClass('blue');
	// 	}

		$id.toggleClass('blue');

	});	
});