import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampoInput from "../components/campo/CampoInput";
const Register = () => {
  
  const [name, setName] = useState({campo: "", valido: true});
  const [email, setEmail] = useState({ campo: "", valido: true });
  const [password, setPassword] = useState({ campo: "", valido: true });
  const [password2, setPassword2] = useState({ campo: "", valido: true });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const urlBase = "http://localhost:3000";

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,18}$/, // 6 a 18 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPassword2 = () => {
    if(password.campo.length > 0) {
      if(password.campo === password2.campo) {
        setPassword2({ ...password2, valido: true });
      } else {
        setPassword2({ ...password2, valido: false });
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name.campo === "" || email.campo === "" || password.campo === "" || password.campo === "" || password2.campo === "") {
        setMessage("Todos los campos son obligatorios");
        setError(true);
        return;
      }
     
      
      await fetch(`${urlBase}/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name : name.campo,
          email: email.campo,
          password: password.campo
        }),
      });
      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (err) {
      console.error(err.message);
      setMessage(err.message);
      setError(true);
    }
    setError(false);
  };
  return (
    <div>
      <h1 className="my-10 text-2xl font-extrabold text-center">
        Bienes <span className="font-normal">Raices</span>
      </h1>
      <h2 className="text-2xl font-extrabold text-center">Crea tu cuenta</h2>
      <div className="max-w-md mx-auto mt-8">
        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit} className="">
            <div>
              {error && (
                <p className="p-4 mb-4 font-bold text-center text-white uppercase bg-red-600 rounded-md">
                  {message}
                </p>
              )}
            </div>
            
            <CampoInput
              label="Tu Nombre"
              placeholder="Ej. José Pérez"
              type="text"
              name="name"
              leyenda="El nombre tiene que ser de 3 a 16 dígitos y solo puede contener números, letras o guion bajo."
              expresionReg={expresiones.nombre}
              estado={name}
              setEstado={setName}
              
            />
            <CampoInput
              label="Tu Email"
              placeholder="Ej. joseperez@gmail.com"
              type="email"
              name="email"
              leyenda="El correo solo puede contener letras, números, puntos, guiones o guion bajo."
              expresionReg={expresiones.correo}
              estado={email}
              setEstado={setEmail}
              style="w-100 px-2 pr-7 py-2 placeholder-gray-400 border border-gray-300 rounded-md"
            />
            <CampoInput
              label="Tu Contraseña"
              placeholder="******"
              type="password"
              name="password"
              leyenda="La contraseña tiene que ser de minimo 6 caracteres"
              expresionReg={expresiones.password}
              estado={password}
              setEstado={setPassword}
              style="w-full px-3 py-2 pr-7 placeholder-gray-400 border border-gray-300 rounded-md"
            />
            <CampoInput
              label="Repite Contraseña"
              placeholder="******"
              type="password"
              name="password2"
              leyenda="Ambas contraseñas deben ser iguales."
              estado={password2}
              setEstado={setPassword2}
              style="w-full px-3 py-2 pr-7 placeholder-gray-400 border border-gray-300 rounded-md"
              fn={validarPassword2}
            />
            <input
              type="submit"
              className="w-full px-3 py-4 mt-8 font-bold text-white uppercase bg-blue-500 rounded cursor-pointer hover:bg-blue-700"
              value={"Crear Cuenta"}
            />
            <div className="flex items-center justify-between text-xs text-gray">
              <a href="/login">¿Ya tienes cuenta? Inicia Sesión </a>
              <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
