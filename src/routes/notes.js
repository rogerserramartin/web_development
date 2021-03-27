const { text } = require('express');

const router = require('express').Router();//
module.exports = router;

const Note = require('../models/Note');

router.get('/notes/add', (req, res) =>{
    res.render('notes/new-note') //not needed .hbs extension
});

router.post('/notes/new-note', async (req, res) =>{
    const {title, description} = req.body;
    const errors = [];
    if(!title){
        errors.push({text: "Please insert a Title!"});
    }
    if(!description){
        errors.push({text: "Please insert a Description!"});
    }
    if(errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
    //res.send('Okey Makey!'); //I forgot the else before, that's why it didn't render the errors
    const newNote = new Note({title, description});
    //console.log(newNote);
    await newNote.save();   
    res.redirect('/notes');
    }
});

router.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', {notes});
});

module.exports = router;