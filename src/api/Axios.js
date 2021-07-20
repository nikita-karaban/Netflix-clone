import axios from "axios"

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


export const authAxios = axios.create({
  baseURL: "http://localhost:3005",
})

export const isAuthAxios = axios.create({
  baseURL: "http://localhost:3005/auth"
})


export const setupInterceptors = (history) => {
  authAxios.interceptors.response.use(
    (res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      return res
    },
    (error) => {
      return Promise.reject(error);
    }
  )
  isAuthAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${token}`
    return config;
  });

  isAuthAxios.interceptors.response.use(
    res => {
      return res
    },
    error => {
      if(error.response.status === 401) {
        localStorage.removeItem("accessToken")
        history.push("/signin")
      }
    }
  )
}




