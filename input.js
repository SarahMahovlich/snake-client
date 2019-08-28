const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

let connection;
const { connect } = require('./client');
const { exit, up, left, down, right } = require('./constants');

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
    if (key === exit) {
      console.log("Thanks for using me, ciao!");
      process.exit();
    } else if (key === up) {
      connection.write("Move: up");
    } else if (key === left) {
      connection.write("Move: left");
    } else if (key === down) {
      connection.write("Move: down");
    } else if (key === right) {
      connection.write("Move: right");
    } else if (key === "s") {
      connection.write("Say: snakeeee");
    }
  });
};

module.exports = { setupInput };