window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
        ctx.save();
        //Draw a simple rect
        ctx.fillStyle = '076BB6';
        ctx.fillRect(0,0,100,50);
        
        //Scale it
        ctx.scale(1.5,2);
        ctx.fillStyle = 'E66665';
        ctx.fillRect(0,50,100,50);
        
        ctx.restore();
        //Another Scale
        ctx.fillStyle = '752763';
        ctx.scale(.5,.5);
        ctx.fillRect(0,225,100,50);
		}
	}
}