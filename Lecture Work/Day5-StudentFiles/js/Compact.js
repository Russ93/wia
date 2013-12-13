window.onload = function() {
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas),
        shape = new createjs.Shape();
    
    //Starting commands (Normals)
    
    //Create a stroke
    shape.graphics.beginStroke('#076BB6')
    shape.graphics.setStrokeStyle(10,'round','round')
    
    //Draw a triangle
    shape.graphics.moveTo(50,50)
    shape.graphics.lineTo(250,250)
    shape.graphics.lineTo(50,250)
    shape.graphics.closePath()
    
    //Compacted code
    shape.graphics.beginStroke('#E66665').setStrokeStyle(10,'round','round').moveTo(50,50).lineTo(250,250).lineTo(50,250).closePath()
    
    //Compact it more using shortcuts
    shape.graphics.s('#7F7EA8').ss(10,1,1).mt(50,50).lt(250,250).lt(50,250).cp()
    
    stage.addChild(shape)
    stage.update()

}