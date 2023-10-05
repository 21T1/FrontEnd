$(function(){
	$(window).scroll(function(){
		if(screen.width >= 992){
			if($('html').scrollTop() > 0){
				$('.navbar-brand').addClass('text-black');
				$('.navbar-nav').addClass('text-black');
				$('.navbar').addClass('bg-white')
				.removeClass('navbar-dark')
				.addClass('navbar-light');
			}else{
				$('.navbar-brand').removeClass('text-black');
				$('.navbar-nav').removeClass('text-black');
				$('.navbar').removeClass('bg-white')
				.addClass('navbar-dark')
				.remoceClass('navbar-light');
			}
		}
	}) 
})