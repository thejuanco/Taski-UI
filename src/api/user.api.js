import axios from "axios";

const authAPI = axios.create({
    baseURL: "https://taski-backend-q5v2.onrender.com/",
    // headers: {
    //     "Authorization": "Bearer your_api_token"
    // }
})

//Registrar los usuarios
export const registerUser = async (data) => {
    return await authAPI.post('auth/createUser', data)
}