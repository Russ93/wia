//Test if canvas work on our browser

if(Modernizr.canvas){
	//Draw inside of here
	var theCanvas = document.getElementById('Canvas1');
	var ctx = theCanvas.getContext('2d');
	
	//Draw Text on the screen
	ctx.font = '25pt Avenir';
	ctx.fillText('Canvas is working', 20,60);
}else{

	//FallBack
	//Polyfill
	//Shiv

}
//Test
if(Modernizr.draganddrop){
	var theCanvas = document.getElementById('Canvas1');
	var ctx = theCanvas.getContext('2d');
	//Draw a string that says it supported
	ctx.font = '25pt Avenir';
	ctx.fillText('Drag and drop works', 20,100);
}else{
	//Fall Back or polyfill
}