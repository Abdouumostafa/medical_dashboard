import axiosInstance from "../../../lib/axiosInstance"

const createPatient = (data: any) => {
    return axiosInstance.post('patients/create/', data)
}

export default createPatient