window.onload = function() {
	// Canvas and stage
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas);
    
    // Create a graphic shape
    var shape = new createjs.Shape();
    
    // Set stroke style
    shape.graphics.beginStroke('#7F7EA8');
    shape.graphics.setStrokeStyle(10,0,1);
    
    //Draw a rectangle
    shape.graphics.rect(50,50,300,300);
    
    //Rounded rectangle
    //drawRoundeRect(x,y,wdth,height,radius)
    
    shape.graphics.beginStroke('#076BB6');
    shape.graphics.drawRoundRect(75,75,250,250,50);
    
    //Complex reounded rectangle
    //drawRoundRectComplex(x,y,width,height,(radius of -)topleft,topright,bottomleft, bottomright)
    shape.graphics.drawRoundRectComplex(100,100,200,200,50,0,50,0)
    //add to stages display list
    stage.addChild(shape);
    
    //Draw it by calling update
    stage.update();
}