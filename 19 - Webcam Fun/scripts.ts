const video = document.querySelector('.player') as HTMLVideoElement;
const canvas = document.querySelector('.photo') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const audio = document.querySelector('.snap') as HTMLAudioElement;
const imgURLs: string[] = [];


navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
    video.srcObject = stream;
    video.play();
}).catch((error) => {
    console.log(error);
})


function drawVideoFrame() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    ctx!.drawImage(video, 0, 0, width, height);
    let pixels = ctx!.getImageData(0,0,width,height);
    pixels = rgbSplit(pixels);
    ctx!.putImageData(pixels,0,0);
    return requestAnimationFrame(drawVideoFrame);
}


function takePhoto(){
    audio!.currentTime = 0;
    audio.play();
    const imgURL = canvas.toDataURL('image/jpeg');
    imgURLs.push(imgURL);
    const html = makeingHTML(imgURLs);
    strip!.innerHTML = html!;

}

function makeingHTML(arr: string[]){
    if(arr){
        return arr.map((value) =>{
           return `<a href="${value}" download="yourself">
              <img src="${value}" alt="be your self"/>
             </a>`;
        }).join("");
    }

}
function rgbSplit(pixels:ImageData) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

video.addEventListener('canplay', drawVideoFrame);