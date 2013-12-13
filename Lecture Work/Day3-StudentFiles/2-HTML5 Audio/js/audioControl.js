// Create a variable that will hold our audio
var audio;
window.onload = function() {
    audio = document.getElementById('audio');
}
//Create our clicked function
function clicked(){
    //Property of audio
    //current Time - current playtime of the audio in seconds 
    audio.curentTime +=2;
}