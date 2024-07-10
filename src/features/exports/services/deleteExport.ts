import axiosInstance from "../../../lib/axiosInstance"

const deleteExport = (id: number) => {
    return axiosInstance.delete(`export/delete/${id}/`)
}

export default deleteExport