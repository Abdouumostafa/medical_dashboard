import axiosInstance from "../../../lib/axiosInstance"

const deleteReceipt = (id: any) => {
    return axiosInstance.delete(`receipts/delete/${id}/`)
}

export default deleteReceipt