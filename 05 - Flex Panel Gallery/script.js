const panels = document.querySelectorAll('.panel');

function toggleOpen(e) {
  // When only one argument is present: Toggle class value;
  // if class exists then remove it and return false
  // if not, then add it and return true.
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
