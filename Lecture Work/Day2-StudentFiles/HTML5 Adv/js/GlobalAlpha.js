window.onload = function() {
var theCanvas = document.getElementById('Canvas1');
if (theCanvas && theCanvas.getContext) {
var ctx = theCanvas.getContext("2d");
if (ctx) {
    //Set GlobalAlpha
    ctx.globalAlpha = 1.0 //Default value
    
    //Create an array of rectangles
    var rects =[
        {x:20,y:20,width:75,height:75},
        {x:40,y:50,width:75,height:75},
        {x:150,y:20,width:75,height:75},
        {x:170,y:50,width:75,height:75},
        {x:280,y:20,width:75,height:75},
        {x:300,y:50,width:75,height:75},
        {x:410,y:20,width:75,height:75},
        {x:430,y:50,width:75,height:75},
    ];
        
    //use a for loop and cycle throgh drawing them out
    for(i=0;i<rects.length;i+=2){
        ctx.fillStyle = '076BB6';
        ctx.fillRect(rects[i].x,rects[i].y,rects[i].width,rects[i].height);
        
        //Create a 2nd square
        ctx.fillStyle= 'red';
        ctx.fillRect(rects[i+10].x,rects[i+10].y,rects[i+10].width,rects[i+10].height);
    }
}
}}