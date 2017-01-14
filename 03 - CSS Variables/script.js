const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const baseInput = document.getElementById('base');
const imageElement = document.querySelector('img');

function spacingValueChanged() {
  imageElement.style.border= `${spacing.value}px`;
}

function blurValueChanged() {
  imageElement.style.filter = `blur(${blurInput.value}px)`;
}

function baseColorChanged() {
  imageElement.style.filter = `blur(${blurInput.value}px)`;
}

spacingInput.addEventListener('input', spacingValueChanged);
blurInput.addEventListener('input', blurValueChanged);
baseInput.addEventListener('input', baseColorChanged);
