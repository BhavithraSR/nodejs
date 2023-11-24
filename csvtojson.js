const csvtojson = require('csvtojson');

// Convert CSV to JSON
csvtojson()
    .fromFile('data.csv') // Replace 'data.csv' with the path to your CSV file
    .then((jsonData) => {
        console.log(JSON.stringify(jsonData, null, 2));
    })
    .catch((error) => {
        console.error('Error converting CSV to JSON:', error.message);
    });