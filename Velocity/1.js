$(function(){
	$(window).scroll(function(){
		if($('html').scrollTop() > 0){
			$('.logo').addClass('change-logo');
			$('.navbar-dark').removeClass('bg-transparent').addClass('bg-light');
			$('.menu').addClass('change-menu');
			$('.scroll-top').removeClass('hidden');
		}else{
			$('.logo').removeClass('change-logo');
			$('.navbar-dark').addClass('bg-transparent').removeClass('bg-light');
			$('.menu').removeClass('change-menu');
			$('.scroll-top').addClass('hidden');
		}
	})

	$('.scroll-top').click(function(){
		$('html').animate({
			'scrollTop': 0
		});
		return false;
	})
})  
 