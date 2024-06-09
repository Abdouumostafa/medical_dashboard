import axiosInstance from "../../../lib/axiosInstance"

const getAllUsers = () => {
    return axiosInstance.get('users/get/')
}

export default getAllUsers