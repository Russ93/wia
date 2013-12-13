$(function() { 
	$('#fadein').click(function(){$('#theDiv').fadeIn()});
	$('#fadeout').click(function(){$('#theDiv').fadeOut()});
    $('#fadeto3').click(function(){$('#theDiv').fadeTo(1000,.3)});
    $('#fadeup').click(function(){$('#theDiv').fadeTo(1000, 1)});
});