import axiosInstance from "../../../lib/axiosInstance"

const deletePatient = (id: any) => {
    return axiosInstance.delete(`patients/delete/${id}/`)
}

export default deletePatient