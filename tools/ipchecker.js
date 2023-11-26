const ip = require('ip')
const inquirer = require("inquirer")

//more things will be added soon

const IPChecker = {
  toolName: "IPChecker",
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
    const ipPrompt = inquirer.createPromptModule()
    ipPrompt([{
      type: "input",
      name: "ipAddr",
      message: "Enter IP Address:"
    }]).then((answers) => {
      const resp = check_ip_private(answers.ipAddr)
      console.log(resp)
    })
  },
}

function check_ip_private(ipAddr) {
  const isCorrectFormat = ip.isV4Format(ipAddr)

  if (!isCorrectFormat) {
    return "This is not an ip address at all"
  }

  var i = ip.isPrivate(ipAddr)
  if (i === true) {
    return "This is a private ip address"
  } else {
    return "This is a public ip address"
  }
}

// Important to include in order for the 
// object to be called.
module.exports = {
  IPChecker
}