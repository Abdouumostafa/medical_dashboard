import axiosInstance from "../../../lib/axiosInstance"

const getSingleReceipt = (id: any) => {
    return axiosInstance.get(`receipts/get/${id}/`)
}

export default getSingleReceipt