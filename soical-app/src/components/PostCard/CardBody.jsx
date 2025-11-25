import React, { useState } from 'react'
import { BiMessageRounded, BiCamera } from 'react-icons/bi';
import { IoIosSend } from "react-icons/io";
import { Button } from '@heroui/react';
import { createComment } from '../../services/commentServices';
import { Link } from 'react-router-dom';
import { set } from 'zod';
import { ToastContainer, toast } from 'react-toastify';

export default function CardBody({ image, body, commentsLength, id, isPostDetails, setPostComments }) {
    console.log(id)
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function settingComment(e) {
        setComment(e.target.value);
        console.log(comment);

    }

    async function sendComment() {
        setIsLoading(true);
        try {
            console.log(id, comment);
            const response = await createComment(id, comment);
            console.log(response);
            setPostComments(response?.data?.comments);
            toast.success(response?.data?.message || "Comment added successfully");
        } catch (error) {
            console.error( error?.response?.data?.error||'');
            if(error?.response?.data?.error ){
            toast.error(error?.response?.data?.error || "Comment failed");
            }
        }finally{
            setIsLoading(false);
             setComment("");
        }
    }
    return (
        <>
            {/* Content */}
            <div className="px-4 pb-3">
                <p className="text-gray-800">
                    {body}
                </p>
            </div>

            {/* Image */}
            {image && <img
                src={image}
                alt="Post"
                className={`w-full  object-cover ${isPostDetails ? '' : 'h-80'}`}
            />}

            {/* Actions */}
            <div className="flex items-center gap-6 px-4 py-3 border-b border-gray-100">
                {/* <button
                       className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
                   >
                       <AiOutlineHeart className="w-6 h-6" />
                       <span className="font-medium">1200</span>
                   </button> */}
                <Link to={`/post/${id}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors ">
                    <BiMessageRounded className="w-6 h-6" />
                    <span className="font-medium">{commentsLength}</span>
                </Link>
                {/* <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                       <BiShareAlt className="w-6 h-6" />
                       <span className="font-medium">17</span>
                   </button> */}
            </div>


            {/* Comment Input */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                <input
                value={comment}
                    onChange={(e) => { settingComment(e) }}
                    type="text"
                    placeholder="Write your comment"
                    className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="cursor-pointer  disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 "
                    size='sm'
                    color='primary'
                    radius='md'
                    variant="shadow"
                    disabled={comment.length === 0}
                    onPress={sendComment}
                    isLoading={isLoading}
                >
                    <IoIosSend className="w-5 h-5" />
                </Button>

            </div>
        </>
    )
}
