import { pathList } from "../../../routes/routesPaths"
import FormInput from "../../../components/FormInput"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const UpdatePatientComponent = () => {
  return (
    <>
      <ToastContainer />
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-heading">
              <h4>تعدبل المريض </h4>
            </div>
          </div>
          <FormInput
            label="اسم المريض"
            required
            type="text"
            name="name"
            onChange={
              (text) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    name: text
                  }
                })
              }
            }
          />
          <FormInput
            label="العمر"
            required
            type="number"
            name="age"
            onChange={
              (text) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    age: text
                  }
                })
              }
            }
          />
          <FormInput
            label="رقم الملف"
            required
            type="number"
            name="document_number"
            onChange={
              (text) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    document_number: text
                  }
                })
              }
            }
          />
          <div className="col-12 col-md-6 col-xl-6">
            <div className="select-gender">
              <label className="gen-label">
                النوع (الجنس)<span className="login-danger">*</span>
              </label>
              <select
                name="is_admin"
                id="is_admin"
                className=" w-100 mb-5"
                onChange={(text) => {
                  setFormData((prev: any) => {
                    return {
                      ...prev,
                      gender: text.target.value
                    }
                  })
                }}
              >
                <option value={'ذكر'}>ذكر</option>
                <option value={'أنثي'}>أنثي</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="doctor-submit">
            <button
              type="submit"
              className="btn btn-primary submit-form me-2"
            >
              تعدبل مريض
            </button>
            <Link
              to={pathList.allPatients}
              className="btn btn-primary cancel-form"
            >
              رجوع
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdatePatientComponent