const video = document.getElementById('video');
let nowVol = document.getElementById('thisVolume');
let vol = video.volume * 100;

function playPause() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

function replay() {
    video.currentTime = 0;
    video.play();
}

function increaseVolume() {
    if (vol <= 100) {
        vol += 5;
        video.volume += 0.05;
    } 
    showVol()
}

function decreaseVolume() {
    if (vol > 0) {
        vol -= 5
        video.volume -= 0.05;
    };
    showVol()
}

function muteUnmute() {
    video.muted = !video.muted;
}

function showVol() {
    document.getElementById('thisVolume').innerHTML = Math.round(vol) + '%';
}