import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../services/postServices'
import CardHeader from '../../components/PostCard/CardHeader'
import Skeleton from '../../components/Skeleton/Skeleton'
import CardBody from '../../components/PostCard/CardBody'
import CardFooter from '../../components/PostCard/CardFooter'

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    if (id) {
      fetchPostDetails(id);
    }
  }, [id]); // Added id as dependency

  async function fetchPostDetails(postId) {
    try {
      const response = await getPost(postId);
      setPost(response?.data?.post || null);
      setPostComments(response?.data?.post?.comments);
      // console.log(response);
    } catch (error) {
      console.error('Error fetching post:', error);
      setPost(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 mt-5">
      {isLoading ? (
        <Skeleton />
      ) :
        <>
          <CardHeader
            photo={post.user?.photo}
            name={post.user?.name}
            createdAt={post.createdAt}
            creator={post.user?._id}
          />
          <CardBody
            isPostDetails={true}
            image={post.image}
            body={post.body}
            commentsLength={post.comments?.length}
            id={post._id}
            setPostComments={setPostComments}
          />

          {/* Fixed comments rendering */}
          {postComments && postComments.length > 0 && (
            <>
              {postComments.map((comment, index) => (
                <CardFooter comment={comment} key={comment._id || index}  postUserId={post?.user?._id}  postId={post._id}
                setPostComments={setPostComments}
                />
              ))}
            </>
          )}
        </>
      }
    </div>
  )
}