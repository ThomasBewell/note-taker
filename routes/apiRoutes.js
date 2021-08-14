const express = require('express');
const apiRoutes = express.Router();
const fs = require('fs');

apiRoutes.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, file) => {
        if (error) throw error;

        const parsedFile = JSON.parse(file);
        return res.send(parsedFile);
    });
});

apiRoutes.post('/api/notes', (req, res) => {
    //set up new note for JSON
    const note = req.body;
    note['id'] = Date.now();
    note['title'] = req.body.title;
    note['text'] = req.body.text;

    //convert string into object and push
    fs.readFile('./db/db.json', 'utf8', (error, file) => {
        if (error) throw error;

        const parsedFile = JSON.parse(file);
        parsedFile.push(note);

        //stringify new file and rewrite
        const newFile = JSON.stringify(parsedFile);

        fs.writeFile('./db/db.json', newFile, 'utf8', (err) => {
            if (err) throw err;
            console.log('New note added!');
        });
        return res.send(JSON.parse(newFile));
    });
});

module.exports = apiRoutes;