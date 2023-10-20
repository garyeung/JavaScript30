const arrow = document.querySelector('.arrow') as SVGElement;
const speed = document.querySelector('.speed-value') as HTMLElement;

navigator.geolocation.watchPosition((position) => {
    console.log(position);
    speed.textContent = String(position.coords.speed);
    arrow.style.transform = `rotate(${position.coords.heading}deg)`;

}, (e) => console.log(`Error: ${e}`));