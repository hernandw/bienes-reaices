const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviando...')
  }
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
