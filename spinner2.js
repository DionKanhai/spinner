// animates the character in the array with the setTimeout method

//created an array with characters to animate
const someTimer =  ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let timer = 0;

// loop through the array 
for (const letter of someTimer) {
  setTimeout(() => {
    // \r replaces the letters in the loop on the same line after the delayed time
    process.stdout.write(`\r${letter}   `);
  },timer);
  timer = timer + 200;
}
