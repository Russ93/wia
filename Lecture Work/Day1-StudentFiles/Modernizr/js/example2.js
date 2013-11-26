//Load a different script based on whether date picker is supported
Modernizr.load({
	test: Modernizr.inputtypes.date,
	yep: 'js/success.js',
	nope: 'js/fail.js',
	complete: function(){
		if(Modernizr.inputtypes.date){
			setMessage('no-date', 'This browser supports HTML5 date picker');
		}else{
			setMessage('no-date', 'date-picker is not supported');
		}
	}//complete
});
function setMessage(className, message){
	var elem = document.getElementById('message');
	elem.className = className;
	elem.innerHTML = message;
}