/**
 *  Requirement:
 *     sort the strings to a to z by inital without articles 
 *     and display in page
 *  Solution:
 *      using regular expresion and sort method 
 *      case insensitive
 *      create an array contains li elements which contain the text of bands
 */
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const newBands = [...bands];

function compareFun(a: string, b: string):number{
  const pattern = /^(?:The|A|An)\s(.+)/i;

  const subA = a.replace(pattern, '$1').trim();
  const subB = b.replace(pattern, '$1').trim();
  //console.log(subA);
  return subA.localeCompare(subB, 'en', {sensitivity: "base"});
}
//console.log(bands);
newBands.sort(compareFun);
//console.log(newBands);
const ul = document.getElementById("bands") as HTMLUListElement;

const html = newBands.map((item) => {
    return `<li>${item}</li>`;
}).join("");

ul.innerHTML = html;
