import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"

type IProps = {
  label: string,
  required: boolean,
  type: string
}

const FormInput = ({ label, required, type }: IProps) => {
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
            onChange={(e) => setPassword(e.target.value)}
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
        <input className="form-control" type={type} />
      }
    </div>
  )
}

export default FormInput