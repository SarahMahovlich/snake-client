const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

let connection;
const { connect } = require('./client');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = () => {
  stdin.on('data', (key) => {
    console.log(key);
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!");
      process.exit();
    } else if (key === '\u001b[A') {
      connection.write("Move: up");
    } else if (key === '\u001b[D') {
      connection.write("Move: left");
    } else if (key === "\u001b[B") {
      connection.write("Move: down");
    } else if (key === '\u001b[C') {
      connection.write("Move: right");
    }
  });
};

module.exports = { setupInput };