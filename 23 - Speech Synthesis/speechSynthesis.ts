/**    Requirement:
      1. change text to speech
      2. can select a voice
      3. can set the rate and pitch
      4. have a stop button and speak button 
      
**/
  const msg = new SpeechSynthesisUtterance();
  let voices: SpeechSynthesisVoice[]= [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  const select = document.querySelector('select');
  const textarea = document.querySelector('textarea');
  const synth = window.speechSynthesis;
  
  voices = synth.getVoices();
//console.log(voices);
  const matchEn = /^en(-[A-Z]{2})?/gi;   
  voices = voices.filter((voice)=> {return voice.lang.match(matchEn)});
//console.log(voices);
  voices.forEach((voice) => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.textContent = voice.name;
    select!.add(option);
    
  })
  select!.addEventListener('change', (e) => {
    const voice = voices.find( (v) => v.name === select!.value);
    msg.voice = voice!;
    //console.log(voice);
  })

  msg.text = textarea!.value;
  textarea!.addEventListener('input', (e)=> {
    msg.text = textarea!.value;
  })

  speakButton!.addEventListener("click", (e) =>{
    synth.speak(msg);
  })
  stopButton!.addEventListener('click', () => {
    synth.cancel();
  })
  options.forEach((option) => {
    option.addEventListener('change', (e) =>{
        if (option.tagName === "INPUT"){
            const input = option as HTMLInputElement;
            if(input.name === 'rate'){
                msg.rate = Number(input.value);
            }
            if(input.name === 'pitch'){
                msg.pitch  = Number(input.value);
            }
        }
        if(synth.speaking){
            synth.cancel();
        }
        synth.speak(msg);
    })
  })