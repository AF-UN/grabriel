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
          var numWords = parseInt(prompt('Enter the number of words to generate: '));
          var numCharacters = parseInt(prompt('Enter the number of characters per word: '));
      
          if (isNaN(numWords) || isNaN(numCharacters) || numWords <= 0 || numCharacters <= 0) {
              console.log("Invalid input. Please enter positive integers for the number of words and characters.");
          } else {
              for (var i = 0; i < numWords; i++) {
                  var result = [];
                  for (var p = 0; p < numCharacters; p++) {
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
          }
      }
      
      }
        

}
  
    module.exports = {
    Wordgen
      };