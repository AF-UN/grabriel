const fs = require('fs');

//more things will be added soon

const IPChecker = {
  toolName: "ipchecker",
  toolDescription: "Checks if the an ip is a private or public ip.",

  /**
   * Returns the name of the tool.
   * 
   * @returns toolName
   */
  getName() {
    return this.toolName
  },

  /**
   * Returns the description of the tool.
   * 
   * @returns toolDescription
   */
  getDescription() {
    return this.toolDescription
  },

  /**
   * Reads a files and runs the ip checker program.
   */
  Execute() {
    fs.readFile('./tools/ipstock.mjs', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  },
}

// Important to include in order for the 
// object to be called.
module.exports = {
  IPChecker
}