
const express = require('express');
const router = express.Router();
const { agregarUser, obtenerUsers, verificador, confirmar, } = require('../controller/userController');



router.post('/register', agregarUser)

router.get('/users', obtenerUsers)

router.post('/login', verificador)

router.get('/confirmar/:token', confirmar)



module.exports = router