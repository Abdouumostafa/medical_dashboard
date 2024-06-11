import axiosInstance from "../../../lib/axiosInstance"

const postExport = (data: any) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('image', data.image)

    return axiosInstance.post('', formData)
}

export default postExport