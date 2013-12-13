$(document).ready(function() {
    //When the form changes
    $('#mapForm').change(function () {
        //Create a variable to hold selected 
        var selectedContinent = $('#mapForm option:selected').val();
        //IF statement - test if it is ALL - show all dots
        if(selectedContinent =='ALL'){
            //show all dots
            $('a.dot').slideDown(1000);
        }else{
            //show the dots that are on the selected continent
            //Hide all the others
            $('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
            $('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
        }
    });

    //dot code
    //when a dot is clicked
    $('a.dot').click(function () {
        //Remove Selected class from all dots
        $('a.dot').removeClass('selected');
        // Add selected class onto the click ancor
        $(this).addClass('selected');
        
        //Create a variable to hold path of the matching div
        var country = '.country_detail#'+$(this).attr('country');
        //variable to hold the HTML code we are puttin into it
        var htmlCode = $(country).html();
        //Animate the container - fade it out
        $('.detail_container').fadeOut(500, function () {
            //The container is hidden
            //Put our html in the container and then fade it back up
            $('.detail_container .country_detail').html(htmlCode);
            $('.detail_container').fadeIn(500)
        });
    });
});