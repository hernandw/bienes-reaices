const pool = require("../conexion/conexion");
const bcrypt = require("bcryptjs");

const addUser = async (name, email, password, token) => {
  const passwordEncriptada = await bcrypt.hash(password, 10);
  password = passwordEncriptada;
  const consulta = await pool.query(
    "INSERT INTO users (name, email, password, token) VALUES ($1, $2, $3, $4) returning *",
    [name, email, passwordEncriptada, token]
  );
  return consulta.rows[0];
};

const getUsers = async () => {
  const consulta = await pool.query("SELECT * FROM users");
  return consulta.rows;
};

const verificarCredenciales = async (email, password) => {
  const values = [email];
  const consulta = "Select * from users where email = $1";
  const {
    rows: [usuario],
    rowCount,
  } = await pool.query(consulta, values);
  const { password: passwordEncriptada } = usuario;
  const passwordValida = await bcrypt.compare(password, passwordEncriptada);

  if (!rowCount || !passwordValida)
    throw {
      code: 401,
      message: "Email o contraseña incorrecta",
    };
};

const consultarToken = async (token) => {
  const { rowCount } = await pool.query(
    "SELECT * FROM users WHERE token = $1",
    [token]
  );

  return rowCount;
};

const updateConfirm = async (token) => {
  await pool.query("UPDATE users SET confirmado = true, token = NULL WHERE token = $1", [
    token,
  ]);
};

module.exports = {
  addUser,
  getUsers,
  verificarCredenciales,
  consultarToken,
  updateConfirm,
};
