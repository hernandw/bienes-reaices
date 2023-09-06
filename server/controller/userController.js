const {
  addUser,
  getUsers,
  verificarCredenciales,
  consultarToken,
  updateConfirm,
} = require("../consultas/queries");
const jwt = require("jsonwebtoken");
const { generarId } = require("../helpers/tokens");
require("dotenv").config();

const { emailRegistro } = require("../helpers/email");

const agregarUser = async (req, res) => {
  const { name, email, password, token } = req.body;
  const tok = generarId();

  //envia email de confirmacion
  emailRegistro({ email, name, tok });
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

const confirmar = async (req, res) => {
  const { token } = req.params;
  //verificar token
  const tokenValido = await consultarToken(token);

  if (tokenValido > 0) {
    await updateConfirm(token);
    res.redirect("http://localhost:5173/confirmado");
  } else {
     res.redirect("http://localhost:5173/errorToken");
  }
};



module.exports = {
  agregarUser,
  obtenerUsers,
  confirmar,
  verificador,
  
};
