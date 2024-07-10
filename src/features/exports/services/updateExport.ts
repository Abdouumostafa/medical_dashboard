import axiosInstance from "../../../lib/axiosInstance"

const updateExport = (id: any, data: any) => {
    return axiosInstance.put(`export/update/${id}/`, data)
}

export default updateExport