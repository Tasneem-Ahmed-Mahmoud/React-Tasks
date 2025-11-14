import axios from "axios";

const url= import.meta.env.VITE_BASE_URL;

//console.log(url)
export async function registerUser(data) {
    const response = await axios.post(`${url}/users/signup`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function loginUser(data) {
    const response = await axios.post(`${url}/users/signin`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}



