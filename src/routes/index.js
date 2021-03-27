const router = require('express').Router();//
module.exports = router;

router.get('/', (req, res) => {
    res.render('index'); //index.hbs extension not required
});

router.get('/about', (req, res) => {
    res.render('about'); 
});

module.exports = router;