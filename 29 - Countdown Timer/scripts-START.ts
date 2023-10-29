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
enum TimeFormSet {
    hhmm,
    mmss
}
const conclution = 'Be Back At ';
let timer :number;
let currentTime: number;
const timers = document.querySelectorAll('.timer__button');
const timeLeft = document.querySelector('.display__time-left') as  HTMLElement;
const endTime = document.querySelector('.display__end-time');
const customForm = document.querySelector('#custom') as HTMLFormElement;
const title = document.getElementsByTagName("title");
let cancelTimer: NodeJS.Timer;

function TimeForm(seconds: number, timeform:TimeFormSet ){
    let min = Math.floor(seconds/60);
    if(timeform === TimeFormSet.hhmm){
        min %=60;
    }
    const mm = `${min}`.padStart(2, '0');
    const ss = `${Math.floor(seconds%60)}`.padStart(2, '0');
    const hh = `${Math.floor(seconds/3600)%24}`;
    if (timeform === TimeFormSet.hhmm){
        return hh+':'+mm;
    }
    else return mm+':'+ss;
}

function handleClick(e:Event){
    setTimer(Number(this.dataset.time!)); 
}

function countdown(timer: number){
    document.title = timeLeft.textContent = TimeForm(timer, TimeFormSet.mmss);
    if(timer > 1) timer--;
    return setInterval(() => {
        document.title = timeLeft.textContent = TimeForm(timer, TimeFormSet.mmss);
        if(timer < 1) clearInterval(cancelTimer);
        timer--;
    }, 1000)
    
}

function getCurrentTime(){
    const now = new Date();
    const hh = now.getHours(),
    mm = now.getMinutes(),
    ss = now.getSeconds();
    return  hh*3600+mm*60+ss
}

function setTimer(time: number){
    clearInterval(cancelTimer);
    timer = time; 
    currentTime = getCurrentTime();
    endTime!.textContent = conclution+TimeForm(currentTime+timer, TimeFormSet.hhmm);
    cancelTimer = countdown(timer);
}

function handleSumbit(e: SubmitEvent){
    e.preventDefault();
    const formData = new FormData(customForm);
    const customMin = Number(formData.get('minutes')!); 
    console.log(customMin);
    setTimer(customMin*60);
    customForm.reset();
}

Array.from(timers).forEach((timer) => {
    timer.addEventListener('click',handleClick)
});
customForm.addEventListener('submit', handleSumbit);