import axiosInstance from "../../../lib/axiosInstance"

const updateReceipt = (id: any, data: any) => {
    return axiosInstance.put(`receipts/update/${id}/`, data)
}

export default updateReceipt