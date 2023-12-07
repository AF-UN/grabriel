var prompt = require('prompt-sync')()


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
        letters_low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r","s", "t", "u", "v", "w", "y", "z","1", "2", "3", "4", "5", "6","7", "7", "8", "9","!","@","#", "$"];

        var randomItem = letters_low[Math.floor(Math.random()*letters_low.length)];
        
        var n = prompt('Enter command : ');
        
        
        
        //console.log(letters_low.length);//
        // ask what command user wants to use //
        var result = []
        
        var n = 1
        //console.log(letters_low.length);//
        // ask what command user wants to use //
        
        if (n==1 || "one" ){ // type 1 or one //
            for (var n = 0; n < 6; n++) {
        
                  var rand = letters_low[Math.floor(Math.random()*16)];
                  result.push(rand);
                  
            }
        
        result = result.join("")
        console.log(result)
        
        }

        else{
        console.log("invalid command");
        }
        
     
       
    
  
    }}
    
  
    module.exports = {
    Wordgen
      }