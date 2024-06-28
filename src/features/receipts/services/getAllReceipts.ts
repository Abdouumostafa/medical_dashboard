import axiosInstance from "../../../lib/axiosInstance"

const getAllReceipts = () => {
    return axiosInstance.get('receipts/get-receipts/')
}

export default getAllReceipts