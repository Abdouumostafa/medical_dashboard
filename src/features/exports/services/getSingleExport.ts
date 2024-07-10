import axiosInstance from "../../../lib/axiosInstance"

const getSingleExport = (id: any) => {
    return axiosInstance.get(`export/get/${id}/`)
}

export default getSingleExport