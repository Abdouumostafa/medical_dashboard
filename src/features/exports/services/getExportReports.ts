import axiosInstance from "../../../lib/axiosInstance"

const getExportReports = (startDate: any, endDate: any) => {
    return axiosInstance.get(`reports/check-exports/${startDate}/${endDate}/`)
}

export default getExportReports