const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];

var request = new XMLHttpRequest();
request.open('GET', endpoint);
request.responseType = 'json';
request.send();
request.onload = function() {
  cities = request.response;
  populateTable();
}

function populateTable() {

}

const textField = document.querySelector('.search');

textField.addEventListener('change', didChangeText);
textField.addEventListener('keyup', didChangeText);

function didChangeText(event) {

}
