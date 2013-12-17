$(function() { 
        $('#coffeeNumber,#teaNumber').hide()
		$('#moveIt').click(function () {
            $('#coffee').animate({"width": "600px"},1000)
            
            $('#tea').animate({"width": '300px'},1000)
            
            $('#coffeeNumber,#teaNumber').slideDown(1000)
        })
		
		
});