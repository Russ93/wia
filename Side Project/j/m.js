(function () {
    'use strict';
    var timeLine = [];
    $('document').ready(function () {
        $('.age').html((new Date().getFullYear()) - 1993);
        timeLine = $('#timeline > li');

        $('#timeline li dfn').css('display', 'none');

        for (var i = 0; timeLine.length > i; i++) {
            $(timeLine[i]).mouseenter(function (e) {

                if(($(this).width()/$(this).parent().width())<'.26'){
                // if the width is greater than 26% dont do anything yet
                    $(this).animate({width: '50%', 'padding-bottom':'50%', 'margin-left':'0', 'margin-right':'0'}, 200);
                    //aniamte the grow
                    $($(this).children('p')).animate({margin: '15% 10% 0'},200);
                    // move the head up
                    $($(this).children('dfn')).show()
                    // show the dfn
                }
            });

            $(timeLine[i]).mouseleave(function () {
                $(this).animate({width: '25%', 'padding-bottom':'25%', 'margin-left':'10%', 'margin-right':'10%'}, 200);
                $($(this).children('p')).animate({margin: '40% 5% 0'},200);
                $($(this).children('dfn')).hide()
            });
        }
    });
})();