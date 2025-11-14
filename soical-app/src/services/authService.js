import axios from "axios";

export async function registerUser(data) {
    const response = await axios.post("https://linked-posts.routemisr.com/users/signup", data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export async function loginUser(data) {
    const response = await axios.post("https://linked-posts.routemisr.com/users/signin", data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}


// {
//     "name": "Ahmed Bahnasy",
//     "email":"bahnasy2040101@gmail.com",
//     "password":"Bahnasy@123",
//     "rePassword":"Bahnasy@123",
//     "dateOfBirth":"7-10-1994",
//     "gender":"male"
// }
