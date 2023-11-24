// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Sample data for demonstration
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// GET method - Retrieve all items
app.get('/items', (req, res) => {
  res.json(data);
});

// POST method - Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.json(newItem);
});

// PUT method - Update an item by ID
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  data = data.map(item => (item.id === itemId ? updatedItem : item));

  res.json(updatedItem);
});

// DELETE method - Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  data = data.filter(item => item.id !== itemId);

  res.json({ message: 'Item deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
