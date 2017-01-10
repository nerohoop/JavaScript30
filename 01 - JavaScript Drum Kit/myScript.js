function playSound(event) {
  // querySelector() : get the first element in the document with class = 'example'
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Window is the main JavaScript object root, aka the global object in a browser
// also can be treated as the root of the document object model.
// window.screen is a small information object about physical screen dimensions
// window.document or just document is the main object of the visible document object
// addEventListener method attaches an event handler to the specific element.
window.addEventListener('keydown', playSound);
