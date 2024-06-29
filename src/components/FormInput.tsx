import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"

type IProps = {
  label: string,
  required?: boolean,
  type: string,
  name: string,
  id?: string,
  onChange?: (text: any) => any,
  defaultValue?: any,
  disabled?: boolean
}

const FormInput = ({ label, required, type, name, id, onChange, defaultValue, disabled }: IProps) => {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="form-group">
      <label>
        {label}{required ? <span className="login-danger">*</span> : null}
      </label>
      {type === 'password' ?
        <div>
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control pass-input"
            value={password}
            onChange={(e) => {
              onChange?.(e.target.value)
              setPassword(e.target.value)
            }}
            name={name}
            id={id}
            required={required === true ? true : false}
            disabled={disabled === true ? true : false}
          />
          <span
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <FaEye />
            ) : (
              <FaEyeSlash />
            )}
          </span>
        </div>
        :
        <input
          className="form-control"
          type={type}
          onChange={(e) => onChange?.(e.target.value)}
          id={id}
          name={name}
          defaultValue={defaultValue}
          required={required === true ? true : false}
          disabled={disabled === true ? true : false}
        />
      }
    </div>
  )
}

export default FormInput