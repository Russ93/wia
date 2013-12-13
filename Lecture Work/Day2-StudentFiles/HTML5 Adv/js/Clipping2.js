window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
        ctx.save();
        //create some Vars
        var x = theCanvas.width/2,
            y = theCanvas.height/2,
            radius = 75,
            offset = 50;
        //Create a clipping path
        ctx.beginPath();
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.clip();
        
        // Draw a blue circle
        ctx.beginPath();
        ctx.arc(x-offset,y-offset,radius,0,2*Math.PI);
        ctx.fillStyle = '076BB6';
        ctx.fill();
        
        //Draw a yellow circle inside our clipping path
        ctx.beginPath();
        ctx.arc(x+offset,y,radius,0,2*Math.PI);
        ctx.fillStyle = 'CDB48C';
        ctx.fill();
        
        //Draw a red circle inside our clipping path
        ctx.beginPath();
        ctx.arc(x,y+offset,radius,0,2*Math.PI);
        ctx.fillStyle = 'E66665';
        ctx.fill();
        
        //Stroke the whole circle
        
        //restore our clipping path to the whole canvas
        ctx.restore();
        
        ctx.beginPath();
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.lineWidth=10;
        ctx.strokeStyle= '076BB6';
        ctx.stroke();
		}
	}
}