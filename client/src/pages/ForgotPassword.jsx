import  { useState } from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando...')
    }
    
  return (
    <div>
      <h1 className="my-10 text-2xl font-extrabold text-center">
        Bienes <span className="font-normal">Raices</span>
      </h1>
      <h2 className="text-2xl font-extrabold text-center">Recupera tu Acceso a Bienes Raices</h2>
      <div className="max-w-md mx-auto mt-8">
        <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 uppercase"
              >
                Email de Registro
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
           

            <input
              type="submit"
              className="w-full px-3 py-4 font-bold text-white uppercase bg-blue-500 rounded cursor-pointer hover:bg-blue-700"
              value={"Enviar Correo"}
                      />
                      <div className='flex items-center justify-between text-xs text-gray'>
                          <a href="/login">Ya tienes cuenta? Inicia Sesión </a>
                          <a href="/register">¿No tienes cuenta? Regístrate</a>
                      </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword
