import FormInput from "../../../components/FormInput"
import Loading from "../../../components/Loading"
import { pathList } from "../../../routes/routesPaths"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import updateReceipt from "../services/updateReceipt"
import getSingleReceipt from "../services/getSingleReceipt"

const UpdateReceiptComponent = () => {
  const navigation = useNavigate()

  const { id } = useParams()

  // Get Single Patient
  const { data, isLoading } = useQuery({
    queryKey: ['receipt', id],
    queryFn: () => getSingleReceipt(id)
  })
  const receiptData = data?.data?.data
  console.log(receiptData)

  // Update User
  const [formData, setFormData] = useState({
    notes: '',
    receiving_date: '',
  })

  const updatePatientMutation = useMutation({
    mutationFn: () => {
      return updateReceipt(id, {
        notes: formData?.notes ? formData.notes : receiptData?.notes,
        receiving_date: formData?.receiving_date ? formData.receiving_date : receiptData?.receiving_date,
      })
    },
    onSuccess: () => {
      // @ts-ignore
      toast.success('تم تعديل بيانات الاستلام')
      setTimeout(() => {
        navigation(pathList.all_receipts)
      }, 1000);
    },
    onError: (error) => {
      // @ts-ignore
      toast.error(error)
    }
  })

  const onSubmitForm = (e: any) => {
    e.preventDefault()
    updatePatientMutation.mutate()
  }

  return (
    <>{isLoading ?
      <Loading />
      :
      <>
        <ToastContainer />
        <form onSubmit={onSubmitForm}>
          <div className="row">
            <div className="col-12">
              <div className="form-heading">
                <h4>تعديل الاستلام </h4>
              </div>
            </div>
            <FormInput
              label="الملاحظات"
              required
              type="text"
              name="notes"
              defaultValue={receiptData?.notes}
              onChange={
                (text) => {
                  setFormData((prev) => {
                    return {
                      ...prev,
                      notes: text
                    }
                  })
                }
              }
            />
            <FormInput
              label="تاريخ الاستلام"
              required
              type="date"
              name="receiving_date"
              defaultValue={receiptData?.receiving_date}
              onChange={
                (text) => {
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
              label="رقم الملف"
              disabled
              type="number"
              name="document_number"
              defaultValue={receiptData?.patient?.document_number}
            />
            <FormInput
              label="اسم المريض"
              disabled
              type="text"
              name="name"
              defaultValue={receiptData?.patient?.name}
            />
            <FormInput
              label="العمر"
              disabled
              type="number"
              name="age"
              defaultValue={receiptData?.patient?.age}
            />
            <FormInput
              label="النوع"
              disabled
              type="text"
              name="gender"
              defaultValue={receiptData?.patient?.gender}
            />
          </div>
          <div className="col-12">
            <div className="doctor-submit">
              <button
                type="submit"
                className="btn btn-primary submit-form me-2"
              >
                تعديل الاستلام
              </button>
              <Link
                to={pathList.all_receipts}
                className="btn btn-primary cancel-form"
              >
                رجوع
              </Link>
            </div>
          </div>
        </form>
      </>
    }
    </>
  )
}

export default UpdateReceiptComponent