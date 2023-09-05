const {
  addUser,
  getUsers,
  verificarCredenciales,
} = require("../consultas/queries");
const jwt = require("jsonwebtoken");
const { generarId } = require("../helpers/tokens");
require("dotenv").config();

const agregarUser = async (req, res) => {
  const { name, email, password, token } = req.body;
  const tok = generarId()
  const consulta = await addUser(name, email, password, tok);
  res.json(consulta);
};

const obtenerUsers = async (req, res) => {
  const consulta = await getUsers();
  res.json(consulta);
};

const verificador = async (req, res) => {
  try {
    const { email, password } = req.body;
    await verificarCredenciales(email, password);

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.send(token);
  } catch (error) {
    res.status(error.code || 500).send(error.message);
  }
};

module.exports = {
  agregarUser,
  obtenerUsers,
  verificador,
};
