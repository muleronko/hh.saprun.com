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
$(function () {
	$("#accordion").accordion({
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
	var company = $('#company').val();

	if (name.length != 0 && email.length != 0 && phone.length != 0 && company.length != 0) {
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

//Слайдер
document.addEventListener('DOMContentLoaded', function () {
	var controls = document.querySelectorAll('.wrapper-ul li'),
		slides = document.querySelectorAll('.belt-slider .wrapper'),
		act_slide = document.getElementsByClassName('active-slide')[0],
		prev = act_slide.previousElementSibling,
		next = act_slide.nextElementSibling,
		opos = 1;

	for (let item of controls) {
		item.style.opacity = (opos / 4).toString();
		item.addEventListener('click', cntr);
	}
	prev ? prev.style.opacity = (opos / 2).toString() : null;
	next ? next.style.opacity = (opos / 2).toString() : null;

	slides[0].style.opacity = opos;

	function cntr() {
		for (let item of controls) {
			item.classList.remove("active-slide");
		}
		this.classList.toggle("active-slide");
		for (let iteme of slides) {
			iteme.style.opacity = "0";
			iteme.style.zIndex = "0";
		}

		let tab = this.id;
		slides[tab[1]].style.opacity = opos;

	}
});
