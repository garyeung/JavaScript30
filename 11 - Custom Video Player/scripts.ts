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

const video = document.querySelector("video");
const progress = document.querySelector(".progress") as HTMLElement;
const progress_filled = document.querySelector(".progress__filled") as HTMLElement;
const togglePlay = document.querySelector("button[title='Toggle Play']") as HTMLButtonElement;
const volume = document.querySelector("input[name='volume']") as HTMLInputElement;
const playbackRate = document.querySelector("input[name='playbackRate']") as HTMLInputElement;
const skipButtons:HTMLButtonElement[] = Array.from(document.querySelectorAll('button[data-skip]'));

let isplaying = false;
let isMousedown = false;

togglePlay.addEventListener('click', handlePlay);
function handlePlay(event: MouseEvent){
    isplaying = !isplaying;
    if(isplaying){
        video!.play();
        // add pause sign
        togglePlay.textContent = '❚ ❚';
    }else{
        video!.pause();
        togglePlay.textContent = '►';
    }
}
volume.addEventListener('change', handleVolume);
function handleVolume(event:Event){
    const valume = event.target as HTMLInputElement;
    video!.volume = Number(valume.value);
}
playbackRate.addEventListener("change", handlePlaybackRate);
function handlePlaybackRate(event: Event){
    const playbackRate = event.target as HTMLInputElement;
    video!.playbackRate = Number(playbackRate.value);
}

function setSkip(num:number){
    video!.currentTime += num;
}
skipButtons.forEach((skip) => {
    const skipValue = skip.getAttribute('data-skip');
    skip.addEventListener('click', () => {
        setSkip(Number(skipValue!));
    })
});
video?.addEventListener('timeupdate', handleProgressFilled);
function handleProgressFilled(event:Event){
    const video = event.target as HTMLVideoElement;
    let percent = (video.currentTime/video.duration)*100;
    progress_filled.style.flexBasis = `${percent}%`;
    
}

function handleProgress(event: MouseEvent){
    video!.currentTime = (event.offsetX/progress.offsetWidth)*video!.duration;
}
progress.addEventListener("mousemove",() => isMousedown && handleProgress);
progress.addEventListener("click", handleProgress);
progress.addEventListener('mousedown', ()=> {
    isMousedown = true;
});
progress.addEventListener("mouseup", ()=> {
    isMousedown = false;
})