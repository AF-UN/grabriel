const si = require('systeminformation');

// promises style - new since version 3




  const AGENT = {
    toolName: "AGENT",
    toolDescription: "get detailed information about host machine",
  
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
      si.cpu()
  .then(data => console.log(data))
  .catch(error => console.error(error));

  
    }}
    
  
    module.exports = {
      AGENT
      }