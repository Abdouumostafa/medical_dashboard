import { DatePicker } from "antd"

type IProps = {
  label: string,
  required: boolean,
  onChange: any,
  name: string
}

const DateInput = ({ label, required, onChange, name }: IProps) => {

  return (
    <div className="col-12">
      <div className="form-group local-forms cal-icon">
        <label>
          {label}{" "}
          <span className="login-danger">{required ? '*' : null}</span>
        </label>
        <DatePicker
          className="form-control datetimepicker w-100"
          onChange={onChange}
          suffixIcon={null}
          name={name}
          placeholder=""
        />
      </div>
    </div>
  )
}

export default DateInput