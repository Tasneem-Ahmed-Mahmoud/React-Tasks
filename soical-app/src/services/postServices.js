import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export  async function getPosts() {
  return axios.get(`${url}/posts`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
}

async function getPost(id) {
  return await axios.get(`${url}/posts/${id}`,{
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
 
}

async function createPost(data) {
  const response = await axios.post(`${url}/posts`, data);
  return response;
}

async function updatePost(id, data) {
  const response = await axios.put(`${url}/posts/${id}`, data);
  return response;
}

async function deletePost(id) {
  const response = await axios.delete(`${url}/posts/${id}`);
  return response;
}


export {
  // getPosts,
  getPost,
  createPost,
  updatePost, 
  deletePost
}
