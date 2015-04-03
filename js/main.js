// Main JS File
$(document).ready(function(){
	$('.menu__bar--top .fa.fa-times').click(function(){
		$('.menu--left, .menu--right').toggleClass('open');
	});
})