//Load googles vis libreary
//Lads the coe chart packages which is our bar, pie, line, etc.
google.load('visualization', '1',{packages:['corechart']})

//once our library are loaded lets run a funciton
google.setOnLoadCallback(drawChart)

//create our draw chart function
function drawChart(){
    //Create a data table
    //Google can create one out of an array of data
    var  data = google.visualization.arrayToDataTable([
        ['task','Hours Per Day'],
        ['Work',8],
        ['sleep',6],
        ['eat',3],
        ['code',4]
    ]);
    var options = {
        title:'What makes up my day',
//        is3D: true,
//        pieHole: .8,
//        pieSliceText: 'none',
//        pieStartAngle: 100,
//        width: 500,
//        legend: {position: 'labeled'}
    }
    //Create the chart
    var chart = new google.visualization.PieChart(document.getElementById('piechart'))
    //Draw the chart
    chart.draw(data,options)
    
}