window.onload = function() {
    //initializeDefaultPlugins - make sure this is true
    // If false then it will not play sounds in the browser
    
    if (!createjs.Sound.initializeDefaultPlugins()) {
        
        return;
    }
    //SoundJS is working
    //SoundJS requires us to register our sounds with it
    //Preloads any registered sounds
    
    //Registers sound and preloads it
    createjs.Sound.registerSound(
        {id: 'soundId', src:'audio/music.mp3|audio/music.ogg',}
    )
    // create an event listener for when the files are preloaded
    createjs.Sound.addEventListener('fileload'||'loadcomplete', handleFileLoad );
    
    //Create a function handlefileload that ;aunches after each sound is preloaded
    function handleFileLoad (e) {
        //A sounds has bee preloaded
        createjs.Sound.play(e.src);
        
    }
}
function playMusic() {
    createjs.Sound.play('soundId');
}