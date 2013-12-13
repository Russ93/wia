window.onload = function() {
    // Fitrst we will create a stage
    // The stage contains all of the display objects
    
    var canvas = document.getElementById('canvas1');
    
    //Create a our stage
    var stage = new createjs.Stage(canvas);
    
    // Add a blue circle to our stage
    
    //Start with a new graphic
    var circleGraphic = new createjs.Graphics();
    
    //Draw a circle with a radius of 50 centered at 0,0 , blue
    
    circleGraphic.beginFill('#076BB6');
    circleGraphic.drawCircle(0,0, 50);
    
    //Create a shape instance
    //Shapes are display objects that draw vector object or graphics
    var circleShape = new createjs.Shape(circleGraphic);
    
    // All display objects share common 
    circleShape.x = 50;
    circleShape.y = 50;
    
    //In order to show must add to the stage's display list
    // .addChild() method
    stage.addChild(circleShape);
    
    //.update the stage to draw on the canvas
    stage.update();
}