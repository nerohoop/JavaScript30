// The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  const secDegrees = ((seconds / 60) * 360) + 90;
  const minDegrees = ((minutes / 60) * 360) + 90;
  const hourDegrees = ((hours / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secDegrees}deg)`;
  minsHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
//The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
//Tip: 1000 ms = 1 second.
setInterval(setDate, 1000);

setDate();
