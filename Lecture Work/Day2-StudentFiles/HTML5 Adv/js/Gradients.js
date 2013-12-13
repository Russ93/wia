window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				//Create a linear Gradient
				//createLinearGradient(x0,y0,x1,y2)
				var linGrd = ctx.createLinearGradient(0,0,200,0);
				//add Color Stos
				linGrd.addColorStop(0,'E66665'); //start Red
				linGrd.addColorStop(.5,'ACCBE8'); //mid blue
				linGrd.addColorStop(1,'9ECEB4'); //end green
				
				//Create a rectangle and fill it with our gradient
				ctx.fillStyle = linGrd;
				ctx.fillRect(0,0,200,260)
				
				//Create a radial Gradient
				//createRadialGradient(x0,y0,r0,x1,y1,r1);
				var radGrd = ctx.createRadialGradient(525,/*150 norm*/100,20,525,150,100);
				radGrd.addColorStop(0,'E66665')
				radGrd.addColorStop(.5,'ACCBE8');
				radGrd.addColorStop(1,'9ECEB4');
				
				//Draw a circle and fill with a gradient
				ctx.fillStyle = radGrd;
				
				//begine path
				ctx.beginPath();
				ctx.arc(525,150,100,0, 2*Math.PI);
				ctx.fill();
		}
	}
}