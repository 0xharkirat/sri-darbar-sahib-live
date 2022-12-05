let playing = false;
var liveKirtan = new Audio('https://live.sgpc.net:8443/;nocache=889869audio_file.mp3');
var mukhwak = new Audio('https://old.sgpc.net/hukumnama/jpeg%20hukamnama/hukamnama.mp3');
var mukhwakKatha = new Audio('https://old.sgpc.net/hukumnama/jpeg%20hukamnama/katha.mp3');

document.getElementById('music').style.display = "none"


function playKirtan() {

    if (!playing) {

        playing = true

        play(liveKirtan, "liveKirtan")

    }
    else {

        playing = false

        pause(liveKirtan, "liveKirtan")

    }

}
function playMukhwak() {

    if (!playing) {

        playing = true

        
       play(mukhwak, "mukhwak");


        setTimeout(() => {
            playing = false

            pause(mukhwak, "mukhwak")
        }, mukhwak.duration*1000);

    }
    else {

        playing = false

        pause(mukhwak, "mukhwak")
    }

}
function playMukhwakKatha() {

    if (!playing) {

        playing = true

        
       play(mukhwakKatha, "mukhwakKatha");


        setTimeout(() => {
            playing = false

            pause(mukhwakKatha, "mukhwakKatha")
        }, mukhwakKatha.duration*1000);

    }
    else {

        playing = false

        pause(mukhwakKatha, "mukhwakKatha")
    }

}

function play (audio, name){

    audio.play();

        document.getElementById(name).innerHTML = "Pause"
        document.getElementById("playing").innerHTML = capitalizeFirstLetter(name)
        document.getElementById('music').style.display = "block"


}

function pause (audio, name){


    document.getElementById(name).innerHTML = capitalizeFirstLetter(name)
        document.getElementById('music').style.display = "none";

        
        audio.pause();
        audio.load();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  