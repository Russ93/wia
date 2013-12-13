window.onload = function() {
	//First we canvas and stage
    
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas);
    //Create a shape
    var shape = new createjs.Shape();
    
    //beginStroke() give it a color
    shape.graphics.beginStroke('#7F7EA8');
    
    //Set stroke styles
    // Takes 1-4 values as argumenta
    shape.graphics.setStrokeStyle(10);
    
    // Set stroke styles
    // Takes 1-4 values as arguments
    // Line width in px
    shape.graphics.setStrokeStyle(10);
    
    //setStrokeStyle(thickness, caps, joints,miter)
    // Caps - 0 - butt, 1 - round, 2 - square
    //Joints 0 - miter,1 - round, 2 - miter
    //miter is a #
    shape.graphics.setStrokeStyle(10,"round", 1 ,0)
    
    //starting point
    //moveTo()
    shape.graphics.moveTo(25,25);
    
    // Draw a straight line
    shape.graphics.lineTo(250,25);
    
    //Move to 50,50 and then a quad curve
    shape.graphics.moveTo(25,25);

    //make a quad curve .quadraticCurveTo(cpx, cpx, x, y);
//    shape.graphics.quadraticCurveTo(50,175,250,250);
    
    // Arc to - arcTo(x1,y1.x2,y2, radius)
//    shape.graphics.arc(100,50,100,200,60);
    
    //Beziercurve()
    //bezierCurveTo(cp1x, cp1y,cp2x,cp2y,x,y)
    shape.graphics.bezierCurveTo(100,50,100,200,250,250)
    shape.graphics.lineTo(50,250);
    
    //Close Path
    //.closePath()
    shape.graphics.closePath()
    
    //Add to stages displaylist
    stage.addChild(shape);
    stage.update();
}