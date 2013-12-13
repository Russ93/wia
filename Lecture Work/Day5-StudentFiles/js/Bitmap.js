window.onload = function() {
    var canvas = document.getElementById('canvas'),
        stage = new createjs.Stage(canvas),
        img = new Image();
    img.src = 'images/ship.svg';
    img.onload = updateStage;
    
    function updateStage(e) {
        var bmp = new createjs.Bitmap(e.target)
        
        //Center of the canvas
        
        var centerX = canvas.width/2,
            centerY = canvas.height/2;
        //ste the ships x and y
        bmp.x = centerX;
        bmp.y = centerY;
        
        //change the reg points
        bmp.regX = 50
        bmp.regY = 50
        
        //scale it up
//        bmp.scaleX = 4
//        bmp.scaleY = 4
        
        stage.addChild(bmp)
        stage.update();
        
        // Add event listener for our "tick"
        createjs.Ticker.addEventListener('tick', tick)
        
        function tick() {
            //Anything in here will run default of 20 frams persecond
//            bmp.rotation +=2
//            bmp.x += 2
//            if(bmp.x>=canvas.width){
//                bmp.x = 0
//            }
            //Lets shake the ship
//            bmp.x = centerX + (Math.random() - .5)*100;
            
            //Wave motion by useing sin and cos
            //Circle motion
            //Devided number controls speed
            
            bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/5)*100
            bmp.y = centerY + Math.cos(createjs.Ticker.getTicks()/5)*100
            
            stage.update();
        }
    }
    
}