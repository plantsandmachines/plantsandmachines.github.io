$(document).ready(function(){

	var aBot = new AsciiBot();
	$('#abot').append(aBot.getBot( aBot.HAPPY, aBot.POINT_RIGHT ) );
	var cBot = new AsciiBot();
	$('#cbot').append( cBot.getBot( cBot.DEFUNCT, cBot.POINT_LEFT) );

	$('.hover').hover( function(){
    		$(this).tooltip('show');
	});

	$('.hover').mouseout( function(){
    		$(this).tooltip('hide');
	});

});


