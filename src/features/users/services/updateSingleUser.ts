import axiosInstance from "../../../lib/axiosInstance"

const updateSingleUser = (id: any, data: any) => {
    return axiosInstance.put(`users/update/${id}/`, data)
}

export default updateSingleUser