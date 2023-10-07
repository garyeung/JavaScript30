/**
 *  Requirement:
 *    controll the player:
 *    have current time bar which display the current progress and can controll the progress
 *    play/pause button
 *    volume controller
 *    skip controller which can play back 10s or forward 25s
 *    playbackspeed controller: range: 0.5 - 2, step: 0.1
 *
 *  Solution:
 *     1. get the video element
 *     2. set play/pause  with "toggle play"
 *     3. set the volume  with the value of "volume"
 *     4. set the playback rate with the value of "playbackRate"
 *     5. set the skip controller by control current time.
 *     6. bind the current time with the value of flex-basis of "progress_filled" and set it by mouse down and mouse move action
 */
var video = document.querySelector("video");
var progress = document.querySelector(".progress");
var progress_filled = document.querySelector(".progress__filled");
var togglePlay = document.querySelector("button[title='Toggle Play']");
var volume = document.querySelector("input[name='volume']");
var playbackRate = document.querySelector("input[name='playbackRate']");
var skipButtons = Array.from(document.querySelectorAll('button[data-skip]'));
var isplaying = false;
var isMousedown = false;
togglePlay.addEventListener('click', handlePlay);
function handlePlay(event) {
    isplaying = !isplaying;
    if (isplaying) {
        video.play();
        // add pause sign
        togglePlay.textContent = '❚ ❚';
    }
    else {
        video.pause();
        togglePlay.textContent = '►';
    }
}
volume.addEventListener('change', handleVolume);
function handleVolume(event) {
    var valume = event.target;
    video.volume = Number(valume.value);
}
playbackRate.addEventListener("change", handlePlaybackRate);
function handlePlaybackRate(event) {
    var playbackRate = event.target;
    video.playbackRate = Number(playbackRate.value);
}
function setSkip(num) {
    video.currentTime += num;
}
skipButtons.forEach(function (skip) {
    var skipValue = skip.getAttribute('data-skip');
    skip.addEventListener('click', function () {
        setSkip(Number(skipValue));
    });
});
video === null || video === void 0 ? void 0 : video.addEventListener('timeupdate', handleProgressFilled);
function handleProgressFilled(event) {
    var video = event.target;
    var percent = (video.currentTime / video.duration) * 100;
    progress_filled.style.flexBasis = "".concat(percent, "%");
}
function handleProgress(event) {
    video.currentTime = (event.offsetX / progress.offsetWidth) * video.duration;
}
progress.addEventListener("mousemove", function () { return isMousedown && handleProgress; });
progress.addEventListener("click", handleProgress);
progress.addEventListener('mousedown', function () {
    isMousedown = true;
});
progress.addEventListener("mouseup", function () {
    isMousedown = false;
});
