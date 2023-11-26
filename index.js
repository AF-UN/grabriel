#!/usr/bin/env node

const inquirer = require("inquirer")
const ipChecker = require("./tools/ipchecker")

/**
 * Map that stores the relationship between the 
 * tool name and the object that executes the tool.
 * 
 * <string, object>
 */
const toolMap = new Map()

// Sets different tools and maps to the object.
// Will have to manually add new tools and map to the
// created objects.
toolMap.set("ipstock", ipChecker.IPChecker)
// ADD MORE TOOLS HERE

/**
 * Returns the tool object after passing the tool name.
 * This will change the tool that the user is using.
 * If the tool name doesn't exist, then an error is thrown.
 * 
 * @param {string} toolName name of the tool 
 * @returns Object, error
 */
function getToolObject(toolName) {
    if (toolMap.has(toolName)) {
        return [toolMap.get(toolName), null]
    }
    return ["", "invalid tool name"]
}

/**
 * Gets a tool name and executes the tool that was requested.
 * This automates the process to jumping between tools.
 * 
 * @param {string} toolName 
 */
const jumpToTool = async (toolName) => {
    const [toolObj, err] = getToolObject(toolName)

    if (err != null) {
        console.log(err)
        return
    }

    const myTool = Object.create(toolObj)

    // Ask the user if they would like to continue to use the tool.
    const continuePrompt = inquirer.createPromptModule()
    continuePrompt([{
        type: "confirm",
        name: "confirmation",
        message: "Do you wish to continue? \n This tool:\n " + toolObj.getDescription(),
        choices: Array.from(toolMap.keys())
    }]).then((answers) => {
        if (answers.confirmation) {
            myTool.Execute()
        } else {
            return
        }
    })
}

// Ask user to select the tool they would like to use
const prompt = inquirer.createPromptModule()
prompt([{
    type: "rawlist",
    name: "toolName",
    message: "Which tool would you like to use?",
    choices: Array.from(toolMap.keys())
}]).then((answers) => {
    const tool = answers.toolName
    jumpToTool(tool)
})