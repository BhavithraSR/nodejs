const json2csv = require('json2csv').parse;

// Example JSON data
const jsonData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Alice', age: 25, city: 'San Francisco' },
    { name: 'Bob', age: 35, city: 'Los Angeles' },
];

try {
    // Convert JSON to CSV
    const csvData = json2csv(jsonData);
    console.log(csvData);
} catch (error) {
    // Handle the error
    console.error('Error converting JSON to CSV:', error.message);
}