/**
 * Requirement:
 *    type something in input, then display the corresponding item below with the high light text you typing.
 *
 * Solution:
 * fetch the data, store in an array in which each item with keys of name and population. the name key contains the value of the city and state name.
 *  then compare the value of input and the city and state name
 *  if match, display the item in the class of suggestions and highlight the text.
 *
 */
var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var cities = [];
fetch(endpoint).then(function (response) { return response.json(); }).then(function (data) {
    cities.push.apply(cities, data);
}).then(function (r) { return console.log(cities); });
var searchInput = document.querySelector(".search");
var suggestions = document.querySelector('.suggestions');
searchInput.addEventListener("input", matches);
function matches(event) {
    var typing = event.target;
    var matchesArray = findMatches(typing.value, cities);
    var html = matchesArray.map(function (city) {
        var reg = new RegExp(typing.value, 'gi');
        var cityName = city.city.replace(reg, "<span class=\"hl\">".concat(typing.value, "</span>"));
        var stateName = city.state.replace(reg, "<span class=\"hl\">".concat(typing.value, "</span>"));
        return "<li>\n                 <span class=\"name\">".concat(cityName, ", ").concat(stateName, "</span>\n                 <span class=\"population\">").concat(addcomma(Number(city.population)), "</span>\n                </li>");
    }).join("");
    suggestions.innerHTML = html;
}
function findMatches(text, cities) {
    return cities.filter(function (city) {
        var reg = new RegExp(text, 'gi');
        return city.city.match(reg) || city.state.match(reg);
    });
}
function addcomma(x) {
    return x.toLocaleString('en-US');
}
