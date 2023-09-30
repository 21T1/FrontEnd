$(function(){
	$('.scroll-top').click(function(){
		$('html').animate({
			scrollTop: 0
		}, function(){
			alert("Welcome")
		});
		return false;
	})
})  
 