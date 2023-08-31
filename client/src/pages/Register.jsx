import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('')

  const navigate = useNavigate();

  const urlBase = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (name === "" || email === "" || password === "" || password2 === "") {
        setMessage("Todos los campos son obligatorios");
        setError(true);
        return
      }
      if (password !== password2) {
        setMessage("Las contraseñas no coinciden");
        setError(true);
        return
      }
      await fetch(`${urlBase}/register`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (err) {
      console.error(err.message);
      setMessage(err.message)
      setError(true)
    }
    setError(false)
  };
  return (
    <div>
      <h1 className="my-10 text-2xl font-extrabold text-center">
        Bienes <span className="font-normal">Raices</span>
      </h1>
      <h2 className="text-2xl font-extrabold text-center">Crea tu cuenta</h2>
      <div className="max-w-md mx-auto mt-8">
        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              {error && (
                <p className="p-4 mb-4 font-bold text-center text-white uppercase bg-red-600 rounded-md">
                  {message}
                </p>
              )}
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700 uppercase"
              >
                Tu Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md"
                placeholder="Ej. José Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 uppercase"
              >
                Tu Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md"
                placeholder="Ej. joseperez@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 uppercase"
              >
                Tu Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md"
                placeholder="Ej. 123456"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-bold text-gray-700 uppercase"
              >
                Repite Tu Password
              </label>
              <input
                type="password"
                id="password2"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md"
                placeholder="Ej. 123456"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="w-full px-3 py-4 font-bold text-white uppercase bg-blue-500 rounded cursor-pointer hover:bg-blue-700"
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
