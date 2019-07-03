
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w'){connection.write("Move: up")}
  if (key === 'a'){connection.write("Move: left")}
  if (key === 's'){connection.write("Move: down")}
  if (key === 'd'){connection.write("Move: right")}
  if (key === 'k'){connection.write("Say: KILL YOU!")}
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