window.onload = function() {

    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas),
        shape = new createjs.Shape();
    
    //Stroke Style
    shape.graphics.beginStroke('#E66665')
    shape.graphics.setStrokeStyle(5,1,1)
    
    //drawPolyStar(x,y,radius,sides,pointSize(0-1), angle)
    shape.graphics.drawPolyStar(75,75,50,5,.5,0)
    
    //draw the outerRing
    shape.graphics.drawCircle(75,75,50)
    
    //Starburst
    shape.graphics.drawPolyStar(325,75,50,10,1,0)
    
    //Polygon
    shape.graphics.drawPolyStar(450,75,50,10,0,0)
    
    //Triangle
    shape.graphics.drawPolyStar(550,75,50,3,0,0)
    
    //Rotate the triangle when drawn
    shape.graphics.drawPolyStar(550,75,50,3,0,-90)
    
    //Create a new shape
    var shape2 = new createjs.Shape();
    
    //create a red filled triangle
    shape2.graphics.beginFill('#E66665')
    shape2.graphics.drawPolyStar(250,250,50,3,0,-90)
    
    stage.addChild(shape2)
    
    //Lets add an eventlisterner
    //.addEventListern or .on
    shape2.addEventListener('click', function (e) {
        console.log('triangle is clicked')
    })
    
    stage.addChild(shape)
    stage.update();
    
    

}