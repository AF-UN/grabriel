var prompt = require('prompt-sync')()
var fs = require('fs');


const Wordgen = {
    toolName: "wordgen",
    toolDescription: "A simple word list generator (still being developed)",
  
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
      var fs = require('fs');
      var prompt = require('prompt-sync')();
      
      var letters_low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];
      var letters_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"];
      var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var symbols = ["!","@","#","$","%","^","&","*","*"];
      
      // Concatenate all arrays
      var all_characters = letters_low.concat(letters_uppercase, numbers, symbols);
      
      while (true) {
          var n = prompt('Enter command: ');
      
          if (n == 1 || n.toLowerCase() === "one") {
              for (var i = 0; i < 6; i++) {
                  var result = [];
                  for (var p = 0; p < 6; p++) {
                      var rand = all_characters[Math.floor(Math.random() * all_characters.length)];
                      result.push(rand);
                  }
      
                  result = result.join("");
                  console.log(result);
                  fs.appendFile('wordlist.txt', result  + '\n', function (err) {
                      if (err) throw err;
                      console.log('Saved!');
                  });
              }
              break; // Exit the loop after successful execution
          } else {
              console.log("Invalid command. Please enter a valid command.");
          }
      }
        

    }};
  
    module.exports = {
    Wordgen
      };