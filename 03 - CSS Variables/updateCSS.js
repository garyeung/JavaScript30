/**
 * Requirement:
 *  update the css variables: spacing, blur and base-color with js
 *
 * Solution:
 *  get the corresponding input value
 *  then apply to the css variables
 *  add the variables to img css style
 *  keep running these event.
 */
var spacingVar = '--spacing';
var blurVar = '--blur';
var baseVar = '--base';
var spacingInput = document.getElementById("spacing");
var blurInput = document.getElementById("blur");
var baseColorInput = document.getElementById("base");
//get the inital value
document.documentElement.style.setProperty(spacingVar, spacingInput.value + 'px');
document.documentElement.style.setProperty(blurVar, blurInput.value + "px");
document.documentElement.style.setProperty(baseVar, baseColorInput.value);
spacingInput.addEventListener("input", function (event) {
    var target = event.target;
    document.documentElement.style.setProperty(spacingVar, target.value + 'px');
});
blurInput.addEventListener("input", function (event) {
    var target = event.target;
    document.documentElement.style.setProperty(blurVar, target.value + "px");
});
baseColorInput.addEventListener("input", function (event) {
    var target = event.target;
    document.documentElement.style.setProperty(baseVar, target.value);
});
var imgs = document.getElementsByTagName("img");
var img = imgs[0];
img.style.setProperty("padding", "var(".concat(spacingVar, ")"));
img.style.setProperty("background-color", "var(".concat(baseVar, ")"));
img.style.setProperty("filter", "blur(var(".concat(blurVar, "))"));
