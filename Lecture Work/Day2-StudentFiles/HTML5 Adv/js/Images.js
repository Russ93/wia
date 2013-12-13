window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				//Creat a variable to hold the Image
				var srcImg = document.getElementById('img1');
				
				//Draw the image into the canvas
//				ctx.drawCanvas(srcImg,0,0);
				
                //Scale down the Image
//                ctx.drawImage(srcImg,50,50,350,150);
        
        //Draw a portion of the Image in the canvas 
        //drawImage(image, sx,sy,sw,sh,dx,dy,dw,dh)
//        ctx.drawImage(srcImg,350,200,125,100,50,50,250,200)
        
        //draw a video in the canvas
        //set Interval function
        //setInterval(function, timing)
        
        //create a variable to hold the video
        
        var srcVid = document.getElementById('vid1');
        srcVid.play();
        
        setInterval(function(){
            var theCanvas = document.getElementById('Canvas1');
            var ctx = theCanvas.getContext('2d');
            var srcVid = document.getElementById('vid1');
            ctx.drawImage(srcVid,0,0);
            
        },16);
        
		}
	}
}