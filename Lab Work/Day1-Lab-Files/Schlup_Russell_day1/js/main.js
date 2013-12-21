(function () {
/*
     Name:Russell Schlup
     Date:November 25, 2013
     Class & Section:  WIA-1312
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
********************************************/
var dom = {
	can1: document.getElementById('Canvas1'),
	can2: document.getElementById('Canvas2'),
	can3: document.getElementById('Canvas3'),
	can4: document.getElementById('Canvas4'),
	can5: document.getElementById('Canvas5'),
	can6: document.getElementById('Canvas6'),
    can7: document.getElementById('Canvas7')
}
/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function() {
if(Modernizr.canvas){
	console.log('I support canvas');
	if (dom.can1 && dom.can1.getContext){
		var ctx = dom.can1.getContext('2d');
		if (ctx){
			//Styles
			ctx.fillStyle = '#076BB6';
			ctx.strokeStyle= '#333';
			
			//Rectangle
			ctx.fillRect(0,0,50,100);
			ctx.strokeRect(0,0,50,100);
		}
	}
	


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
	if (dom.can2 && dom.can2.getContext){
		var ctx2 = dom.can2.getContext('2d');
		if (ctx2){
			//Styles
			ctx2.fillStyle = 'rgba(230, 102, 101, .5)';
			ctx2.strokeStyle= '#333';
			
			//Stroke
			ctx2.beginPath();
			ctx2.arc(50, 50, 30, 0, (Math.PI/180)*360)
			ctx2.stroke();
			
			//Fill
			ctx2.beginPath();
			ctx2.arc(50, 50, 20, 0, (Math.PI/180)*360)
			ctx2.fill();
		}
	}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	if (dom.can3 && dom.can3.getContext){
		var ctx3 = dom.can3.getContext('2d');
		if (ctx3){
			//Styles
			ctx3.fillStyle = '#F47D43';
			ctx3.strokeStyle= '#076BB6';
			ctx3.lineWidth= 5;
			//Star
			ctx3.beginPath();
			ctx3.moveTo(100, 100);
			ctx3.lineTo(139,96);
            ctx3.lineTo(157,60);
            ctx3.lineTo(174,96);
            ctx3.lineTo(213,101);
            ctx3.lineTo(185,129);
            ctx3.lineTo(192,168);
            ctx3.lineTo(157,150);
            ctx3.lineTo(122,168);
            ctx3.lineTo(128,129);
            ctx3.closePath();
			ctx3.stroke();
			ctx3.fill();
		}
	}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
	if (dom.can4 && dom.can4.getContext){
		var ctx4 = dom.can4.getContext('2d');
		if (ctx4){
			var umX = dom.can4.width/2 // 150
				umY = dom.can4.height/2; // 112.5
			
			ctx4.strokeStyle='#A9B2B1';
            ctx4.fillStyle="#ACCBE8";
            ctx4.lineWidth=3;
            ctx4.beginPath();
            ctx4.arc(umX,umY,100,0,(Math.PI/180)*180,true);
            ctx4.bezierCurveTo(umX-100,umY-20,umX-75,umY-20,umX-65,umY); //(50,92.5,75,92.5,85,112.5)
            ctx4.bezierCurveTo(umX-60,umY-20,umX-30,umY-20,umX-20,umY); //(95,92.5,120,92.5,130,112.5)
            ctx4.bezierCurveTo(umX-5,umY-20,umX+15,umY-20,umX+25,umY); //(145,92.5,165,92.5,175,112.5)
            ctx4.bezierCurveTo(umX+35,umY-20,umX+60,umY-20,umX+65,umY); //(185,92.5,210,92.5,215,112.5)
            ctx4.bezierCurveTo(umX+70,umY-20,umX+90,umY-20,umX+100,umY); //(220,92.5,240,92.5,250,112.5)
            ctx4.fill(); //(Numbercp1x,Numbercp1y,Numbercp2x,Numbercp2y,Numberx,Numbery)
            ctx4.stroke();
		}
	}
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	if (dom.can5 && dom.can5.getContext){
		var ctx5 = dom.can5.getContext('2d');
		if (ctx5){
			//Styles
			ctx5.fillStyle = '#06B';
			
			//Text
            ctx5.font = '18pt Avenir';
			ctx5.fillText('Hey Man I Am Trying', 10,50);
		}
	}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
	if (dom.can6 && dom.can6.getContext){
		var ctx6 = dom.can6.getContext('2d');
		if (ctx6){
			var img= new Image();
            img.src="image/logo.png";
            img.onload = function(){
                //Original Image
                ctx6.drawImage(img,0,0);
                //Half size
                ctx6.drawImage(img,0,0,img.width/2,img.height/2);
                //Sliced out
                ctx6.drawImage(img, 300, 300, img.width/2, img.height/2, 10, 10, 300, 150);
            };
		}
	}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
	if (dom.can7 && dom.can7.getContext){
		var ctx7 = dom.can7.getContext('2d');
		if (ctx7){
            umX = dom.can7.width/2 // 150
            umY = dom.can7.height/2; // 112.5
            //Fill Rect
            ctx7.fillStyle = '#BCE';
            ctx7.fillRect(0,0,dom.can7.width,dom.can7.height);
            //Clear Rect
            ctx7.clearRect(250,umY-20,200,umY+20);
            //Umbrella
			ctx7.fillStyle = '#076BB6';
			ctx7.beginPath();
            ctx7.arc(umX,umY,100,0,(Math.PI/180)*180,true);
            ctx7.bezierCurveTo(umX-100,umY-20,umX-75,umY-20,umX-65,umY); 
            ctx7.bezierCurveTo(umX-60,umY-20,umX-30,umY-20,umX-20,umY);
            ctx7.bezierCurveTo(umX-5,umY-20,umX+15,umY-20,umX+25,umY);
            ctx7.bezierCurveTo(umX+35,umY-20,umX+60,umY-20,umX+65,umY);
            ctx7.bezierCurveTo(umX+70,umY-20,umX+90,umY-20,umX+100,umY);
            ctx7.fill();
            ctx7.stroke();
            //Text
            ctx7.fillStyle = '#333';
            ctx7.font = '18pt Avenir';
			ctx7.fillText('Rain I guess XD', 10,50);
		}
	}
}
// if canvas doesn't work.
else{

	//FallBack
	//Polyfill
	//Shiv

}
}})();