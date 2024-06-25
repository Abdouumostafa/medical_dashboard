import axiosInstance from "../../../lib/axiosInstance"

const getExportsStats = () => {
    return axiosInstance.get('analytics/get-exports/')
}

export default getExportsStats