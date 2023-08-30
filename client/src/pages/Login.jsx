import { useEffect, useState } from "react"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const urlBase = 'http://localhost:3000'

    const iniciarSesion = async() => {
      

  }
  
  useEffect(() => {
    iniciarSesion()
    
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviando...')
  }
  return (
    <div>
      <h1 className="my-10 text-2xl font-extrabold text-center">
        Bienes <span className="font-normal">Raices</span>
      </h1>
      <h2 className="text-2xl font-extrabold text-center">Inicia Sesión</h2>
      <div className="max-w-md mx-auto mt-8">
        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
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

            <input
              type="submit"
              className="w-full px-3 py-4 font-bold text-white uppercase bg-blue-500 rounded cursor-pointer hover:bg-blue-700"
              value={"Iniciar Sesión"}
            />
            <div className="flex items-center justify-between text-xs text-gray">
              <a href="/register">¿No tienes cuenta? Regístrate </a>
              <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
