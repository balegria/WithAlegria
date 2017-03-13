$(document).ready(function() {
	$(window).scroll(function () {
		console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 210) {
	      $('#navbar').addClass('navbar-fixed-top');
	      $('#navbar').css('background-color', 'red');
	    }
	    if ($(window).scrollTop() < 210) {
	      $('#navbar').removeClass('navbar-fixed-top');
	    }
  	});
});

$(document).on('click','.navbar-collapse.in',function(event) {
    if( $(event.target).is('a')){
        $(this).collapse('hide');
    }
});

$(document).on('click', '.navbar-button', function(event){
	// turns all nav bar items one color
	$(".navbar-button").css('color', '#0F161A');
	// turns the selected nav bar item a lighter color
	$(this).css('color', '#EFAA52');
})