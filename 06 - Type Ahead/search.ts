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

interface city {
   "city":string, 
   "growth_from_2000_to_2013": string, 
   "latitude": number, 
   "longitude": number, 
   "population": string, 
   "rank": string, 
   "state": string 
}

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities:city[] = [];
fetch(endpoint).then(response => response.json()).then((data: city[]) => {
    cities.push(...data);
}).then((r) => console.log(cities));

const searchInput = document.querySelector(".search") as HTMLInputElement;
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener("input", matches);

function matches(event){
    const typing = event.target as HTMLInputElement;
    const matchesArray = findMatches(typing.value, cities);
    const html = matchesArray.map((city) => {
        const reg = new RegExp(typing.value, 'gi');
        const cityName = city.city.replace(reg, `<span class="hl">${typing.value}</span>`)
        const stateName = city.state.replace(reg, `<span class="hl">${typing.value}</span>`)

        return `<li>
                 <span class="name">${cityName}, ${stateName}</span>
                 <span class="population">${addcomma(Number(city.population))}</span>
                </li>`;
    }).join("");

    suggestions!.innerHTML = html;

}

function findMatches(text: string, cities: city[]){
    return cities.filter((city) => {
        const reg = new RegExp(text, 'gi');

        return city.city.match(reg) || city.state.match(reg);
    })
}

function addcomma(x:number){
    return x.toLocaleString('en-US');
}
