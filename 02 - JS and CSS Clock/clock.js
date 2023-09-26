/**
 *  Requiement:
 *      get the current time
 *      accroding to the time to change the corresponding clock hand
 *
 *  remark:
 *    time:minutes:seconds:degree = 12*30 : 60*6 : 3600*0.1 : 360
 */
function getcurrentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // query the coreesponding element.
    var Hands = document.getElementsByClassName("hand");
    var hourHand = Hands[0];
    var minHand = Hands[1];
    var secondHand = Hands[2];
    secondHand.style.transform = "rotate(".concat(s * 6, "deg)");
    //adjust the hour hand to reduce 90 degree, casuse the .clock-face transfers to 90 degree 
    hourHand.style.transform = "rotate(".concat(h * 30, "deg)");
    minHand.style.transform = "rotate(".concat(m * 6, "deg)");
    setTimeout(function () {
        getcurrentTime();
    }, 1000);
}
window.addEventListener("load", getcurrentTime);
