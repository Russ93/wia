window.onload = function() {
	$('.lightbox_trigger').click(function (e) {
        //Prevent the default action of the hyper link
        e.preventDefault();
        //Get the clicked lnk href
        var image_href = $(this).attr('href');
        //Add some html code that creates a lightbox div
        //First time run creat the code
        //Every other time - edit that code
        //Div is called lightbox
        if($('#lightbox').length > 0){
            //lightbox exists - edit the code
            
            //place href as img src value
            $('#content').html('<img src="'+image_href+'" />')
            $(this).slideUp(1000)
            
            //show the hidden lightbox div
            $("#lightbox").show()
            
        }else{
            //lightbox doesnot exist yet...... so we make it
            var lightbox = '<div id="lightbox">'+'<p>Click to close</p>'+'<div id="content">'+
            //insert the cliked href into ourimage src
            '<img src="'+image_href+'" />'+'</div>'
            //insert the lightbox html into our page
            $('body').append(lightbox)
        }
    })// click
    $('#lightbox').live('click', function () {
        $(this).slideUp(1000)
    })
	

}