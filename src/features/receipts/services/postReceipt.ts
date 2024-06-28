import axiosInstance from "../../../lib/axiosInstance"

const postReceipt = (data: any) => {
    return axiosInstance.post('receipts/create/', data)
}

export default postReceipt