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
import dotenv from "dotenv"
import {Ollama} from 'ollama';
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const ollama = new Ollama({ url: 'http://127.0.0.1:11434' });

// Serve static files from the 'dist' directory
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.post('/schedule-builder', async (req, res) => {
    const { scheduleItems } = req.body;
    
    const prompt = `Rearrange these activities in the most ideal order with start time for current single day without overlap: ${scheduleItems} in the following format: {activity_order: [{activity_name: 'name of activity', time: 'start time of the day when it would be ideal for this activity to be done', reason: 'reason why this should be done at this order'}], additional_info: 'additional details on why the activities were rearranged a certain way'}. The final order should be in ascending order of first activity till the final activity in the day.`;

    try {
      const response = await ollama.chat({
        model: 'llama2',
        messages: [{ role: 'user', content: prompt }],
      });
      res.json({ response: response.message.content });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Handle all other routes and return the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});