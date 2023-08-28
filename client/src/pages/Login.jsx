import { useState } from "react"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const urlBase = 'http://localhost:3000'

    const iniciarSesion = () => {
       try {
        const response = fetch(`${urlBase}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        if (response.status === 200) {
          alert("Bienvenido");
        } else {
          alert("Usuario o contraseña incorrectos");
        }
       } catch (error) {
        console.log(error.message);
       }
    }
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
              </div>
              <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <button onClick={iniciarSesion}>Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login
