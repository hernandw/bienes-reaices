
const express = require('express');
const router = express.Router();
const { loginForm, registerForm,  forgotPassword } = require('../controller/userController');




router.get('/inicio', (req, res) => {
    res.json('Hello World desde Inicio!')
})

router.get('/nosotros', (req, res) => {
    res.send('Hello World desde Nosotros!')
})

router.post('/register', registerForm)

module.exports = router