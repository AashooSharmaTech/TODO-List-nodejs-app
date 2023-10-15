const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; // You can set the port as needed

// Serve all files from the root directory
app.use(express.static(path.join(__dirname, '/')));

// Define a route to handle the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
