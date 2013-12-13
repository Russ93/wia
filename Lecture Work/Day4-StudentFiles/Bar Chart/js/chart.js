// Create some variables
var barSpacing = 0,
    barWidth = 0,
    chartHeight = 0,
    chartHeightArea = 0,
    chartScale = 0,
    maxValue = 0,
    highestYlabel = 0,
    valueMultiplier = 0;

//Create a document ready funtion
$('document').ready(function () {
    //setting the global variables
    window.chartHeight = $('.chart-area').height()
    window.barWidth = $('.chart-area .chart-bar').width()
    window.highestYlabel = Number($('.chart-y-axis p').first().html())
    window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height())
    window.chartScale = chartHeightArea / window.highestYlabel;
    window.barSpacing = Number($('.chart-area').attr('bar-spacing'))

    //Create a function that will creat a position each bar
    positionBars()
})

function positionBars() {
    $('.chart-area .chart-bar').each(function (index) {
        var barPosition = (window.barWidth * index) + (window.barSpacing * index) + window.barSpacing
        $(this).css('left', barPosition + 'px')
        // Add text to the bars and the X axis for each
        $(this).html('<p>' + $(this).attr('bar-value') + '</p>')
        //x-axis
        $('.chart-x-axis').append('<p style="left:' + (barPosition - (window.barWidth / 2)) + 'px;">' + $(this).attr('label') + '</p>')
        //Realtive height of the bars
        var barValue = Number($(this).attr('bar-value'))
        if (barValue > window.maxValue) {
            window.maxValue = barValue;
            window.valueMultiplier = window.maxValue / window.highestYlabel;

        }
    })
    animateChart();
}
//Create a funciton that will anitmate our chart
function animateChart() {
    //get each bar and animate it to it's proper height
    $('.chart-area .chart-bar').each(function (index) {
        //Height relative to the chart height
        var revisedValue = Number($(this).attr('bar-value')) * window.chartScale
        //create a variable for the new delay
        var newDelay = 125 * index;
        //Animate the bar
        $(this).delay(newDelay).animate({
            'height': revisedValue
        }, 1000, function () {
            //fade back in our <p> tags
            $(this).children('p').delay(500).fadeIn(250)

        });

    })
}

function turkeyUpdate() {


    $('.chart-area .chart-bar').each(function (index) {
        if (index == 0) {
            var revisedValue = $('#turkeyForm option:selected').val() * window.chartScale;

            $(this).html('<p>' + $('#turkeyForm option:selected').val() + '</p>')

        } else {
            var revisedValue = Number($(this).attr('bar-value')) * window.chartScale;
        }

        var newDelay = 125 * index;

        $(this).delay(newDelay).animate({
            height: revisedValue
        }, 1000, function () {

            $(this).children('p').delay(500).fadeIn(250);
        });
    });
}