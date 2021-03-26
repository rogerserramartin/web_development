const router = require('express').Router();//
module.exports = router;

router.get('/notes', (req, res) => {
    res.send('Notes from database!');
});

module.exports = router;