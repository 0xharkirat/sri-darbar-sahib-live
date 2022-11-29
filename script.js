let playing = false;
var audio = new Audio('https://live.sgpc.net:8443/;nocache=889869audio_file.mp3');
document.getElementById('music').style.display= "none"



function playKirtan() {

    
    if (!playing){
        
        playing = true
        
        audio.play();
        
        document.getElementById("button").innerHTML = "Pause"
        document.getElementById('music').style.display= "block"
        
        
        
        console.log("playing")
        
    }
    else{

        playing = false

        document.getElementById("button").innerHTML = "Play"
        document.getElementById('music').style.display = "none";

        console.log("pause")
        audio.pause();

    }
    
}