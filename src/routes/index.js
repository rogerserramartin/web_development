const router = require('express').Router();//
module.exports = router;

router.get('/', (req, res) => {
    res.send('Index'); //this says: return me Index word on root page
});

router.get('/about', (req, res) => {
    res.send('About'); //this says: return me About word on /about page
});

module.exports = router;