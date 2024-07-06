import axiosInstance from "../../../lib/axiosInstance"

const getPatientDetails = (doc_number: any) => {
    return axiosInstance.get(`patients/search/${doc_number}/`)
}

export default getPatientDetails