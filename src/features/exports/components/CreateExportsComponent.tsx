import FormInput from "../../../components/FormInput"
import { pathList } from "../../../routes/routesPaths"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import DateInput from "../../../components/DateInput"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import postExport from "../services/postExport"

const CreateExportsComponent = () => {
  const [fileNameState, setFileNameState] = useState('ليس هناك أي ملف تم إختياره')
  const [formData, setFormData] = useState({
    receiver_name: '',
    orders: [{
      prod_name: '',
      quantity: ''
    }],
    date: '',
    invoice_date: '',
    attachment: '',
  })

  console.log(formData)

  const postExportsMutation = useMutation({
    mutationFn: () => postExport(formData),
    onSuccess: () => { },
    onError: () => { }
  })

  const onSubmitForm = (e: any) => {
    e.preventDefault()
    postExportsMutation.mutate()
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmitForm}>
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
            name="receiver_name"
            onChange={
              (text) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    receiver_name: text
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
            onChange={(text) => {
              setFormData((prev) => {
                const updatedOrders = [...prev.orders];
                updatedOrders[0] = {
                  ...updatedOrders[0],
                  prod_name: text,
                };

                return {
                  ...prev,
                  orders: updatedOrders,
                };
              });
            }}
          />
          <FormInput
            label="الكمية"
            required
            type="number"
            name="quantity"
            onChange={(text) => {
              setFormData((prev) => {
                const updatedOrders = [...prev.orders];
                updatedOrders[0] = {
                  ...updatedOrders[0],
                  quantity: JSON.parse(text),
                };

                return {
                  ...prev,
                  orders: updatedOrders,
                };
              });
            }}
          />
          <FormInput
            type="date"
            label="التاريخ"
            required
            name="date"
            onChange={
              (text: any) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    date: text
                  }
                })
              }
            }
          />
          <FormInput
            type="date"
            label="تاريخ الفاتورة"
            required
            name="invoice_date"
            onChange={
              (text: any) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    invoice_date: text
                  }
                })
              }
            }
          />
          <div className="dateInput">
            <label className="btn btn-primary cancel-form z-0 ms-3" htmlFor={'attachment'}>اختر ملف</label>
            {fileNameState}
          </div>
          <input className="form-control d-none" type="file" id={'attachment'} onChange={(text: any) => {
            setFileNameState(text.target.files[0].name)
            setFormData((prev) => {
              return {
                ...prev,
                attachment: text.target.files[0].name
              }
            })
          }}
            name={'attachment'}
          />
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