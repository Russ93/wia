window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			var origShadow = ctx.shadowColor;
			
			ctx.save();
			
			//setup basic shadow
			ctx.shadowColor = '999';
			ctx.shadowOffsetX = 30;
			ctx.shadowOffsetY = 10;
			ctx.shadowBlur = 10;
			
			//Draw a simple rectangle
			ctx.fillStyle = '076BB6';
			ctx.fillRect(20,20,200,100);
			
			//Create some text
			var theString = 'Drawing on Canvas';
			ctx.fillStyle = '9ECEB4';
			ctx.font = '25 Lato';
			
			//Create a new Shadow
			ctx.shadowColor = '7F7EA8';
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 5;
			
			ctx.fillText(theString, 250, 75);
			
			//Create a red line green shadow
			ctx.lineCap='round';
			ctx.lineWidth=25;
			ctx.strokeStyle='E66665';
			
			ctx.shadowColor = 'rgba(150,0,150,.5)';
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 15;
			
			ctx.beginPath();
			ctx.moveTo(50, 200);
			ctx.lineTo(450, 200);
			ctx.stroke();
			
			ctx.restore();
			
			ctx.shadowColor = origShadow;
			ctx.fillStyle = '9ECEB4';
			ctx.fillRect(20,255, 200, 50);
		}
	}
}