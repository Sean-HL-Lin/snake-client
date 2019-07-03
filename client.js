const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(data)
  })

  conn.on('connect', () => {
    console.log('You are connected')
    conn.write("Name: HSL")
  })

  return conn;
}

module.exports = connect;