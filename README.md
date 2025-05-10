# Build MVP with hgbaodev

A simple Model Context Protocol server built with Node.js

## Introduction

This MCP Server is a Node.js application using the Model Context Protocol to provide weather information and simple interactions through an API.

## Available Tools

- **hello**: Greets the user
- **goodbye**: Says goodbye to the user
- **saybye**: Alternative way to bid farewell to the user

## Processing Flow

When a user interacts with the MCP server, the processing flow is as follows:

1. **Request Analysis**: The AI model analyzes the user's input text
2. **Tool Identification**: The system identifies the appropriate tool to handle the request
3. **Parameter Extraction**: Necessary parameters are extracted from the user's input
4. **MCP Tool Invocation**: The request is sent to the MCP server with the corresponding parameters
5. **Request Processing**: The server processes the request and generates a response
6. **Result Return**: The result is sent back to the user

### Example

<!-- example one -->

- Input: "Hello, my name is John"
- Selected tool: `hello`
- Extracted parameter: `name = "John"`
- Response: "Hello, John!"
