import axios from "axios";
import { BiBody } from "react-icons/bi";


const url = import.meta.env.VITE_BASE_URL;

export  function getPosts(page) {
  return axios.get(`${url}/posts`, {
    headers: {
      token: localStorage.getItem("token"),
    },
    params: {
      page: page,
      limit: 20,
      sort: "-createdAt",
    },
  });
}

async function getPost(id) {
  return await axios.get(`${url}/posts/${id}`, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
}

async function createPost(formData) {
  const response = await axios.post(`${url}/posts`, formData, {
    headers: {
      // "Content-Type": "multipart/form-data",
      token: localStorage.getItem("token"),
    },
  });
  return response;
}


async function updatePost(id, formData) {
  const response = await axios.put(`${url}/posts/${id}`, formData, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  return response;
}

async function deletePost(id) {
  const response = await axios.delete(`${url}/posts/${id}`,{
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  return response;
}

export async function getPostComments(id) {
  const response = await axios.get(`${url}/posts/${id}/comments`, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  return response;
}

export {
  // getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
