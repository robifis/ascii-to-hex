/* eslint-disable no-restricted-globals */
// TODO
// 1) Create ASCII to HEX Output
// 2) Create Int to HEX Output
// 3) Validate Inputs!
// 4) Add Animations

// Insert Data into DOM
function insertData(data) {
  // Get output data from DOM
  const output = document.querySelector('.output');
  const hexCode = document.querySelector('.hexCode');
  // Show hidden Class and insert hex code into DOM
  output.style.display = 'block';
  hexCode.innerText = `#${data}`;
}

// Get the input data
function convertHex() {
  const inputValue = document.querySelector('.input').value;
  // Check if input is integer or Text
  if (isNaN(inputValue)) {
    // run function if it's Text
    const textArray = [];
    Array.from(inputValue).forEach(letter => {
      const hex = letter.charCodeAt().toString(16);
      textArray.push(hex);
    });
    const hexText = textArray.join('');
    insertData(hexText);
    // If input is number run 'else'
  } else {
    const hexNr = parseInt(inputValue, 10).toString(16);
    insertData(hexNr);
  }
}

// Run function by pressing enter
const input = document.querySelector('.input');

input.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    convertHex();
  }
});
