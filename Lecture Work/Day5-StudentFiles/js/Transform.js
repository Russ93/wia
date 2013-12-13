window.onload = function() {
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas),
        shape = new createjs.Shape(),
        sg = shape.graphics;
    
    //Setup our fill
    shape.graphics.beginFill('#E66665')
    
    //Draw a rectangle
    shape.graphics.drawRect(50,50,100,100)
    
    //move Registration point
    shape.regX = 100; //origin point plus half the width
    shape.regY = 100; //origin point plus half the height
    
    //Lets rotate it
    shape.rotation = 30;
    
    shape.x = 200;
    shape.y = 100;
    
    //start the rectangle at (0,0,100,100), regX & regY = 50,50
    
    //Scaling
    shape.scaleX =.5
    shape.scaleY =.5
    
    //Alpha
    shape.alpha = 1
    
    //Visible
    // 0 - not visible
    //1 - visible
    shape.visible = 1
    
    //When not visible - not drawn and not clickable
    
    //Skewing
    shape.skewY = 200
    shape.skewX = 200
    
    stage.addChild(shape)
    stage.update()
}