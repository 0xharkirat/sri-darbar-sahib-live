let playing = false;
var audio = new Audio('https://live.sgpc.net:8443/;nocache=889869audio_file.mp3');



function playKirtan() {

    
    if (!playing){
        
        playing = true
        
        audio.play();
        
        document.getElementById("button").innerHTML = "Pause"
        
        
        
        console.log("playing")
        
    }
    else{

        playing = false

        document.getElementById("button").innerHTML = "Play"

        console.log("pause")
        audio.pause();

    }
    
}