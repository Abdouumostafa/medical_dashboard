import axiosInstance from "../../../lib/axiosInstance"

const getAllNotifications = () => {
    return axiosInstance.get('activities/get/')
}

export default getAllNotifications