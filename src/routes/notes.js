const { text } = require('express');

const router = require('express').Router();//
module.exports = router;

router.get('/notes/add', (req, res) =>{
    res.render('notes/new-note') //not needed .hbs extension
});

router.post('/notes/new-note', (req, res) =>{
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
    res.send('Okey Makey!'); //I forgot the else before, that's why it didn't render the errors
    }
});

router.get('/notes', (req, res) => {
    res.send('Notes from database!');
});

module.exports = router;