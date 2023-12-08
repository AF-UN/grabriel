const HELP = {
    toolName: "help",
    toolDescription: "list of commands to execute",
  
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
  
    Execute() {
        console.log("Welcome to the help program!");
        console.log("This program is the list for commands you can use to operate grabriel");
        console.log("=========================================================");
        console.log("1) IP stock  Enter target ip address It will either public or private IP address");
        
            
     
      }}

  module.exports = {
    HELP
    }





