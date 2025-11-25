import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Post from '../../components/Post/Post'
import { useEffect } from 'react'
import { getPosts } from '../../services/postServices'
import { set } from 'zod'
import Skeleton from '../../components/Skeleton/Skeleton'
export default function NewsFeed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    allPosts();
  }, []);

  const allPosts = async () => {
    const response = await getPosts();
    console.log(response.data);
    setPosts(response?.data?.posts);
  };
  return (
    <>

    
              {posts.length === 0 ? [...Array(5)].map((s,index)=><Skeleton key={index}/>) :                               
              posts && posts.map((post) => (
              <Post key={post.id} post={post} />
              ))}

           
    </>
  )
}
