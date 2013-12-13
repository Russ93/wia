window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			//Let's create an array of all our compositing methods
			var compMethods = ['source-over','source-in','sourve-out','source-atop','lighter','xor','destination-over','destination-in','destination-out','destination-atop','darker','copy'],
				rects = [
					{x:20, y:20, width:75, height:75},
					{x:40, y:50, width:75, height:75}
				],
				method = 0;
				//Create a variable to track which method
				
				//for loop
				for(var i=0;i<compMethods.length;i++){
					//Get teach canvas
					var cvsName = 'Canvas'+(i+1),
						//Get link to canvas
						curCanvas = document.getElementById(cvsName),
						//Get our context for that specific canvas
						exampleCtx = curCanvas.getContext('2d');
						//Set up Style
						exampleCtx.fillStyle = '076BB6';
						exampleCtx.fillRect(rects[0].x, rects[0].y,rects[0].width,rects[0].height);
						
						exampleCtx.globalCompositeOperation = compMethods[method++];
						
						exampleCtx.fillStyle = '4D9379';
						exampleCtx.fillRect(rects[1].x, rects[1].y,rects[1].width,rects[1].height);
					
				}
		}
	}
}