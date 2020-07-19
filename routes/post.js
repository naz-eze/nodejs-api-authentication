const router = require('express').Router();
const requestVerification = require('../middleware/verifyToken');

router.get('/', requestVerification, (req, res) => {
    res.json({
        posts: {
            title: 'First post',
            description: 'Hello, this is a protected path!'
        }
    });
});

module.exports = router;