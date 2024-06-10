import axiosInstance from "../../../lib/axiosInstance"

const updatePatient = (id: any, data: any) => {
    return axiosInstance.put(`patients/update/${id}/`, data)
}

export default updatePatient