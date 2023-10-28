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
var video = document.querySelector('video');
var speed = document.querySelector('.speed');
var speedBar = document.querySelector(".speed-bar");
var height = speed.offsetHeight;
speed.addEventListener("mousemove", function (e) {
    var percentage = +(e.offsetY / height).toFixed(2);
    var rate = +speedRange(percentage).toFixed(2);
    speedBar.style.height = "".concat(percentage * 100, "%");
    video.playbackRate = rate;
    speedBar.textContent = rate + "x";
});
function speedRange(num) {
    var max = 4.0;
    var min = 0.25;
    var range = max - min;
    return num * range + min;
}
