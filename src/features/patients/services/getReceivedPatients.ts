import axiosInstance from "../../../lib/axiosInstance"

const getReceivedPatients = (date: string) => {
    return axiosInstance.get(`reports/received-patients/${date}/`)
}

export default getReceivedPatients