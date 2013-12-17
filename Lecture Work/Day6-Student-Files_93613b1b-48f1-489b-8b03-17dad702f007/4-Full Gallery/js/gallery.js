$(document).ready(function() {

    //Capture our thumbnail link
    $('.gallery_thumbnails a').click(function (e) {
        e.preventDefault();
        //Setup variables based on thumbnail links
        var photo_caption = $(this).attr('title'),
            photo_fullsize = $(this).attr('href'),
            //Preview link
            photo_preview = photo_fullsize.replace('_fullsize', '_preview');
            //fade out preview, preload images, fade back in
            $('.gallery_caption').slideUp(500)
            $('.gallery_preview').fadeOut(500, function () {
                //happens once the preview area is off screen
                // Switch the picture
                $('.gallery_preload_area').html('<img src="'+photo_preview+'" />')
                //Once this image is loade the bring back up
                $('.gallery_preload_area img').imgpreload(function () {
                    //The image is now ready to go
                    //Change the link when click
                    $('.gallery_preview').html('<a class="overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+'" style="background-image: url('+photo_preview+') ;"></a>');
                    $('.gallery_caption').html('<p><a class="overlayLink zoom" title="'+photo_caption+'" href="'+photo_fullsize+'">View Larger</a></p><p>'+photo_caption+'</p>')
                    //Fade back in
                    $('.gallery_preview').fadeIn(500, setFancyBoxLinks())
                    $('.gallery_caption').slideDown(500)
                })//preload
                
            })//fadeout
    })//click
    //setting Initial picture & caption
    var first_photo_caption = $('.gallery_thumbnails a').first().attr('title'),
        first_photo_fullsize = $('.gallery_thumbnails a').first().attr('href'),
        first_photo_preview = first_photo_fullsize.replace('_fullsize', '_preview');
    
    $('.gallery_preview').html('<a class="overlayLink" title="'+first_photo_caption+'"href="'+first_photo_fullsize+'" style="background-image: url('+first_photo_preview+') ;"></a>')
    $('.gallery_caption').html('<p><a class="overlayLink zoom" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'">View Larger</a></p><p>'+first_photo_preview+'</p>')
    $('.gallery_preview').fadeIn(500, setFancyBoxLinks())
    $('.gallery_caption').slideDown(500)
    setFancyBoxLinks();
    updateThumbnails()
}); //doc.ready
//Create a funciton thats dims our thumbnails
function updateThumbnails() {
    $('.gallery_thumbnails a').each(function (index) {
        //for each of the thumbnails, this will run once
        //Test to see if the thumbnail is selected
        if($('.gallery_preview a').attr('href') == $(this).attr('href')){
            $(this).addClass('selected')
            $(this).children().fadeTo(250, .4)
        }else{
            $(this).removeClass('selected')
            $(this).children().css('opacity', '1')
        }
    })
}
//Create a function to use fancy box or the preview click
function setFancyBoxLinks() {
    $('a.overlayLink').fancybox({
        //set attributes of fancy box
        'titlePosition': 'over',
        'overlayColor': '#000',
        'overlayOpacity': .8,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'autoScale': true
    })
}