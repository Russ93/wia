window.onload = function() {
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas),
        shape = new createjs.Shape(),
        sg = shape.graphics;
    
    //Create a red rectangle
    //Fill
    sg.beginFill('#E66665')
    
    //Draw out the rectangle
    sg.rect(0,0,100,100)
    
    //Change its registration point
    shape.regX = 50
    shape.regY = 50;
    
    //Move the rect ti (100,100)
    shape.x = 100
    shape.y = 100
    
    stage.addChild(shape)
    
    //Set the frame rate for an animation using a class of ticker
    //access this by calling creatjs Ticker
    //provides a heartbeat for the animation to follor
    //Default - 20fps
    //Listeners subscribe to this 'tick' and do something with it
    
    //Set a framerate per second
    createjs.Ticker.setFPS(1000);
    
    //Add event Listerner()
    createjs.Ticker.addEventListener('tick', tick)
    
    //create a function called tick to do something
    function tick() {
        //this will be called 30 times per second
        shape.rotation += 8;
        if(shape.x>=canvas.width||shape.y>=canvas.height){
            shape.x = 0
            shape.y = 0
        }else{
            shape.x += 25;
            shape.y += 5;
        }        
        
        stage.update()
    }
    
//    var canvas = document.getElementById('canvas1'),
//        stage = new createjs.Stage(canvas),
//        shape = new createjs.Shape(),
//        sg = shape.graphics;
//
//
//    stage.addChild(shape)
//    stage.update()
}