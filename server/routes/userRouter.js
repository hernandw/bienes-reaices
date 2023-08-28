
const express = require('express');
const router = express.Router();


router.get('/inicio', (req, res) => {
    res.send('Hello World desde Inicio!')
})

router.get('/nosotros', (req, res) => {
    res.send('Hello World desde Nosotros!')
})

module.exports = router