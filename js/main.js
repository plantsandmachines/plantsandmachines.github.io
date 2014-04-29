$(document).ready(function(){

	var aBot = new AsciiBot();
	$('#abot').append(aBot.getBot( aBot.HAPPY, aBot.POINT_LEFT_UP) );
	var bBot = new AsciiBot();
	$('#bbot').append( bBot.getBot( bBot.CUTE, bBot.POINT_RIGHT_DOWN) );
	var cBot = new AsciiBot();
	$('#cbot').append( cBot.getBot( cBot.CUTE) );
	var dBot = new AsciiBot();
	$('#dbot').append( dBot.getBot( dBot.HAPPY, dBot.POINT_LEFT_UP) );

	$('.hover').hover( function(){
    		$(this).tooltip('show');
	});

	$('.hover').mouseout( function(){
    		$(this).tooltip('hide');
	});

  var robotiso = "/images/landing-page/arduino-inside.png"
	$('.robot-iso').click(function(){
		$('.robot-iso').toggleClass('toggled');

			if ($('#formula .n-times').text() === "3×") {
				$('#formula .n-times').text("1×");
			}
			else {
				$('#formula .n-times').text("3×");
			}
	});

});
