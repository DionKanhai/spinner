process.stdout.write('hello from spinner1.js... \rheyyy\n');

// Animated the \ character to do a spin using the setTimeout method
setTimeout(() => {
  process.stdout.write('\r|   ');
},100);

setTimeout(() => {
  process.stdout.write('\r/   ');
},300);

setTimeout(() => {
  process.stdout.write('\r-   ');
},500); 

setTimeout(() => {
  process.stdout.write('\r\\   ');
},700);

setTimeout(() => {
  process.stdout.write('\r|   ');
},900);