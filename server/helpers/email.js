const nodemailer = require('nodemailer');
require('dotenv').config();



const emailRegistro = async(datos) => {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  const { email, name, tok } = datos;

  //envia email de confirmacion
  await transport.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Confirmación de cuenta',
    html: `
<p>Hola ${name}, comprueba tu cuenta y disfruta de nuestros servicios</p>
<p>Tu cuenta ya está creada, solo debes confirmarla en el siguiente enlace:</p>
<a href='${process.env.FRONTEND_URL}:${process.env.PORT ?? 3000}/confirmar/${tok}'>Confirmar Cuenta</a>


`})
}

module.exports = {
    emailRegistro
}