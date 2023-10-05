var dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
    var p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
// Regular
var interString = dogs[0].name;
console.log(dogs);
// Interpolated
console.log('This is a dog called %s', interString);
// Styledp
console.log('%c I don\'t know I can style console message before', 'font-size: 30px; color: red;');
// warning!
console.warn('TAKE CARE!!!');
// Error :|
console.error("You can't drink water using your shoe");
// Info
console.info("You are doing well");
// Testing
var p = document.querySelector("p");
console.assert(p === null || p === void 0 ? void 0 : p.classList.contains("green"), 'There is no class name called green in p element');
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(function (dog) {
    console.group("".concat(dog.name));
    console.log("This is ".concat(dog.name, "."));
    console.log("".concat(dog.name, " is ").concat(dog.age, " years old."));
    console.groupEnd();
});
// counting
var a = "call me A";
var b = "call me B";
var abArray = [a, b];
for (var i = 0; i < 10; i++) {
    var coin = Math.round(Math.random());
    console.count("".concat(abArray[coin]));
}
// timing
var fetcingData = 'fedtcing data';
console.time(fetcingData);
fetch("https://api.github.com/users/wesbos")
    .then(function (data) { return data.json(); })
    .then(function (data) {
    console.timeEnd(fetcingData);
    console.table(data);
});
