import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import getSingleExport from "../services/getSingleExport";
import { pathList } from "../../../routes/routesPaths";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import updateExport from "../services/updateExport";
import Loading from "../../../components/Loading";

const UpdateExportComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ['exports', id],
    queryFn: () => getSingleExport(id)
  });
  const singleExport = data?.data?.data;


  const [formData, setFormData] = useState({
    receiver_name: '',
    orders: [{
      prod_name: '',
      quantity: '',
    }],
    date: '',
    invoice_date: '',
  });

  useEffect(() => {
    if (singleExport) {
      setFormData({
        receiver_name: singleExport.receiver_name || '',
        orders: singleExport.orders || [{ prod_name: '', quantity: '' }],
        date: singleExport.date || '',
        invoice_date: singleExport.invoice_date || '',
      });
    }
  }, [singleExport]);

  const updateExportMutation = useMutation({
    mutationFn: () => {
      const payload = {
        receiver_name: formData.receiver_name,
        date: formData.date,
        invoice_date: formData.invoice_date,
        orders: formData.orders,
      };

      return updateExport(id, payload);
    },
    onSuccess: () => {
      toast.success('تم تعديل بيانات التوريد');
      setTimeout(() => {
        navigate(pathList.allPatients);
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

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

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    updateExportMutation.mutate();
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
                  type="text"
                  onChange={handleChange}
                  value={formData.receiver_name}
                  className="form-control"
                  name="receiver_name"
                  id="receiver_name"
                />
              </div>
              {formData.orders.map((order, index) => (
                <div key={index}>
                  <div className="form-group">
                    <label>
                      اسم المنتج <span className="login-danger">*</span>
                    </label>
                    <input
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
                      type="number"
                      onChange={(e) => handleOrderChange(index, e)}
                      value={order.quantity}
                      className="form-control"
                      name="quantity"
                      id="quantity"
                    />
                  </div>
                </div>
              ))}
              <div className="form-group">
                <label>
                  التاريخ<span className="login-danger">*</span>
                </label>
                <input
                  type="date"
                  required
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
                  to={pathList.allExports}
                  className="btn btn-primary cancel-form"
                >
                  رجوع
                </Link>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default UpdateExportComponent;
