var character = jQuery('#char');
var character_left = 0;

jQuery('#map a')
	.on('click', function(e) {
		e.preventDefault();
		var anchor = jQuery(this);
		
		jQuery('#world')
			.attr('data-row', anchor.attr('data-row'))
			.attr('data-field', anchor.attr('data-field'));
	});
	
jQuery(document)
	.on('keypress', function(e) {
		var keyPressed = e.keyCode;
		console.log(keyPressed);
		
		switch(keyPressed) {
			case 9:														// Tab
				jQuery('body').toggleClass('showMap');
				break;
			case 37:													// Left				
				if(character_left > 0) {
					if(character_left==50) {
						//code om de wereld naar rechts te laten bewegen
					}
					
					character_left--;
					character.css('left', character_left + 'vw');
				}
				break;
			case 39:													// right	
				if(character_left < 200) {
					if(character_left > 49 && character_left < 150 ) {
						//code om de wereld naar links te laten bewegen
					} else {
					}
					character_left++;
					character.css('left', character_left + 'vw');
				}
				break;
		}
	});