const fs = require('fs');

// Write function
fs.writeFile('test.txt', 'Hello, World!', (err) => {
 if (err) throw err;
 console.log('The file has been saved.');
});

// Read function
fs.readFile('test.txt', 'utf8', (err, data) => {
 if (err) throw err;
 console.log('Content:', data);
});
// Open function
fs.open('test.txt', 'w', (err, fileDescriptor) => {
    if (err) {
        throw err;
    }
    console.log('File opened successfully with descriptor:', fileDescriptor);
});

// Append function
fs.appendFile('test.txt', '\nAppended Text!', (err) => {
 if (err) throw err;
 console.log('The text has been appended.');
});

// Close function
fs.close(1, (err) => {
 if (err) throw err;
 console.log('File descriptor 1 was closed.');
});