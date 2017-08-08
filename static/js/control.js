(function ($) {
	//Работа с табами
	$(function () {
		$('ul.tabs-list').on('click', 'li:not(.active)', function () {
			$(this)
				.addClass('active-tab').siblings().removeClass('active-tab')
				.closest('div.tabs').find('ul.check-list').removeClass('active').eq($(this).index()).addClass('active');
		});
	});

	// Паралакс эффект
	$(window).bind('scroll', function (e) {
		parallaxScroll();
	});

	function parallaxScroll() {
		var scrolled = $(window).scrollTop();
		$('#parallax-bg1').css('top', (0 - (scrolled * .25)) + 'px');
	}

})(jQuery);

//аккардион
$( function() {
	$( "#accordion" ).accordion({
		heightStyle: "content"
});
});

//Отключение кнопки отправить
$(window).load(function () {
	$('#submit_btn').attr('disabled', 'disabled');
});

//Проверка на пустые поля
function checkParams() {
	var name = $('#name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();

	if (name.length != 0 && email.length != 0 && phone.length != 0 ) {
		$('#submit_btn').removeAttr('disabled');
	} else {
		$('#submit_btn').attr('disabled', 'disabled');
	}
}

//копирование mail в форму - что такое hh
function copyMail() {
	var email_copy = document.getElementById('email_copy');
	var email_copy2 = document.getElementById('email_copy2');
	var email = document.getElementById('email');
	email.value = email_copy.value || email_copy2.value;
}
