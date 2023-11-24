// app.js
const fs = require('fs')
const express = require('express');
const app = express();

// Use JSON middleware for parsing request bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, this is the homepage!');
});


app.get('/about', (req, res) => {
    res.send('this is about page ')
})

// Route for contact page
app.get('/contact', (req, res) => {
    res.send('Contact us at contact@example.com');
});

// Route for handling 404 errors
app.use((req, res) => {
    res.status(404).send('404 - Page not found');
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});