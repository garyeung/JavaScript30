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
var timer = 10 * 1000;
var score = 0;
var timeup = false;
var lasthole;
var scoreBoard = document.querySelector('.score');
var holes = document.querySelectorAll('.hole');
var moles = document.querySelectorAll(".mole");
function randomTime(min, max, step) {
    var range = (max - min) / step;
    var randomitem = Math.floor(Math.random() * range);
    return min + randomitem * step;
}
function randomHole(moles) {
    var length = moles.length;
    var randomItem = Math.floor(Math.random() * length);
    if (randomItem === lasthole) {
        console.log('hide! quick!');
        return randomHole(moles);
    }
    lasthole = randomItem;
    return moles[randomItem];
}
function pop() {
    var rtime = randomTime(200, 1100, 100);
    var rhole = randomHole(holes);
    rhole.classList.add('up');
    setTimeout(function () {
        rhole.classList.remove('up');
        if (!timeup)
            pop();
    }, rtime);
}
function startGame() {
    resetGame();
    pop();
    setTimeout(function () { return timeup = true; }, timer);
}
function whack(e) {
    if (e.isTrusted) //prevent cheat
     {
        score++;
        this.parentNode.classList.remove('up');
        scoreBoard.textContent = String(score);
    }
}
Array.from(moles).forEach(function (mole) {
    mole.addEventListener('click', whack);
});
function resetGame() {
    scoreBoard.textContent = '0';
    timeup = false;
    score = 0;
}
