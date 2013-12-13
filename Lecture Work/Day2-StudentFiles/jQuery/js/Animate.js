$(function() { 
	$('#right').click(function(){$('#theDiv').animate({'width':'500px'})});
	$('#text').click(function(){$('#theDiv').animate({'font-size':'24px'})});
	$('#toggle').click(function(){$('#theDiv').animate({'left':'500px'})});
	$('#multiple').click(function(){$('#theDiv').animate({'left':'500px','width':'500px','font-size':'24px'},100,'swing')});
});