var video = document.querySelector('.player');
var canvas = document.querySelector('.photo');
var ctx = canvas.getContext('2d');
var strip = document.querySelector('.strip');
var snap = document.querySelector('.snap');
var audio = document.querySelector('.snap');
var imgURLs = [];
navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
    video.srcObject = stream;
    video.play();
})["catch"](function (error) {
    console.log(error);
});
function drawVideoFrame() {
    var width = video.videoWidth;
    var height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(video, 0, 0, width, height);
    var pixels = ctx.getImageData(0, 0, width, height);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
    return requestAnimationFrame(drawVideoFrame);
}
function takePhoto() {
    audio.currentTime = 0;
    audio.play();
    var imgURL = canvas.toDataURL('image/jpeg');
    imgURLs.push(imgURL);
    var html = makeingHTML(imgURLs);
    strip.innerHTML = html;
}
function makeingHTML(arr) {
    if (arr) {
        return arr.map(function (value) {
            return "<a href=\"".concat(value, "\" download=\"yourself\">\n              <img src=\"").concat(value, "\" alt=\"be your self\"/>\n             </a>");
        }).join("");
    }
}
function rgbSplit(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}
video.addEventListener('canplay', drawVideoFrame);
