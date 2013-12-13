window.onload = function() {
    // Test to make sure it works
    if (!createjs.Sound.initializeDefaultPlugins) {
        return;
    }
    //soundJS is working
    
    //Create a variable for our path to our audio files
    var  aP = 'audio/';
    //Create a manifest - array of sounds
    var manifest = [
        {id:'Music',src:aP+'music.mp3|'+''+aP+'music.ogg'},
        {id:'Thunder',src:aP+'Thunder1.mp3|'+''+aP+'Thunder1.ogg'}
    ];
    // Register the sounds
    
    createjs.Sound.registerManifest(manifest);
    
    // Add event listener
    
    createjs.Sound.addEventListener('fileload',handleLoad);
    
    //Once a sound is loaded the we can play it
    
    function handleLoad (e) {
        //This will play each time a sound it preloaded
        createjs.Sound.play(e.src);
    }
}
function playMusic () {
    createjs.Sound.play('Music');
}
function Thunder () {
    createjs.Sound.play('Thunder');
}