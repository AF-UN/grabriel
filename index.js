#!/usr/bin/env node

const inquirer = require("inquirer")
const ipChecker = require("./tools/ipchecker.js");
const cred = require("./tools/cred.js");
const showBanner = require('node-banner');
const pass = require('./tools/pass.js');
const agent = require('./tools/agent.js');
const wordgen = require("./tools/wordgen.js");
const help = require("./tools/help.js");
/**
 * Map that stores the relationship between the 
 * tool name and the object that executes the tool.
 * test
 * <string, object>
 */
const toolMap = new Map()

// Sets different tools and maps to the object.
// Will have to manually add new tools and map to the
// created objects.
toolMap.set("ipstock", ipChecker.IPChecker);
toolMap.set("wifi-pass",  pass.Pass );
// ADD MORE TOOLS HERE


toolMap.set("word-gen",wordgen.Wordgen);
toolMap.set("agent", agent.AGENT)
toolMap.set("help",help.HELP);
toolMap.set("cred", cred.Credit)
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

const banner = async () => {
    await showBanner('GRABRIEL', ' A tool used to grab information', "blue", "green");

    console.log("\n\n")

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
};

banner();