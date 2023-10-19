/**
 * change speech to text
 * add in .word
 */
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-UK';
var words = document.querySelector('.words');
var p = document.createElement('p');
words.appendChild(p);
recognition.addEventListener("result", function (e) {
    var event = e;
    //console.log(event.results);
    var transcript = Array.from(event.results).map(function (result) { return result[0]; }).map(function (result) { return result.transcript; }).join("");
    p.textContent = transcript;
    if (event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});
recognition.addEventListener('end', function (e) {
    //    console.log(e);
    recognition.start();
});
recognition.start();
