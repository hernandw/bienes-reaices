const EmailTemplate = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-10 text-3xl font-extrabold text-center">
        Cuenta Creada Correctamente
      </p>
      <p className="my-10 text-xl font-bold text-center">
        Hemos enviado un email de confirmación, presiona en el enlace para
        confirmar
      </p>
      <p className="my-10 text-xl font-bold text-center">
        Revisa tu bandeja de entrada{" "}
      </p>
    </div>
  );
};

export default EmailTemplate;
