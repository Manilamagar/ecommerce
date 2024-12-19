const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'));
app.get('/services', (req, res) => res.sendFile(__dirname + '/views/services.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/views/contact.html'));
app.get('/login', (req, res) => res.sendFile(__dirname + '/views/login.html'));

// Start Server
app.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT});
});