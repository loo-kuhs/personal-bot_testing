const process = require("process");
const rdl = require("readline");

const std = process.stdout;

class Spinner {
  spin() {
    // Remove the cursor so we can see the effect
    process.stdout.write("\x1B[?25l");

    // Array of line types that will make up the spin effect
    const frames = ["-", "\\", "|", "/"];

    // Current index of the current frame
    let index = 0;

    setInterval(() => {
      // Select the line type
      let line = frames[index];

      // If the line is undefined, set the lines to position 0
      if (line === undefined) {
        index = 0;
        line = frames[index];
      }

      // Write the line to terminal
      std.write(line);

      // Sets the cursor ro (x, y) (0, 0) because that is the cell position we are operating
      rdl.cursorTo(std, 0, 0);

      // Adjust the index
      index = index >= frames.length ? 0 : index + 1;
    }, 100);
  }
}

module.exports = new Spinner().spin();