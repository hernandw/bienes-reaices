
const express = require('express');
const router = express.Router();
const { agregarUser, obtenerUsers, verificador } = require('../controller/userController');



router.post('/register', agregarUser)

router.get('/users', obtenerUsers)

router.post('/login', verificador)

module.exports = router