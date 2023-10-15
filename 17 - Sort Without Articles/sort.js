var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 *  Requirement:
 *     sort the strings to a to z by inital without articles
 *     and display in page
 *  Solution:
 *      using regular expresion and sort method
 *      case insensitive
 *      create an array contains li elements which contain the text of bands
 */
var bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
var newBands = __spreadArray([], bands, true);
function compareFun(a, b) {
    var pattern = /^(?:The|A|An)\s(.+)/i;
    var subA = a.replace(pattern, '$1').trim();
    var subB = b.replace(pattern, '$1').trim();
    //console.log(subA);
    return subA.localeCompare(subB, 'en', { sensitivity: "base" });
}
//console.log(bands);
newBands.sort(compareFun);
//console.log(newBands);
var ul = document.getElementById("bands");
var html = newBands.map(function (item) {
    return "<li>".concat(item, "</li>");
}).join("");
ul.innerHTML = html;
