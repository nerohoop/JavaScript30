const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];

var request = new XMLHttpRequest();
request.open('GET', endpoint);
request.responseType = 'json';
request.send();
request.onload = function() {
  cities = request.response;
};

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
