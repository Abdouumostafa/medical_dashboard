import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"

type IProps = {
  label: string,
  required: boolean,
  type: string,
  name: string,
  id?: string,
  onChange: (text: any) => any,
  defaultValue?: any
}

const FormInput = ({ label, required, type, name, id, onChange, defaultValue }: IProps) => {
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
        />
      }
    </div>
  )
}

export default FormInput