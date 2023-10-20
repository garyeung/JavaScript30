var arrow = document.querySelector('.arrow');
var speed = document.querySelector('.speed-value');
navigator.geolocation.watchPosition(function (position) {
    console.log(position);
    speed.textContent = String(position.coords.speed);
    arrow.style.transform = "rotate(".concat(position.coords.heading, "deg)");
}, function (e) { return console.log("Error: ".concat(e)); });
