window.onload = function() {
	//Canvas & stage
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas);
    
    //Create a shape
    var shape = new createjs.Shape()
    
    //Set stroke
    shape.graphics.beginStroke('#7F7EA8')
    shape.graphics.setStrokeStyle(10,0,1)
    
    //Draw a circle
    //.drawcircle(x,y,radius)
    shape.graphics.drawCircle(100,100,50)
    
    //Draw elipse
    //drawElipse(x,y,w,h)
    shape.graphics.drawEllipse(75,200,150,50)
    
    //Drawing Arcs
    //artc(x,y,startAngle, endAngle, antClockwise? 1)
    //angles are in radians
    shape.graphics.beginStroke('#E66665')
    shape.graphics.arc(100,100,75,0,90*(Math.PI/180))
    
    //Add it to the stage display list
    stage.addChild(shape)
    stage.update()
}