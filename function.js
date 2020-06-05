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


	/*Dynamic ScrollTo for Soda*/
	$('.chapter').click( function(){
		let id = $(this).attr('id');
		id = '#'+id+'-text';
		$("#scroll").animate({ scrollTop: locationsSoda[id] + 'px'}, 'swing');
	});

	/*ScrollTo for Nurture*/
	$('.chapter2').click( function(){
		let id = $(this).attr('id');
		id = '#'+id+'-text';
		$("#scroll").animate({ scrollTop: locationsNurture[id] + 'px'}, 'swing');
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

var locationsNurture = {
	'#OV-text': 720,
	'#PS-text': 940,
	'#NF-text': 1067,
	'#SK-text': 3298,
	'#MFP-text': 4653,
	'#UT-text': 6149,
	'#AD-text': 6951,
	'#HFP-text': 9166,
	'#FN-text': 9325
};
