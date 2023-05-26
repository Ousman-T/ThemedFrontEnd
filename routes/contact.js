// * Routing Logic

const express = require('express');
const router = express.Router();
const ReachoutCtrl = require('../controllers/api/contact');

// * POST
router.post('/contact/new', ReachoutCtrl.create);

router.get('/test', (req, res) => {
    res.send('Hello World!')
});

module.exports = router;