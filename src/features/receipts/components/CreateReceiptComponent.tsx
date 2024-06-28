import { useMutation } from 'react-query'
import FormInput from '../../../components/FormInput'
import { pathList } from '../../../routes/routesPaths'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import postReceipt from '../services/postReceipt'

const CreateReceiptComponent = () => {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    doc_number: '',
    receiving_date: '',
    notes: ''
  })

  const postExportsMutation = useMutation({
    mutationFn: () => postReceipt(formData),
    onSuccess: () => {
      toast.success('تم اضافة استلام جديد بنجاح')
      setTimeout(() => {
        navigation(pathList.all_receipts)
      }, 1000);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message)
    }
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
              <h4>اضافة استلام جديد</h4>
            </div>
          </div>
          <FormInput
            type="number"
            label="رقم ملف المريض"
            required
            name="doc_number"
            onChange={
              (text: any) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    doc_number: text
                  }
                })
              }
            }
          />
          <FormInput
            type="date"
            label="تاريخ الاستلام"
            required
            name="receiving_date"
            onChange={
              (text: any) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    receiving_date: text
                  }
                })
              }
            }
          />
          <FormInput
            type="text"
            label="ملاحظات"
            required
            name="notes"
            onChange={
              (text: any) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    notes: text
                  }
                })
              }
            }
          />
        </div>
        <div className="col-12">
          <div className="doctor-submit">
            <button
              type="submit"
              className="btn btn-primary submit-form me-2"
            >
              إضافة استلام جديد
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

export default CreateReceiptComponent