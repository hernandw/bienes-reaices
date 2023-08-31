const pool = require("../conexion/conexion");
const loginForm = (req, res) => {};

const registerForm = async (req, res) => {
  const { name, email, password } = req.body;
  const consulta = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) returning *",
    [name, email, password]
  );
  res.json(consulta.rows[0]);
};

const getUsers = async (req, res) => {
  try {
    const consulta = await pool.query("SELECT * FROM users");
    res.json(consulta.rows);
  } catch (error) {
    console.log(error.message);
  }
}

const forgotPassword = (req, res) => {};

module.exports = {
  loginForm,
  registerForm,
getUsers,
  forgotPassword,
};
