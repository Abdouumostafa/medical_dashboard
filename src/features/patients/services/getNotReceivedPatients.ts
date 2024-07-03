import axiosInstance from "../../../lib/axiosInstance"

const getNotReceivedPatients = (date: string) => {
    return axiosInstance.get(`reports/not-received-patients/${date}/`)
}

export default getNotReceivedPatients