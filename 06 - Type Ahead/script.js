const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// Using XMLHttpRequest
// var cities = [];
// var request = new XMLHttpRequest();
// request.open('GET', endpoint);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//   cities = request.response;
// };

// Using Fetch
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

// Find matches in the array
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

// Display matches
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl"${this.value}></span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

function updateSuggestionList() {
  var suggestionList = document.querySelector('.suggestions');
  suggestionList.innerHTML = '';

  cities.forEach(function(cityInfo) {
    var listItem = document.createElement('li');
    var name = cityInfo.city + ', ' + cityInfo.state;
    var filter = textField.value;

    if (name.toLowerCase().match(filter.toLowerCase())) {
      listItem.appendChild(document.createTextNode(name));
      suggestionList.appendChild(listItem);
    }
  });
}

const textField = document.querySelector('.search');

textField.addEventListener('change', didChangeText);
textField.addEventListener('keyup', didChangeText);

function didChangeText() {
  updateSuggestionList();
}
