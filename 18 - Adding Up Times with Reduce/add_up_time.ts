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

function timeToSeconds(time: string) {
    const timeArray = time.split(':');
    let sum = 0;
    switch(timeArray.length){
        case 2: 
            sum = Number(timeArray[0])*60 + Number(timeArray[1]);
            break;
        case 3:
            sum = Number(timeArray[0])*60*60 + Number(timeArray[1])*60 + Number(timeArray[2])
            break; 

    }
    return sum;
}

function secondsToTime(seconds: number){
    const hour = Math.floor(seconds/3600);
    const min = Math.floor(seconds%3600/60); 
    const sec = seconds%60;

    const hh  = hour.toString().padStart(2, '0');
    const mm = min.toString().padStart(2, '0');
    const ss = sec.toString().padStart(2, '0');

    if(hh === "00"){
        return `${mm} : ${ss}`;
    }
    else{
        return `${hh} : ${mm} : ${ss}`;
    }
}

const lis = document.querySelectorAll("li[data-time]");
//console.log(lis);

const total = Array.from(lis).map((e) =>{
    const li = e as HTMLLIElement;
    return timeToSeconds(li.dataset.time!);
}).reduce((amount,current) =>{
    return amount+current;
}, 0);

console.log(secondsToTime(total));
