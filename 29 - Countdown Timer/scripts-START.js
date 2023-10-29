/**
 *  Requirement:
 *    click one of the time setters then countdown and display the current time plus the setter time
 *
 *  Solution:
 *      1.get all the timer button and the corresponding time-data
 *      2.create a time form function change the time data to %h:%s
 *      3.  set an interval function, every second counts down on the select time and when the timer gets zero, the function stop.
 *      4. display the current time when you clicking plus the timer
 *      5. get the timer in the customForm when pushing the value and using in countdown
 */
var TimeFormSet;
(function (TimeFormSet) {
    TimeFormSet[TimeFormSet["hhmm"] = 0] = "hhmm";
    TimeFormSet[TimeFormSet["mmss"] = 1] = "mmss";
})(TimeFormSet || (TimeFormSet = {}));
var conclution = 'Be Back At ';
var timer;
var currentTime;
var timers = document.querySelectorAll('.timer__button');
var timeLeft = document.querySelector('.display__time-left');
var endTime = document.querySelector('.display__end-time');
var customForm = document.querySelector('#custom');
var title = document.getElementsByTagName("title");
var cancelTimer;
function TimeForm(seconds, timeform) {
    var min = Math.floor(seconds / 60);
    if (timeform === TimeFormSet.hhmm) {
        min %= 60;
    }
    var mm = "".concat(min).padStart(2, '0');
    var ss = "".concat(Math.floor(seconds % 60)).padStart(2, '0');
    var hh = "".concat(Math.floor(seconds / 3600) % 24);
    if (timeform === TimeFormSet.hhmm) {
        return hh + ':' + mm;
    }
    else
        return mm + ':' + ss;
}
function handleClick(e) {
    setTimer(Number(this.dataset.time));
}
function countdown(timer) {
    document.title = timeLeft.textContent = TimeForm(timer, TimeFormSet.mmss);
    if (timer > 1)
        timer--;
    return setInterval(function () {
        document.title = timeLeft.textContent = TimeForm(timer, TimeFormSet.mmss);
        if (timer < 1)
            clearInterval(cancelTimer);
        timer--;
    }, 1000);
}
function getCurrentTime() {
    var now = new Date();
    var hh = now.getHours(), mm = now.getMinutes(), ss = now.getSeconds();
    return hh * 3600 + mm * 60 + ss;
}
function setTimer(time) {
    clearInterval(cancelTimer);
    timer = time;
    currentTime = getCurrentTime();
    endTime.textContent = conclution + TimeForm(currentTime + timer, TimeFormSet.hhmm);
    cancelTimer = countdown(timer);
}
function handleSumbit(e) {
    e.preventDefault();
    var formData = new FormData(customForm);
    var customMin = Number(formData.get('minutes'));
    console.log(customMin);
    setTimer(customMin * 60);
    customForm.reset();
}
Array.from(timers).forEach(function (timer) {
    timer.addEventListener('click', handleClick);
});
customForm.addEventListener('submit', handleSumbit);
