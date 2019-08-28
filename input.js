const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = () => {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
  });
};

module.exports = { setupInput };