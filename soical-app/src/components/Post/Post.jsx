import { Card } from '@heroui/react';
import React ,{ useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiShareAlt, BiCamera } from 'react-icons/bi';
import { BsThreeDotsVertical, BsEmojiSmile } from 'react-icons/bs';
import { IoChevronDown } from 'react-icons/io5';
import CardHeader from '../PostCard/CardHeader';
import CardBody from '../PostCard/CardBody';
import CardFooter from '../PostCard/CardFooter';
import { Link } from 'react-router-dom';

export default function Post({ post, allPosts }) {
    const [postComments, setPostComments] = useState(post.comments);


    return (
    
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">

                {/* header */}
                <CardHeader  
                post={post}
                allPosts={allPosts}
                creator={post?.user?._id} photo={post.user?.photo} name={post?.user?.name} createdAt={post?.createdAt} />
                {/* body */}
                <CardBody 
                
                image={post.image} body={post.body} commentsLength={postComments.length} id={post._id} setPostComments={setPostComments} />
                {/* footer */}
                {postComments.length &&
                    <CardFooter comment={postComments[0]}  postUserId={post?.user?._id}
                    postId={post._id}
                    setPostComments={setPostComments}
                    
                    
                    />

                }



            </div>
       
    );
}