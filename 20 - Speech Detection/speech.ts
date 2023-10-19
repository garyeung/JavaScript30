/**
 * change speech to text
 * add in .word
 */
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = 'en-UK';

const words = document.querySelector('.words');
let p = document.createElement('p');
words!.appendChild(p);

recognition.addEventListener("result",(e) => {
    const event  = e as SpeechRecognitionEvent;
    //console.log(event.results);
    const transcript = Array.from(event.results).map((result) => result[0]).map((result)=> result.transcript).join("");

    p.textContent = transcript;
    if(event.results[0].isFinal){
        p = document.createElement('p');
        words!.appendChild(p);
    }

})
recognition.addEventListener('end',(e)=> {
//    console.log(e);
    recognition.start()});
recognition.start();
