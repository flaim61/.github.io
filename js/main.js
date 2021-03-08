$(document).ready(function(){
	$('.hideTextFourBlock').hide();
	$('.круг5').hide();
	$('.minus').hide();
	$('.hideTextEightBlock').hide();
	$('.hiddenTextInHz2').hide();
});

$(window).ready(function(){
	var vHeight = $(window).height();

	$('.blockTwo')
	.height(vHeight*2.09)
	.scrollie({
		scrollOfSet: -100,
		scrollingInView: function(elem){
			var bg = elem.data('background');

			$('body').css('background-image', bg);
		}
	});
});

function showHideText(number){
	var item = $('.hideTextFourBlock_'+number);

	if (item.is(":visible")) {
		$('.hideTextFourBlock_'+number).hide();
		$('.круг5_'+number).hide();
		$('.круг3_'+number).show();
	}else{
		$('.hideTextFourBlock_'+number).show();
		$('.круг5_'+number).show();
		$('.круг3_'+number).hide();
	}
}
function openHz(){
	var item = $('.hiddenTextInHz2');

	if (item.is(":visible")) {
		$('.hiddenTextInHz2').hide();
		$('.кругh').show();
		$('.кругs').hide();
	}else{
		$('.hiddenTextInHz2').hide();
		$('.кругs').show();
		$('.кругh').hide();
	}
}


function showHideQuestions(number){
	var item = $('.hideTextEightBlock_'+number);

	if (item.is(":visible")) {
		$('.hideTextEightBlock_'+number).hide();
		$('.pluse_'+number).show();
		$('.minus_'+number).hide();
	}else{
		$('.hideTextEightBlock_'+number).show();
		$('.pluse_'+number).hide();
		$('.minus_'+number).show();
	}
}

window.addEventListener('scroll', function() {
  	if (($(window).scrollTop()/$(window).height()*10) < 8 && ($(window).scrollTop()/$(window).height()*10) > -1) {
  		$('.active').removeClass( "active" );
		$('#link1').addClass( "active" );
	}
	if (($(window).scrollTop()/$(window).height()*10) < 17 && ($(window).scrollTop()/$(window).height()*10) > 8) {
		$('.active').removeClass( "active" );
		$('#link2').addClass( "active" );
	}
	if (($(window).scrollTop()/$(window).height()*10) < 29 && ($(window).scrollTop()/$(window).height()*10) > 17) {
		$('.active').removeClass( "active" );
		$('#link3').addClass( "active" );
	}
	if (($(window).scrollTop()/$(window).height()*10) < 43 && ($(window).scrollTop()/$(window).height()*10) > 29) {
		$('.active').removeClass( "active" );
		$('#link4').addClass( "active" );
	}
	if (($(window).scrollTop()/$(window).height()*10) < 58 && ($(window).scrollTop()/$(window).height()*10) > 43) {
		$('.active').removeClass( "active" );
		$('#link5').addClass( "active" );
	}
	if (($(window).scrollTop()/$(window).height()*10) < 72 && ($(window).scrollTop()/$(window).height()*10) > 58) {
		$('.active').removeClass( "active" );
		$('#link6').addClass( "active" );
	}
	if (($(window).scrollTop()/$(window).height()*10) < 90 && ($(window).scrollTop()/$(window).height()*10) > 72) {
		$('.active').removeClass( "active" );
		$('#link7').addClass( "active" );
	}

});



