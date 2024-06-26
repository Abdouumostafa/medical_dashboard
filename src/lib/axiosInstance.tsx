import { API_BASE_URL } from "../utils/globals"
import axios from "axios"
import dayjs from "dayjs"
import { jwtDecode } from "jwt-decode"

let accessToken = localStorage.getItem('access') ?
  JSON.parse(localStorage.getItem('access') ?? "")
  : ""

const refreshToken = localStorage.getItem('refresh') ?
  JSON.parse(localStorage.getItem('refresh') ?? "")
  : ""

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    ...(accessToken !== "" && { Authorization: `Bearer ${accessToken}` })
  }
})

if (accessToken !== "") {
  axiosInstance.interceptors.request.use(async (req) => {
    const user: any = jwtDecode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${API_BASE_URL}users/refresh/`, { refresh: refreshToken })

    localStorage.setItem("access", JSON.stringify(response.data.access))
    localStorage.setItem("refresh", JSON.stringify(response.data.refresh))
    req.headers!.Authorization = `Bearer ${JSON.parse(response.data.access)}`;
    return req;
  })
}

export default axiosInstance