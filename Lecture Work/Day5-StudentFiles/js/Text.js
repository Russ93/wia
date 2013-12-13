window.onload = function() {
    var canvas = document.getElementById('canvas1'),
        stage = new createjs.Stage(canvas),
        shape = new createjs.Shape(),
        sg = shape.graphics;
    
    var sentence = new createjs.Text()
    
    sentence.text =  'This is a sentence about nothing..... or is it?'
    
    //fot property
    sentence.font = '30px Fenix'
    sentence.fontWeight = '200'
    sentence.color = '#076BB6'

    //move it
    sentence.x = 150;
    sentence.y = 50;
//    sentence.rotation = 30;
    
    //Text also has some special properties
    //textAlign - left right or center;
    sentence.textAlign = "center"
    
    //lineWidth - wrap the text after a cetain point
    sentence.lineWidth = 150
    //space between the sentences
    sentence.lineheight = 50
    
    //Stroke the outside of the text
//    sentence.outline = true;
    //You can also chain the command together
    var sentence2 = new createjs.Text('Text we want inside', '30px Fenix', '#076BB6');
    
    stage.addChild(sentence, sentence2)
    stage.update()

}