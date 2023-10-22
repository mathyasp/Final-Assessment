// Reference the inputs
const widthInput = document.querySelector('#width-input');
const heightInput = document.querySelector('#height-input');
const colorInput = document.querySelector('#color-input');
const widthValue = document.querySelector('#width-value');
const heightValue = document.querySelector('#height-value');
const colorValue = document.querySelector('#color-value');
const box = document.querySelector('#box');

// Add event listeners and display values and update the styling
// Width
widthInput.addEventListener('input', e => {
    const width = widthInput.value + 'px';
    widthValue.innerHTML = width;
    box.style.width = width;
}); 
// Height
heightInput.addEventListener('input', e => {
    const height = heightInput.value + 'px';
    heightValue.innerHTML = height;
    box.style.height = height;
}); 
// Color
colorInput.addEventListener('input', e => {
    const color = colorInput.value;
    colorValue.innerHTML = color;
    box.style.backgroundColor = color;
}); 
