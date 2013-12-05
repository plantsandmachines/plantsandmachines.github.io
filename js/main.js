$(document).ready(function(){

	var aBot = new AsciiBot();
	$('#abot').append(aBot.getBot( aBot.HAPPY, aBot.POINT_RIGHT ) );
	var bBot = new AsciiBot();
	$('#bbot').append( bBot.getBot( bBot.OEH) );
	var cBot = new AsciiBot();
	$('#cbot').append( cBot.getBot( bBot.DEFUNCT, bBot.POINT_LEFT) );
	console.log('test')

});

