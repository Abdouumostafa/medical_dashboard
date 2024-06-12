import axiosInstance from "../../../lib/axiosInstance"

const postExport = (data: any) => {
    const formData = new FormData()
    formData.append('receiver_name', data?.receiver_name)
    formData.append('orders', data?.orders)
    formData.append('date', data?.date)
    formData.append('invoice_date', data?.invoice_date)
    formData.append('attachment', data?.attachment)

    return axiosInstance.post('export/create/', formData)
}

export default postExport