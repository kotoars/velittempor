// Assuming you're defining a JavaScript function
// NewStdLogger creates a new logger with a specified writer.
function NewStdLogger(writer) {
    // Initialize your logger here using 'writer'
    // For example, if 'writer' is a function that logs to console:
    const logger = {
        log: (message) => writer(message),
        error: (message) => writer(`ERROR: ${message}`),
        // Add more methods as needed, e.g., info, warn, etc.
    };

    return logger;
}

// Usage example:
function writeToConsole(message) {
    console.log(message);
}

const logger = NewStdLogger(writeToConsole);
logger.log("Logging a message");  // Logs: "Logging a message"
logger.error("Oops! Something went wrong");  // Logs: "ERROR: Oops! Something went wrong"
