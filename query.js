// app.js
const readline = require('readline');
const querystring = require('querystring');

// Function to handle query string input
function handleQueryString() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt the user to enter a query string
  rl.question('Enter a query string: ', (queryStringInput) => {
    // Parse the query string
    const parsedQuery = querystring.parse(queryStringInput);

    // Close the readline interface
    rl.close();

    // Display the parsed query
    console.log('\nParsed Query:');
    console.log(parsedQuery);
  });
}

// Run the application
handleQueryString();
