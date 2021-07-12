import axios from "axios"

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFiYW4tMDBAeWFuZGV4LmMiLCJpYXQiOjE2MjUyMjk5NTQsImV4cCI6MTYyNTIzMzU1NCwic3ViIjoiNSJ9.GJNW6SnekFiX4eY3JqZXLZ56idac1EkdG3XKkB4TIDE`;



export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


export const authAxios = axios.create({
  baseURL: "http://localhost:3005",
})

authAxios.interceptors.response.use(
  (res) => {
    return res
},
  (error) => {
    // debugger
    return Promise.reject(error);
    // return error
  }
)


