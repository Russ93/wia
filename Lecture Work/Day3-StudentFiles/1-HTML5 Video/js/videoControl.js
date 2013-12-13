var vid;
window.onload = function() {
    //Link our variable to our video
    vid= document.getElementById('vid');

}//window.onload
function clicked() {
    // .currentTime - current play time in seconds
    vid.currentTime+=2
}
function pausedToggle() {
    //Test to find out if the video is paused or not
    //.paused - is a boolean property

    if (vid.paused) {
        vid.play();
    }else{
        vid.pause();
    }//if(vid.paused)

}//pausedToggle
