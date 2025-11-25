import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export async function createComment(postId, content) {
  const response = await axios.post(
    `${url}/comments`,
    {
      content: content,
      post: postId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    }
  );
  return response;
}
