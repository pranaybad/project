(function($){"use strict";if($('.loader-wrapper').length){$('.loader-wrapper').on('click',function(){$(this).fadeOut();});}
if($('.flexslider').length){$('.flexslider').flexslider({animation:"fade"});}
if($('.logo-slides').length){$(".logo-slides").owlCarousel({autoplay:true,autoplayTimeout:3000,loop:true,margin:10,nav:false,responsiveClass:true,responsive:{0:{items:1},480:{items:2},767:{items:3},991:{items:4},1199:{items:5}}});}
if($('#skills').length){var skillsDiv=$('#skills');$(window).on('scroll',function(){var winT=$(window).scrollTop(),winH=$(window).height(),skillsT=skillsDiv.offset().top;if(winT+winH>skillsT){$('.skillbar').each(function(){$(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')},2000);});}});}
if($('.service-slider').length){$('.service-slider').flexslider({animation:"slide",controlNav:false,directionNav:true,touch:true});}
if($('.blog-slide').length){$('.blog-slide').flexslider({controlNav:false,animation:"slide"});}
if($('.counter').length){$('.counter').counterUp({delay:10,time:1500});}
$(window).load(function(){if($('.loader-wrapper').length){$('.loader-wrapper').fadeOut();}});})(jQuery);