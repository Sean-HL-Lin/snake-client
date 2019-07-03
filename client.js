/**
 * Establishes connection with the game server
 */
const {IP, PORT, NAME} = require('./constants')

const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(data)
  })

  conn.on('connect', () => {
    console.log('You are connected');
    conn.write(NAME);
    // setInterval(() => {conn.write("Move: up")}, 500)
  })

  return conn;
}

module.exports = {connect};