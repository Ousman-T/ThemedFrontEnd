// * Routing Logic

const express = require('express');
const router = express.Router();
const ReachoutCtrl = require('../controllers/api/contact');

// * POST
router.post('/contact', ReachoutCtrl.create);
router.get('/', (req, res) => {
    res.send('Hello World!')
});