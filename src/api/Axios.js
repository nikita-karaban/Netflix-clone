import axios from "axios"
import Cookie from "js-cookie";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


export const authAxios = axios.create({
  baseURL: "http://localhost:3005",
})


export const setupInterceptors = (history) => {
  authAxios.interceptors.response.use(
    (res) => {
      return res
    },
    (error) => {
      if(error.response.status === 401) {
        Cookie.remove("accessToken")
        history.push("/signin")
      }
      return Promise.reject(error);
    }
  )
}



