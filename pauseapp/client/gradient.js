// Define variable colors
	var back = ["#22A7F0","#8E44AD","#AEA8D3","#F62459","#DB0A5B","#D64541","#D2527F","#2C3E50","#1E8BC3","#87D37C","#4ECDC4","#3FC380","#E87E04","#F9690E","#F9BF3B"];
	
	$('.gradient-bkgrd').each(function() {

		var grad = $(this);
		
		// Convert Hex color to RGB
		function convertHex(hex,opacity){
		    hex = hex.replace('#','');
		    r = parseInt(hex.substring(0,2), 16);
		    g = parseInt(hex.substring(2,4), 16);
		    b = parseInt(hex.substring(4,6), 16);
			
			// Add Opacity to RGB to obtain RGBA
		    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
		    return result;
		}
		
		// Gradient rules
		//grad.css('background-color', convertHex(back[0],40) );
		//grad.css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+ convertHex(back[0],40) +"), color-stop(100%,"+ convertHex(back[1],40) +"))");
		grad.css("background-image", "-webkit-linear-gradient(top, "+ convertHex(back[0],40) +","+ convertHex(back[1],40) +","+ convertHex(back[2],40) +","+ convertHex(back[3],40) +","+ convertHex(back[4],40) +","+ convertHex(back[5],40) +","+ convertHex(back[6],40) +","+ convertHex(back[7],40) +","+ convertHex(back[8],40) +","+ convertHex(back[9],40) +")");
		grad.css("background-image", "-o-linear-gradient(top, "+ convertHex(back[0],40) +","+ convertHex(back[1],40) +","+ convertHex(back[2],40) +","+ convertHex(back[3],40) +","+ convertHex(back[4],40) +","+ convertHex(back[5],40) +","+ convertHex(back[6],40) +","+ convertHex(back[7],40) +","+ convertHex(back[8],40) +","+ convertHex(back[9],40) +")");
		grad.css("background-image", "-ms-linear-gradient(top, "+ convertHex(back[0],40) +","+ convertHex(back[1],40) +","+ convertHex(back[2],40) +","+ convertHex(back[3],40) +","+ convertHex(back[4],40) +","+ convertHex(back[5],40) +","+ convertHex(back[6],40) +","+ convertHex(back[7],40) +","+ convertHex(back[8],40) +","+ convertHex(back[9],40) +")");
		grad.css("background-image", "linear-gradient(to bottom, "+ convertHex(back[0],40) +","+ convertHex(back[1],40) +","+ convertHex(back[2],40) +","+ convertHex(back[3],40) +","+ convertHex(back[4],40) +","+ convertHex(back[5],40) +","+ convertHex(back[6],40) +","+ convertHex(back[7],40) +","+ convertHex(back[8],40) +","+ convertHex(back[9],40) +")");
		//grad.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='"+ back[0] +"', endColorstr='"+ back[1] +"',GradientType=0 )");
        
	});