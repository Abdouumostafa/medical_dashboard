import axiosInstance from "../../../lib/axiosInstance"

const PostNewUser = (data: any) => {
    return axiosInstance.post('users/create/', data)
}

export default PostNewUser