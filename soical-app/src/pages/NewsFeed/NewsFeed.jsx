import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Post from '../../components/Post/Post'
import { useEffect } from 'react'
import { getPosts } from '../../services/postServices'
import { set } from 'zod'
import Skeleton from '../../components/Skeleton/Skeleton'
import CreatePost from '../../components/CreatePost/CreatePost'
import { useQuery } from '@tanstack/react-query'
export default function NewsFeed() {
  // const [posts, setPosts] = useState([]);


  // useEffect(() => {
  //   getAllPosts();
  // }, []);

  // const getAllPosts = async () => {
  //   const response = await getPosts();
  //   console.log(response.data);
  //   setPosts(response?.data?.posts);
  // };


  // use react query
  const { data, isLoading,refetch,isError,isFetched,error } = useQuery({
    queryKey: ['allPosts','page'],
    queryFn: () => getPosts(1),
   // retry:3,
    //retryOnMount:false,
   // retryDelay:5000,
 //   refetchInterval:5000,
 //   refetchOnMount:false,
 //   refetchOnWindowFocus:true,
//    refetchOnWindowFocus:true


staleTime:5000,
gcTime:5000,

  });



  return (
    <>

      <CreatePost />
     {/* // <button onClick={() => { refetch() }}> Refetch </button> */}
      {isLoading ? [...Array(5)].map((s, index) => <Skeleton key={index} />) :
        data?.data?.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}


    </>
  )
}
