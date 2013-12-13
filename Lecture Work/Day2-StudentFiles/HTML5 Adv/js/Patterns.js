window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
	
/*
			//Create a pattern from an Image
			var patImg = new Image();
			
			// .onload, that will wait until the IMG is loaded
			patImg.onload = function() {
				//reapeat, no-repeat, repeat-x, and repeat-y
				ctx.fillStyle = ctx.createPattern(patImg, 'repeat');
				ctx.fillRect(0,0,Canvas1.width,Canvas1.height);
			}
			patImg.src = 'images/desert_desc_bug.gif';
*/
			
			//Create a pattern from a canvas
			var patCanvas = document.getElementById('patCan'),
				patCtx = patCanvas.getContext('2d');
			//Draw a line in the pattern canvas
			patCtx.strokeStyle = 'E66665';
			patCtx.lineWidth = 1;
			
			patCtx.beginPath();
			patCtx.moveTo(0,0);
			patCtx.lineTo(25,25);
			patCtx.stroke();
			
			//Use the canvas as a pattern
			var strokePat = ctx.createPattern(patCanvas, 'repeat');
			ctx.strokeStyle = strokePat;
			ctx.lineWidth = 25;
			ctx.strokeRect(50,50,200,200);
		}
	}
}