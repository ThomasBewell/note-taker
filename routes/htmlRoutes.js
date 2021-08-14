const path = require('path');
const express = require('express');
const htmlRoutes = express.Router();

htmlRoutes.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

htmlRoutes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

htmlRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

htmlRoutes.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = htmlRoutes;