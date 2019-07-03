
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const {MOVE_UP_KEY} = require('./constants')
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (MOVE_UP_KEY[key]) {
    connection.write(MOVE_UP_KEY[key])
  }
}

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {handleUserInput(data)})
  return stdin;
} 

module.exports = {setupInput};