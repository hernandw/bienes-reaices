const pool = require('../conexion/conexion')
const loginForm = (req, res) => {
    
}

const registerForm = async(req, res) => {
   const { name, email, password } = req.body
   const { rows }=  await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password])
    console.log(rows)
}

const forgotPassword = (req, res) => {
    
}





module.exports = {
    loginForm,
    registerForm,
   
    forgotPassword,
    
}