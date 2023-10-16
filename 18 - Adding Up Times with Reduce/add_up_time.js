/**
 * Requirement:
 *    add all the time in data-time
 *    and display in console
 *
 * Solution:
 *    get all the li elements, extract the time
 *    change all the time in seconds and add them all
 *    then change to h:m:s format
 */
function timeToSeconds(time) {
    var timeArray = time.split(':');
    var sum = 0;
    switch (timeArray.length) {
        case 2:
            sum = Number(timeArray[0]) * 60 + Number(timeArray[1]);
            break;
        case 3:
            sum = Number(timeArray[0]) * 60 * 60 + Number(timeArray[1]) * 60 + Number(timeArray[2]);
            break;
    }
    return sum;
}
function secondsToTime(seconds) {
    var hour = Math.floor(seconds / 3600);
    var min = Math.floor(seconds % 3600 / 60);
    var sec = seconds % 60;
    var hh = hour.toString().padStart(2, '0');
    var mm = min.toString().padStart(2, '0');
    var ss = sec.toString().padStart(2, '0');
    if (hh === "00") {
        return "".concat(mm, " : ").concat(ss);
    }
    else {
        return "".concat(hh, " : ").concat(mm, " : ").concat(ss);
    }
}
var lis = document.querySelectorAll("li[data-time]");
//console.log(lis);
var total = Array.from(lis).map(function (e) {
    var li = e;
    return timeToSeconds(li.dataset.time);
}).reduce(function (amount, current) {
    return amount + current;
}, 0);
console.log(secondsToTime(total));
