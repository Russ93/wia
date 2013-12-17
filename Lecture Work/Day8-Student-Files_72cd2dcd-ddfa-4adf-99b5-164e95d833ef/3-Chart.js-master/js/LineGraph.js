$(function() { 
	var canvas= document.getElementById("canvas"),
        ctx =canvas.getContext("2d"),
        data = [
            {
                value: 30,
                color:"#F7464A"
            },
            {
                value : 50,
                color : "#E2EAE9"
            },
            {
                value : 100,
                color : "#D4CCC5"
            },
            {
                value : 40,
                color : "#949FB1"
            },
            {
                value : 120,
                color : "#4D5360"
            }
        ],
    options = {
        bezierCurve: false,
        onAnimationComplete: done
    };
    new Chart(ctx).Doughnut(data,options);
    
    function done() {
        var dataURL = canvas.toDataURL();
        document.getElementById('canvasImg').src = dataURL
        $('#canvas').hide()
    }
});