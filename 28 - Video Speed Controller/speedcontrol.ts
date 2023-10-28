/**
 *  Requirement:
 *      move the mouse up and down in speed bar to control the video rate
 * 
 *  Solution:
 *      get the video rate;
 *      get offset y of the speed element and change it to percent apply to the height of.speed-bar
 *      and change the percentage in the rage of 0.25 - 4.0 and apply to video play back rate.
 *      and display the rate in speed bar.
 */
const video = document.querySelector('video');
const speed = document.querySelector('.speed') as HTMLElement;
const speedBar = document.querySelector(".speed-bar") as HTMLElement;
const height= speed.offsetHeight;

speed.addEventListener("mousemove", (e) => {
    const percentage = +(e.offsetY/height).toFixed(2);
    const rate = +speedRange(percentage).toFixed(2);
    speedBar.style.height = `${percentage*100}%`;
    video!.playbackRate = rate
    speedBar.textContent = rate+"x";
})

function speedRange(num: number){
    const max = 4.0;
    const min = 0.25;
    const range = max-min;
    return num*range+min;
}