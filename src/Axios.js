import axios from "axios"

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


export const authAxios = axios.create({
  baseURL: "http://localhost:3005",

})