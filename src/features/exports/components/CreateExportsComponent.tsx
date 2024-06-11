import FormInput from "../../../components/FormInput"
import { pathList } from "../../../routes/routesPaths"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import DateInput from "../../../components/DateInput"
import FileInput from "../../../components/FileInput"

const CreateExportsComponent = () => {
  return (
    <>
      <ToastContainer />
      <form>
        <div className="row">
          <div className="col-12">
            <div className="form-heading">
              <h4>اضافة توريد جديد</h4>
            </div>
          </div>
          <FormInput
            label="اسم المستلم"
            required
            type="text"
            name="prod_name"
            onChange={
              (text) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    username: text
                  }
                })
              }
            }
          />
          <FormInput
            label="اسم المنتج"
            required
            type="text"
            name="prod_name"
            onChange={
              (text) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    username: text
                  }
                })
              }
            }
          />
          <FormInput
            label="الكمية"
            required
            type="number"
            name="quantity"
            onChange={
              (text) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    email: text
                  }
                })
              }
            }
          />
          <DateInput
            label="التاريخ"
            required
            name="date"
            onChange={''}
          />
          <DateInput
            label="تاريخ الفاتورة"
            required
            name="invoice_date"
            onChange={''}
          />
          <FileInput fileId="ff" />
        </div>
        <div className="col-12">
          <div className="doctor-submit">
            <button
              type="submit"
              className="btn btn-primary submit-form me-2"
            >
              إضافة توريد جديد
            </button>
            <Link
              to={pathList.homePage}
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

export default CreateExportsComponent