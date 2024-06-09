import axiosInstance from "../../../lib/axiosInstance"

const deleteUser = (id: any) => {
    return axiosInstance.delete(`users/delete/${id}/`)
}

export default deleteUser