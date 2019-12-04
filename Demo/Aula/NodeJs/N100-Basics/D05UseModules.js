// Require the given module 
var fs = require('fs'); 

const filename= 't8.shakespeare.txt';

/** (1) read data synchronously. When data tranfer (file to memory) is completed variable has a value */
var data = fs.readFileSync(filename, 'utf-8'); 
console.log('data: ', data);

/** (2) read asynch. When data tranfer (file to memory) is completed function is called */
fs.readFile(filename, 'utf-8', (err, data) => {
  if(err) { throw err; }
  console.log('data: ', data);
});
