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

//Отключение кнопки отправить
$(window).load(function () {
	$('#submit').attr('disabled', 'disabled');
});

//Проверка на пустые поля
function checkParams() {
	var name = $('#name').val();
	var email = $('#form13').val();

	if (name.length != 0 && email.length != 0) {
		$('#submit').removeAttr('disabled');
	} else {
		$('#submit').attr('disabled', 'disabled');
	}
}

//копирование mail в форму
function copyMail() {
	var form11 = document.getElementById('form11');
	var form12 = document.getElementById('form12');
	var form13 = document.getElementById('form13');
	form13.value = form11.value || form12.value;
}
