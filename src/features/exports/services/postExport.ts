import axiosInstance from "../../../lib/axiosInstance"

const postExport = (data: any) => {

    return axiosInstance.post('export/create/', data)
}

export default postExport