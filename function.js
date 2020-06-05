/*JS File*/


$(document).ready(function() {

	/* Progress Bar based on the container with all the content*/
	$('#scroll').scroll(function () {
  		var s = $(this).scrollTop(),
        d = $(this).get(0).scrollHeight,
        c = $(this).height();
        var scrollPercent = (s / (d-c)) * 100;

   		$("#progress").css({"height":scrollPercent+'%'});

	});


	/*Dynamic ScrollTo*/
	$('.chapter').click( function(){
		let id = $(this).attr('id');
		id = '#'+id+'-text';
		$("#scroll").animate({ scrollTop: locationsSoda[id] + 'px'}, 'swing');
	});

});


var locationsSoda = {
	'#OV-text': 570,
	'#PS-text': 823,
	'#NF-text': 951,
	'#UP-text': 1204,
	'#CA-text': 4136,
	'#LFP-text': 4381,
	'#MFP-text': 5737,
	'#HFP-text': 9097,
	'#FN-text': 10355
};
