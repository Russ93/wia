window.onload = function() {
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas),
        ball = new createjs.Shape(),
        bg = ball.graphics;
    
    bg.setStrokeStyle(5, 1,1);
    bg.beginStroke('#000')
    bg.beginFill('#f00')
    bg.drawCircle(0,0,50)
    bg.endStroke()
    bg.endFill()
    
    //Draw a line on the ball so we can see the direction
    bg.setStrokeStyle(1,1,1)
    bg.beginStroke('#000')
    bg.moveTo(0,0)
    bg.lineTo(0,50)
    bg.endStroke()
    
    ball.x = 100
    ball.y = 100
    
    //Create tween
    // createJS.tween.get(display object, {optional properties})
    //Pprop - loop - true or false
    //useTicks, ignoreGlobal, etc...
    
    var tween1 = createjs.Tween.get(ball, {loop:true})
        .to({x:ball.x, y:canvas.height-55, rotation: -360},1500, createjs.Ease.bounceOut)
        .wait(1000)
        .to({x: canvas.width-55, rotation: 360}, 2500, createjs.Ease.bounceOut)
        .wait(1000).call(tester)
        .to({scaleX: 2, scaleY: 2, x:canvas.width-110, y:canvas.height-110}, 2500, createjs.Ease.bounceOut)
    .wait(1000)
    .to({scaleX: .5, scaleY:.5, x:30, y:canvas.height-30, rotation:-360, alpha:0}, 2500, createjs.Ease.bounceOut)
    
    function tester() {
        console.log('I ran so far away')
        
    }
    
        //ticker
    createjs.Ticker.addEventListener('tick', stage)
    
    stage.addChild(ball)
    stage
}

