let playing = false;
const liveKirtan = new Audio(
  "https://live.sgpc.net:8443/;nocache=889869audio_file.mp3"
);
const mukhwak = new Audio(
  "https://old.sgpc.net/hukumnama/jpeg%20hukamnama/hukamnama.mp3"
);
const mukhwakKatha = new Audio(
  "https://old.sgpc.net/hukumnama/jpeg%20hukamnama/katha.mp3"
);

const audio = [
  {
    name: "Live Kirtan",
    id: "liveKirtan",
    audio: liveKirtan,
  },
  {
    name: "Mukhwak",
    id: "mukhwak",
    audio: mukhwak,
  },
  {
    name: "Mukhwak Katha",
    id: "mukhwakKatha",
    audio: mukhwakKatha,
  },
];

document.getElementById("hukamnama-image").style.display = "none";
document.getElementById("music").style.display = "none";

function playKirtan() {
  pauseAll(audio[0].id);

  if (!playing) {
    playing = true;

    play(audio[0].audio, audio[0].name, audio[0].id);
  } else {
    playing = false;

    pause(audio[0].audio, audio[0].name, audio[0].id);
  }
}
function playMukhwak() {
  pauseAll(audio[1].id);

  if (!playing) {
    playing = true;

    play(audio[1].audio, audio[1].name, audio[1].id);

    document.getElementById("hukamnama-image").style.display = "block";


    setTimeout(() => {
      playing = false;

      pause(audio[1].audio, audio[1].name, audio[1].id);
      
    }, mukhwak.duration * 1000);
  } else {
    playing = false;

    pause(audio[1].audio, audio[1].name, audio[1].id);
  }
}
function playMukhwakKatha() {
  pauseAll(audio[2].id);

  if (!playing) {
    playing = true;

    play(audio[2].audio, audio[2].name, audio[2].id);

    setTimeout(() => {
      playing = false;

      pause(audio[2].audio, audio[2].name, audio[2].id);
    }, mukhwakKatha.duration * 1000);
  } else {
    playing = false;

    pause(audio[2].audio, audio[2].name, audio[2].id);
  }
}

function play(audio, name, id) {
  audio.play();

  document.getElementById(id).innerHTML = "Pause";
  document.getElementById("playing").innerHTML = name;
  document.getElementById("music").style.display = "block";
}

function pause(audio, name, id) {
  document.getElementById(id).innerHTML = name;
  document.getElementById("music").style.display = "none";
  document.getElementById("hukamnama-image").style.display = "none";

  audio.pause();
  audio.load();
}

function pauseAll(id) {
  for (let index = 0; index < audio.length; index++) {
    if (audio[index].id !== id) {
      if (audio[index].audio.duration > 0 && !audio[index].audio.paused) {
        pause(audio[index].audio, audio[index].name, audio[index].id);
        playing = false;
      }
    }
  }
}
