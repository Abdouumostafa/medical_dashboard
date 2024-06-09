import axiosInstance from "../../../lib/axiosInstance"

const getAllPatients = () => {
    return axiosInstance.get('patients/get-all/')
}

export default getAllPatients