import axiosInstance from "../../../lib/axiosInstance"

const getAllExports = () => {
    return axiosInstance.get('export/get-all/')
}

export default getAllExports