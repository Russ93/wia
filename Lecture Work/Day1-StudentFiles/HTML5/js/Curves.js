window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		ctx.strokeStyle = 'blue';
		ctx.lineWidth = 5;
		
		//Stroke a simple bezier curve
		ctx.beginPath();
		ctx.moveTo(50, 200);
		
		//bezierCurveTO(cx1,cy1,cx2,cy2, x, y)
		ctx.bezierCurveTo(50,300,200,100,200,150);
		ctx.stroke();
		
		//Show control points
		ctx.strokeStyle = 'rgba(0,0,0,.25)';
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(50,200);
		ctx.lineTo(50,300);
		ctx.lineTo(200,100);
		ctx.lineTo(200,150);
		ctx.stroke();
		
		//quadraticCurveTo(cx, cy, x, y)
		ctx.strokeStyle = '#0f0';
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(400, 200);
		ctx.quadraticCurveTo(400, 100, 600, 150);
		ctx.stroke();
		
		//Show control points
		ctx.strokeStyle = 'rgba(0,0,0,.25)';
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(400,200);
		ctx.lineTo(400,100);
		ctx.lineTo(600,150);
		ctx.stroke();
		
		}
	}
}