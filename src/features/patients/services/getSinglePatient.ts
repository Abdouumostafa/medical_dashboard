import axiosInstance from "../../../lib/axiosInstance"

const getSinglePatient = (id: any) => {
    return axiosInstance.get(`patients/get/${id}/`)
}

export default getSinglePatient