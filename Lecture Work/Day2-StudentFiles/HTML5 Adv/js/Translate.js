window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
        //Draw a simple rectangle
        ctx.fillStyle = '076BB6';
        ctx.fillRect(0,0,100,50);
        
        //Let's translate the origin to the middle of the canvas
        ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);
        ctx.fillRect(0,0,100,50);
        
		}
	}
}