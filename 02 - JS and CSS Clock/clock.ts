/**
 *  Requiement:
 *      get the current time
 *      accroding to the time to change the corresponding clock hand
 * 
 *  remark: 
 *    time:minutes:seconds:degree = 12*30 : 60*6 : 3600*0.1 : 360
 */ 

function getcurrentTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // query the coreesponding element.
    const Hands = document.getElementsByClassName("hand");
    const hourHand = Hands[0] as HTMLElement;
    const minHand  = Hands[1] as HTMLElement;
    const secondHand = Hands[2] as HTMLElement;

    secondHand.style.transform = `rotate(${s*6}deg)`;

    //adjust the hour hand to reduce 90 degree, casuse the .clock-face transfers to 90 degree 
    hourHand.style.transform = `rotate(${h*30}deg)`;
    minHand.style.transform = `rotate(${m*6}deg)`;

    setTimeout(() => {
       getcurrentTime() 
    }, 1000);
}
window.addEventListener("load", getcurrentTime);
