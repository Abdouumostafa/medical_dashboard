import axiosInstance from "../../../lib/axiosInstance"

const getSingleUser = (id: any) => {
    return axiosInstance.get(`users/get-user/${id}/`)
}

export default getSingleUser