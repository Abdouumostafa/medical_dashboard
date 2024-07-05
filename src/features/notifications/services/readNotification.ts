import axiosInstance from "../../../lib/axiosInstance"

const readNotification = (id: number | any) => {
    return axiosInstance.put(`/activities/read/${id}/`)
}

export default readNotification