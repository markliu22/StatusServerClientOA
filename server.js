const express = require('express');
const app = express();

let startTime = Date.now();
const randomDelay = Math.random() * 10000 + 5000;

app.get('/status', (req, res) => {
    const currentTime = Date.now();
    const timePassed = currentTime - startTime;

    if (timePassed >= randomDelay) {
        const result = Math.random() < 0.9 ? 'completed' : 'error';
        res.json({ result });
    } else {
        res.json({ result: 'pending' });
    }
});

module.exports = app; 
