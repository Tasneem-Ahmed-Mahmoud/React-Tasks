
import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export  async function getUser() {
  return axios.get(`${url}/user`, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
}


 