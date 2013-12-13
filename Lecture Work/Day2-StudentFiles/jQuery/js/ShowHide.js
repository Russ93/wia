$(function() { 
	//show(speed, callBack function)
	$('#show').click(function(){$('#theDiv').show('normal',function(){alert('Div is now done being shown')});});
	$('#hide').click(function(){$('#theDiv').hide('normal');});
	$('#toggle').click(function(){$('#theDiv').toggle('normal');});
});