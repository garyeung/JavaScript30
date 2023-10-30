/**
 *  Requirement:
 *     whack the mole who randomly pops up on the top pf the hole in a given time 
 * 
 *  Solution:
 *     click the start button and trigger the function that radonmly add .up in the classlist of a hole element and remove in a given time
 *    funtion:
 *        random number: the item of the hole list
 *        random appear time:  200 - 1000 
 *        
 *        pop(){
 *          ritem = random number
 *          rtime = randowm time
 *          ritem.addclassname(up)
 *          settimeout(removeclassname && if(!timeup) pop(), rtime)}
 * }
 *         gamestart(){
 *              pop()
 *              settimeout(timeup = ture, timer=10000)
 * }
 *        eachmoles.addeventlistener(click, hit)
 *        hit(e){
 *          if(e.isTrusted) //prevent cheat
 *          whack count++
 *          e.parent.removeclassname(up)
 *          score.textcontent = count
 * }
 *          
 * }
 *    variables:
 *        whack count
 *       timeup = false
 *        
 *     
 */
let timer = 10*1000;
let score = 0;
let timeup = false;
let lasthole:number;

const scoreBoard = document.querySelector('.score');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll(".mole");

function randomTime(min:number, max:number, step: number){
    const range = (max-min)/step;
    const randomitem = Math.floor(Math.random()*range);
    return min+randomitem*step; 
}

function randomHole(moles: NodeListOf<Element>){
const length = moles.length;
const randomItem = Math.floor(Math.random()*length);
     if(randomItem === lasthole){
        console.log('hide! quick!');
        return randomHole(moles);
     }
     lasthole = randomItem;
     return moles[randomItem];
}

function pop(){
    const rtime = randomTime(200, 1100, 100);
    const rhole = randomHole(holes);
    rhole.classList.add('up');
    setTimeout(()=>{
        rhole.classList.remove('up');
        if(!timeup) pop();
    },rtime);

}
function startGame(){
    resetGame();
    pop();
    setTimeout(()=> timeup=true, timer);
}

function whack(e: Event){
    if(e.isTrusted)    //prevent cheat
    {
        score++;
        this.parentNode.classList.remove('up');
        scoreBoard!.textContent = String(score);
    }
}
Array.from(moles).forEach((mole) => {
    mole.addEventListener('click', whack);
})

function resetGame(){
    scoreBoard!.textContent = '0';
    timeup = false;
    score = 0;
}