import axiosInstance from "../../../lib/axiosInstance"

const getReceiptsStats = () => {
    return axiosInstance.get('analytics/get-receipts/')
}

export default getReceiptsStats