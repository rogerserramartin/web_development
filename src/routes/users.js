const router = require('express').Router();//

router.get('/users/signin', (req, res) => {
    res.send('Signing in!');
});

router.get('/users/signup', (req, res) => {
    res.send('User form authentication!');
})
module.exports = router;