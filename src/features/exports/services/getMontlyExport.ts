import axiosInstance from "../../../lib/axiosInstance"

const getMonthlyExport = (monthlyDate: any) => {
    return axiosInstance.get(`reports/get-monthly-exports/${monthlyDate}/`)
}

export default getMonthlyExport