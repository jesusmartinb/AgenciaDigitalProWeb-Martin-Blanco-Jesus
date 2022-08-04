$(document).ready(main);

var contador = 1;

function main () {
	$('.header__menu-bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

$(window).on("scroll", function () {
	if ($(window).scrollTop() > $("#cambio").offset().top - 50) {
	  $(".black").addClass("white").removeClass("black");

	} else {
	  $(".white").addClass("black").removeClass("white");
	};
  });