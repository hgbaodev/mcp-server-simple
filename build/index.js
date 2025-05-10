import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Create a simple server instance
const server = new McpServer({
    name: "build-mvp",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
// Create a simple tool
server.tool("hello", // Tool name
"Say hello to someone", // Tool description
{
    name: z.string().describe("Name of the person to greet"),
}, async ({ name }) => {
    // Processing when the tool is called
    return {
        content: [
            {
                type: "text",
                text: `Hello, ${name}!`,
            },
        ],
    };
});
server.tool("goodbye", // Tool name
"Say goodbye to someone", // Tool description
{
    name: z.string().describe("Name of the person to say goodbye to"),
}, async ({ name }) => {
    // Processing when the tool is called
    return {
        content: [
            {
                type: "text",
                text: `Goodbye, ${name}!`,
            },
        ],
    };
});
server.tool("saybye", // Tool name
"Alternative way to bid farewell to someone", // Tool description
{
    name: z.string().describe("Name of the person to bid farewell to"),
}, async ({ name }) => {
    // Processing when the tool is called
    return {
        content: [
            {
                type: "text",
                text: `Farewell, ${name}! See you next time.`,
            },
        ],
    };
});
// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Build MVP MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
