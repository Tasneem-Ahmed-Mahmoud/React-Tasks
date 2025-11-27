import React, { useContext, useState } from 'react'
import { BsThreeDotsVertical, BsEmojiSmile } from 'react-icons/bs';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import { Card, CardBody, CardFooter, Divider, useDisclosure, Input, Skeleton } from "@heroui/react";
import { userContext } from '../../context/userContext';
import CreatePostModal from '../CreatePost/CreatePostModal';
import { deletePost } from '../../services/postServices';
import { ToastContainer, toast } from 'react-toastify';
export default function CardHeader({ photo, name, createdAt, creator, allPosts, post }) {
    const { user, setUser, isLoading } = useContext(userContext)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [isLoadingPost, setIsLoadingPost] = useState(false);

    async function deletePostHandler() {

        try {
            const response = await deletePost(post._id)
            console.log(response);
            toast.success(response?.data?.message || "Post deleted successfully");

            allPosts();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {/* Header */}

            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={photo}
                        alt={name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-900">{name}</h3>
                        {/* <p className="text-sm text-gray-500">{createdAt.split(".").slice(0,1).join("").replace("T"," ")}</p> */}

                        <p className="text-sm text-gray-500">{new Date(createdAt).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}</p>
                    </div>
                </div>



                {!isLoading && user?._id === creator &&
                    <Dropdown>
                        <DropdownTrigger className="cursor-pointer">
                            <BsThreeDotsVertical className="w-5 h-5" />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownSection>
                                <DropdownItem key="edit" onClick={onOpen}>Edit </DropdownItem>
                                <DropdownItem onClick={() => { deletePostHandler() }} key="delete" className="text-danger" color="danger">
                                    Delete
                                </DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                }
                {/* <Dropdown>
                    <DropdownTrigger className="cursor-pointer">
                        <BsThreeDotsVertical className="w-5 h-5" />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">

                        <DropdownItem key="edit">Edit </DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger">
                            Delete
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown> */}


            </div>



            <CreatePostModal post={post} callback={allPosts} isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}
