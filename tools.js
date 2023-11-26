/**
 * Define an interface-like structure for a tool.
 * This ensures that new tools added need to adhere to certain standards.
 * 
 * This ensures that new requirements to be in common for all tools 
 * apply to all tools and not just a certain set.
 */
const ToolInterface = {
    /**
     * Gets the name of the tool.
     */
    getName() {
        throw new Error("Method 'getName' must be implemented.")
    },

    /**
     * Gets the description of the tool. This allows users to view 
     * what a tool is used for.
     */
    getDescription() {
        throw new Error("Method 'getDescription' must be implemented.")
    },

    /**
     * Executes the tool and all the steps to execute the tool
     * is written in this method.
     */
    Execute() {
        throw new Error("Method 'Execute' must be implemented.")
    },
}
