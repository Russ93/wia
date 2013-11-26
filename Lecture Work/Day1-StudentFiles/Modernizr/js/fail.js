//Fallback or polyfill
console.log('Date picker doesn;t work');
$('input[type=date]').datepicker({dateformat:'mm/dd/yy'});