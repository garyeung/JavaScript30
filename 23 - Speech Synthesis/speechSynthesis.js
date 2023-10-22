/**    Requirement:
      1. change text to speech
      2. can select a voice
      3. can set the rate and pitch
      4. have a stop button and speak button
      
**/
var msg = new SpeechSynthesisUtterance();
var voices = [];
var voicesDropdown = document.querySelector('[name="voice"]');
var options = document.querySelectorAll('[type="range"], [name="text"]');
var speakButton = document.querySelector('#speak');
var stopButton = document.querySelector('#stop');
var select = document.querySelector('select');
var textarea = document.querySelector('textarea');
var synth = window.speechSynthesis;
voices = synth.getVoices();
//console.log(voices);
var matchEn = /^en(-[A-Z]{2})?/gi;
voices = voices.filter(function (voice) { return voice.lang.match(matchEn); });
//console.log(voices);
voices.forEach(function (voice) {
    var option = document.createElement('option');
    option.value = voice.name;
    option.textContent = voice.name;
    select.add(option);
});
select.addEventListener('change', function (e) {
    var voice = voices.find(function (v) { return v.name === select.value; });
    msg.voice = voice;
    //console.log(voice);
});
msg.text = textarea.value;
textarea.addEventListener('input', function (e) {
    msg.text = textarea.value;
});
speakButton.addEventListener("click", function (e) {
    synth.speak(msg);
});
stopButton.addEventListener('click', function () {
    synth.cancel();
});
options.forEach(function (option) {
    option.addEventListener('change', function (e) {
        if (option.tagName === "INPUT") {
            var input = option;
            if (input.name === 'rate') {
                msg.rate = Number(input.value);
            }
            if (input.name === 'pitch') {
                msg.pitch = Number(input.value);
            }
        }
        if (synth.speaking) {
            synth.cancel();
        }
        synth.speak(msg);
    });
});
