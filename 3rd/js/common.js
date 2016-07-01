$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});
	var sections = $('section');
	$(window).on('scroll', function () {
  	var cur_pos = $(this).scrollTop();
  	sections.each(function() {
    	var top = $(this).offset().top - 80;
      var bottom = top + $(this).outerHeight();
    	if  ($(window).scrollTop() == $(document).height() - $(window).height()) 
   		{
        $('nav a').removeClass('active');
  			$('a[href="#'+$(this).attr('id')+'"]').addClass('active');
   		}
    	if (cur_pos >= top && cur_pos <= bottom) {
    		if ($(this).attr('id')!="watch"&&$(this).attr('id')!="works"
    			&&$(this).attr('id')!="load")
    			$('nav a').removeClass('active');
    		$('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    	}
  	});
	});
	$('nav a').on('click', function () {
		
  	var el = $(this);
    id = el.attr('href');
		$('body').animate({
			scrollTop: $(id).offset().top - 80
		}, 600);
	  return false;
	});
	$('.nav-toggle').click(function(){
		$('.outmenu').toggleClass('open');
	});
	$('.outmenu span.close').click(function(){
		$('.outmenu').toggleClass('open');
	})
})
