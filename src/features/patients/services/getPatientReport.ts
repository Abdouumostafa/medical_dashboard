import axiosInstance from "../../../lib/axiosInstance"

const getPatientReport = (id: any) => {
    return axiosInstance.get(`reports/inclusive-patient/${id}/`)
}

export default getPatientReport