import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const CampoInput = ({
  label,
  type,
  name,
  placeholder,
  estado,
  setEstado,
  expresionReg,
  leyenda,
  fn,
}) => {
  
  
  const validarCampo = () => {
    if (expresionReg) {
      if (expresionReg.test(estado.campo)) {
        setEstado({ ...estado, valido: true });
      } else {
        setEstado({ ...estado, valido: false });
      }
    }
    if (fn) {
      fn();
    }
  };
  
  return (
    <>
      <div className="groupInput">
        <label
          htmlFor={name}
          className={`block text-sm font-bold  uppercase ${
            estado.valido ? "valido" : "not-valido"
          }`}
        >
          {label}
        </label>
        <input
          type={type}
          id={name}
          className={
            estado.valido
              ? "w-full px-3 py-2 pr-7 placeholder-gray-400 border border-gray-300 rounded-md"
              : "w-full px-3 py-2 pr-7 placeholder-gray-400 border border-red-500 rounded-md"
          }
          placeholder={placeholder}
          value={estado.campo}
          onChange={(e) => setEstado({ ...estado, campo: e.target.value })}
          onKeyUp={validarCampo}
          onBlur={validarCampo}
        />
        <FontAwesomeIcon
          icon={estado.valido ? faCircleCheck: faTimesCircle}
          className={estado.valido ? "icon" : "not-valido"}
         
        />
      </div>
      <div>{estado.valido ? "" : <p className="leyenda">{leyenda}</p>}</div>
    </>
  );
};

CampoInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fn: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  estado: PropTypes.any,
  setEstado: PropTypes.func,
  expresionReg: PropTypes.any,
  leyenda: PropTypes.string.isRequired,
};

export default CampoInput;
