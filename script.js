// Import the built-in 'fs' (file system) module
const fs = require('node:fs');

// Use fs.readFile() to read the content of your text file
fs.readFile('./Punjab.txt', 'UTF-8', (err, data) => {
    // Handle errors (if any)
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Output the contents of the text file
    console.log("Contents of the text file:\n", data);
});
