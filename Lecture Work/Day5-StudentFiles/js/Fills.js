window.onload = function() {
	
    // first we will gte our canvas and creat a stage
    var canvas = document.getElementById('canvas1'),
        stage  = new createjs.Stage(canvas);
    
    // Create a rectangle
    
    //First create a new shape
    var rect1 = new createjs.Shape()
    
    //Basic fill
    rect1.graphics.beginFill('#7F7EA8')
    
    //Declare a fill using: name,HEX,color,rgb rgba,hsl,hsla
    rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255));
    
    //Lineare Gradient
    rect1.graphics.beginLinearGradientFill(['#FFD602 ','#E66665 '], [0,1], 50,50,150,150) // top left - bot right
//    rect1.graphics.beginLinearGradientFill(['#FFD602 ','#E66665 '], [0,1], 50,50,150,50) //bot left - top right
//    rect1.graphics.beginLinearGradientFill(['#FFD602 ','#E66665 '], [0,1], 50,50,50,150) // top right to bot left
//    rect1.graphics.beginLinearGradientFill(['#FFD602 ','#7F7EA8','#E66665 '], [0,.5,1], 50,50,150,150) // top right to bot left
    
    //Radial gradients
    rect1.graphics.beginRadialGradientFill(['#FFD602','#E66665'], [0,1],100,100,0,100,100,100)
    
    
    //Draw the rectangle
    //fillRects or rect
    rect1.graphics.rect(50,50,100,100);
    
    //add to the stage
    stage.addChild(rect1);
    
    // To draw on the canvas, update the stage
    stage.update();
}