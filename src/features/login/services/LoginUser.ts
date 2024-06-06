import axiosInstance from "../../../lib/axiosInstance";

const LoginUser = (data: any) => {
    return axiosInstance.post("users/login/", data);
};

export default LoginUser;