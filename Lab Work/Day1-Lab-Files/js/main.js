window.onload = function() {
    var theCanvas2 = document.getElementById('Canvas1');
	if (theCanvas2 && theCanvas2.getContext) {
        var ctx = theCanvas2.getContext("2d");
        if (ctx) {
        	//Styles
			ctx.fillStyle = '#06B';
			
			//Text
            ctx.font = '18pt Avenir';
			ctx.fillText('Text Goes Here', 10,50);//-----------------Hey Jairo it goes here-----------------
			
            ctx.fillStyle="rgb(63,201,76)";
            ctx.beginPath();
            ctx.moveTo(26,0);
            ctx.bezierCurveTo(26,0,23,0,22,2);
            ctx.bezierCurveTo(22,4,22,7,24,7);
            ctx.bezierCurveTo(26,8,28,5,28,3);
            ctx.bezierCurveTo(29,1,27,0,26,0);
            ctx.fill();
            
            ctx.fillStyle="rgb(242,225,100)";
            ctx.beginPath();
            ctx.moveTo(4,23);
            ctx.bezierCurveTo(6,23,8,25,8,27);
            ctx.bezierCurveTo(8,29,6,31,4,31);
            ctx.bezierCurveTo(1,31,0,29,0,27);
            ctx.bezierCurveTo(0,25,1,23,4,23);
            ctx.fill();
            
            ctx.fillStyle="rgb(57,140,209)";
            ctx.beginPath();
            ctx.moveTo(10,42);
            ctx.bezierCurveTo(10,42,8,41,9,39);
            ctx.bezierCurveTo(10,37,15,30,15,30);
            ctx.lineTo(16,22);
            ctx.lineTo(9,24);
            ctx.bezierCurveTo(9,24,8,22,6,21);
            ctx.lineTo(15,17);
            ctx.lineTo(19,9);
            ctx.lineTo(12,11);
            ctx.lineTo(6,15);
            ctx.bezierCurveTo(6,15,5,15,4,14);
            ctx.bezierCurveTo(3,13,4,12,5,12);
            ctx.bezierCurveTo(5,11,11,8,11,8);
            ctx.lineTo(20,4);
            ctx.bezierCurveTo(20,4,20,4,21,4);
            ctx.bezierCurveTo(21,4,21,8,24,9);
            ctx.bezierCurveTo(26,9,29,6,29,6);
            ctx.bezierCurveTo(29,6,29,6,30,6);
            ctx.bezierCurveTo(30,7,35,9,35,9);
            ctx.lineTo(42,7);
            ctx.bezierCurveTo(42,7,43,7,43,8);
            ctx.bezierCurveTo(44,10,43,10,43,10);
            ctx.bezierCurveTo(42,10,35,12,35,12);
            ctx.lineTo(28,10);
            ctx.bezierCurveTo(28,10,28,11,29,12);
            ctx.lineTo(22,22);
            ctx.lineTo(18,31);
            ctx.lineTo(12,41);
            ctx.bezierCurveTo(12,41,11,42,10,42);
            ctx.fill();
            
            ctx.fillStyle="rgb(63,201,76)";
            ctx.beginPath();
            ctx.moveTo(14,16);
            ctx.bezierCurveTo(15,14,12,13,12,13);
            ctx.lineTo(6,20);
            ctx.lineTo(14,16);
            ctx.fill();
            
            ctx.lineStyle="rgb(57,140,209)";
            ctx.lineWidth=2;
            ctx.beginPath();
            ctx.moveTo(35,49);
            ctx.bezierCurveTo(35,49,125,32,169,50);
            ctx.stroke();
        }
    }
}