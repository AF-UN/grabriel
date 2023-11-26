const inquirer = require("inquirer");

//more things will be added soon

const Credit = {
  toolName: "credit",
  toolDescription: "see who made this prgram",

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
    console.log("https://github.com/seandadonntech")
    console.log("https://github.com/benjamincollins1")

  }}
  module.exports = {
  Credit
  }