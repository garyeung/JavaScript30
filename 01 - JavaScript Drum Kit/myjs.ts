/**
 * Requiremens:
 *  press the corresponding key button to play the audio with the key same data 
 *  the button css changed when palying audio
 * Solution:
 * 1. add event listener
 *      event: keydown
 *      handle: play audio, change css 
 * 2. add event listener
 *      event: keyup
 *      handle: stop audio, recover css
 */


function play(event: KeyboardEvent){
    const audio:HTMLAudioElement|null = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(audio){
      key?.classList.add("playing");
      audio.currentTime = 0;
      audio.play()
    }
}
function stopPlay(event: KeyboardEvent){
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if(key){
      key.classList.remove("playing");
    }
    
}
window.addEventListener('keydown', play);
window.addEventListener('keyup', stopPlay);