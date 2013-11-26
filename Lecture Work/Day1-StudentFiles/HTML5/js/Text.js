window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			// Variable full of text
			var theString = 'drawing text on a canvas!'
			
			//draw text on screen
			ctx.fillText(theString, 20,20);
			
			//Draw string and set some info
			ctx.font = '25pt Avenir';
			ctx.fillText(theString, 20,50);
			
			//More styles settings
			ctx.fillStyle = '#06B';
			ctx.fillText(theString, 20,80);
			
			ctx.font = '25pt Avenir';
			ctx.fillStyle = '#FD0';
			ctx.strokeStyle = 'rgba(0,255,0,.8)';
			ctx.fillText(theString, 20,110);
			ctx.strokeText(theString, 20,110);
			
			//Use measreText to draw a line under our text
			//No real easy way to measure how tall is,
			//MeasureText  is good for width........ sort of
			var textW = ctx.measureText(theString);
			ctx.beginPath();
			ctx.strokeStyle= '#000';
			ctx.moveTo(20,110);
			ctx.lineTo(textW.width, 110);
			ctx.stroke();
			
		}
	}
}