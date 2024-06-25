import axiosInstance from "../../../lib/axiosInstance"

const getPatientsStats = () => {
    return axiosInstance.get('analytics/get-patients/')
}

export default getPatientsStats