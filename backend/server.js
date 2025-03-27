// // backend/server.js
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/api/data', (req, res) => {
//   res.json({ message: 'Hello from the backend!' });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
    // backend/server.js
// const express = require('express');
// const path = require('path'); // Import the path module
// const app = express();
// const port = 3000;
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;

// Serve static files from the 'dist' directory
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Handle all other routes and return the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});