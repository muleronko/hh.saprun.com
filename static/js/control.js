//Табы, паралакс, акардион
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
		$('#parallax-bg2').css('backgroundPositionY', (0 - (scrolled * .4)) + 'px');
	}

	//аккардион
	$(function () {
		$("#accordion").accordion({
			heightStyle: "content"
		});
	});

})(jQuery);

//Отключение кнопки отправить
$(window).load(function () {
	$('#submit_btn').attr('disabled', 'disabled');
});

//Проверка на пустые поля
function checkParams() {
	var name = $('#name').val(),
		email = $('#email').val(),
		phone = $('#phone').val(),
		company = $('#company').val();

	if (name.length != 0 && email.length != 0 && phone.length != 0 && company.length != 0) {
		$('#submit_btn').removeAttr('disabled');
	} else {
		$('#submit_btn').attr('disabled', 'disabled');
	}
}

//копирование mail в форму - что такое hh
function copyMail() {
	var email_copy = document.getElementById('email_copy'),
		email_copy2 = document.getElementById('email_copy2'),
		email = document.getElementById('email');
	email.value = email_copy.value || email_copy2.value;
}

document.addEventListener('DOMContentLoaded', function () {
	slider();
	type_form();
});

//Слайдер
function slider() {
	var controls = document.querySelectorAll('.wrapper-ul li'),
		slides = document.querySelectorAll('.belt-slider .wrapper'),
		act_slide = document.getElementsByClassName('active-slide')[0],
		prev = act_slide.previousElementSibling,
		next = act_slide.nextElementSibling,
		opos = 1,
		count = 0,
		timer_start = setInterval(next_slide, 3000);

	for (let item of controls) {
		item.style.opacity = (opos / 4).toString();
		item.addEventListener('click', cntr);
	}

	prev ? prev.style.opacity = (opos / 2).toString() : null;
	next ? next.style.opacity = (opos / 2).toString() : null;
	slides[0].style.opacity = opos;

	for (let iteme of slides) {
		iteme.addEventListener('mouseenter', slider_stop);
		iteme.addEventListener('mouseleave', slider_start);
	}

	function slider_stop() {
		clearInterval(timer_start);
	}

	function slider_start() {
		timer_start = setInterval(next_slide, 3000);
	}

	function next_slide() {
		for (let items of slides) {
			items.style.opacity = "0";
		}
		for (let items of controls) {
			items.classList.remove("active-slide");
		}
		count != 0 ? slides[count - 1].style.opacity = "0" : undefined;
		count == 0 ? slides[2].style.opacity = "0" : undefined;
		slides[count].style.opacity = "1";
		slides[count].classList.add("show-numb");
		let timeNumb = setInterval(delNumb, 3000);

		function delNumb() {
			slides[count].classList.remove("show-numb");
		}
		controls[count].classList.add("active-slide");
		if (count != 0) {
			controls[count - 1].classList.remove("active-slide");
		} else {
			controls[2].classList.remove("active-slide");
		}
		count < 2 ? count++ : count = 0;
	}

	function cntr() {
		for (let item of controls) {
			item.classList.remove("active-slide");
		}
		this.classList.add("active-slide");

		for (let iteme of slides) {
			iteme.style.opacity = "0";
			iteme.style.zIndex = "0";
			iteme.classList.remove("show-numb");
		}

		let tab = this.id;
		slides[tab[1]].style.opacity = opos;
		slides[tab[1]].classList.add("show-numb");
	}
};

//Добавление типа формы
function type_form() {
	var click_buttons = document.querySelectorAll("[data-fancybox]");
	for (let item of click_buttons) {
		item.addEventListener("click", typeForm);
	}

	function typeForm() {
		var types = document.getElementById("types"),
			attr = this.getAttribute("data-types");
		types.setAttribute("value", attr);
	}
};

//Появление кнопки, появление скобок, рисование графика
window.onscroll = function () {
	//Появление кнопки
	let get_button = document.querySelectorAll('.show-button'),
		get_breacks = document.querySelectorAll('.belt-integration .wrapper'),
		get_graf = document.querySelectorAll('.belt-company');

	for (let item of get_button) {
		item.style.opacity = "0";
		if (item.getBoundingClientRect().top < document.documentElement.clientHeight) {
			item.classList.add("show-button-animation");
		} else {
			item.classList.remove("show-button-animation");
		}
	}

	//Появление скобок
	get_breacks[0].getBoundingClientRect().top < document.documentElement.clientHeight ?
		get_breacks[0].classList.add("move-breacks") :
		get_breacks[0].classList.remove("move-breacks");

	//Появление графика
	get_graf[0].getBoundingClientRect().top < document.documentElement.clientHeight ?
		get_graf[0].classList.add("move-bg") : null;
	//get_graf[0].classList.remove("move-bg");
}


//сообщение, что email отправлен
//function messege(){
//	var form = document.getElementById("demo-form"),
//	input = document.getElementsByTagName("input"),
//	request = new XMLHttpRequest();
//
//request.onreadystatechange = function(){
//	if(request.readyState === 4) {
//		for(let item of input){
//				item.remove();
//		}
//		if(request.status === 200) {
//			form.innerHTML = "Сообщение отправлено, в ближайшее время мы свяжемся с Вами!";
//		} else {
//			form.innerHTML = "Сообщение не отправлено, повторите попытку или позвоните нам!";
//		}
//	}
//}
//}
