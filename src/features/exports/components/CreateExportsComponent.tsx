import { pathList } from "../../../routes/routesPaths"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import postExport from "../services/postExport"

const CreateExportsComponent = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    receiver_name: '',
    orders: [{
      prod_name: '',
      quantity: ''
    }],
    date: '',
    invoice_date: '',
  })


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOrderChange = (index: number, e: any) => {
    const { name, value } = e.target;
    const newOrders = [...formData.orders];
    // @ts-ignore
    newOrders[index][name] = value;
    setFormData((prevState) => ({
      ...prevState,
      orders: newOrders
    }));
  };

  const addOrder = () => {
    setFormData((prevState: any) => ({
      ...prevState,
      orders: [...prevState.orders, { prod_name: '', quantity: '' }]
    }));
  };

  const postExportsMutation = useMutation({
    mutationFn: () => postExport(formData),
    onSuccess: (success) => {
      toast.success(success?.data?.message)
      setTimeout(() => {
        navigate(pathList.allExports);
      }, 1000);
    },
    onError: (error) => {
      // @ts-ignore
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
              <h4>اضافة توريد جديد</h4>
            </div>
          </div>
          <div className="form-group">
            <label>
              اسم المستلم <span className="login-danger">*</span>
            </label>
            <input
              required
              type="text"
              onChange={handleChange}
              value={formData.receiver_name}
              className="form-control"
              name="receiver_name"
              id="receiver_name"
            />
          </div>
          <button
            onClick={addOrder}
            type="button"
            className="btn btn-primary w-25 mb-3 mt-2 me-2"
          >
            إضافة طلب آخر
          </button>
          {formData.orders.map((order, index) => {
            return <div key={index}>
              <div className="form-group">
                <label>
                  اسم المنتج <span className="login-danger">*</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => handleOrderChange(index, e)}
                  value={order.prod_name}
                  className="form-control"
                  name="prod_name"
                  id="prod_name"
                />
              </div>
              <div className="form-group">
                <label>
                  الكمية<span className="login-danger">*</span>
                </label>
                <input
                  required
                  type="number"
                  onChange={(e) => handleOrderChange(index, e)}
                  value={order.quantity}
                  className="form-control"
                  name="quantity"
                  id="quantity"
                />
              </div>
            </div>
          })}
          <div className="form-group">
            <label>
              التاريخ<span className="login-danger">*</span>
            </label>
            <input
              required
              type="date"
              onChange={handleChange}
              value={formData.date}
              className="form-control"
              name="date"
              id="date"
            />
          </div>
          <div className="form-group">
            <label>
              تاريخ الفاتورة<span className="login-danger">*</span>
            </label>
            <input
              required
              type="date"
              onChange={handleChange}
              value={formData.invoice_date}
              className="form-control"
              name="invoice_date"
              id="invoice_date"
            />
          </div>
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