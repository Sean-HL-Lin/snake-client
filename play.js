
const connect = require('./client')



/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {handleUserInput(data)})
  return stdin;
} 

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
}

setupInput()

console.log('Connecting ...');
connect();
