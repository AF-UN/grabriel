const fs = require('fs');
const inquirer = require("inquirer");
const wifiPassword = require('wifi-password');

//more things will be added soon

const Pass = {
  toolName: "wifi-password",
  toolDescription: "Get the target wifi password on a file",

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
    wifiPassword().then(password => {
      console.log(password);
      fs.writeFile('wifipass.txt', password, (err) => { 
             
        if (err) throw err; 
    }) 
     
    });

  }}
  

  module.exports = {
    Pass
    }