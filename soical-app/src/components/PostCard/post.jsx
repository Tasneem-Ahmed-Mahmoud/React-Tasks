import React, { useContext, useState, useRef } from 'react'
import { userContext } from '../../context/userContext';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import { Spinner } from "@heroui/spinner";
import { BsThreeDotsVertical, BsEmojiSmile } from 'react-icons/bs';
import { deleteComment, updateComment } from '../../services/commentServices'; // Make sure updateComment is imported
import { ToastContainer, toast } from 'react-toastify';
import { fi } from 'zod/v4/locales';
import { getPostComments } from '../../services/postServices';
import { set } from 'zod';

export default function CardFooter({ comment, postUserId, postId, setPostComments }) {
  const { user, setUser } = useContext(userContext)
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const editInputRef = useRef(null);

  async function deleteCommentHandler() {
    setIsLoading(true);
    try {
      const response = await deleteComment(comment._id)
      console.log(response);
      toast.success(response?.data?.message || "Comment deleted successfully");
      getNewComments(postId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getNewComments(postId) {
    try {
      const response = await getPostComments(postId);
      console.log(response);
      setPostComments(response?.data?.comments);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCommentHandler() {
    if (!editedContent.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    setIsLoading(true);
    try {
      const response = await updateComment(comment._id, { content: editedContent });
      console.log(response);
      toast.success(response?.data?.message || "Comment updated successfully");
      setIsEditing(false);
      getNewComments(postId);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to update comment");
    } finally {
      setIsLoading(false);
    }
  }

  function handleEditClick() {
    setIsEditing(true);
    // Focus the input field when editing starts
    setTimeout(() => {
      if (editInputRef.current) {
        editInputRef.current.focus();
      }
    }, 0);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditedContent(comment.content); // Reset to original content
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      updateCommentHandler();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  }

  return (
    <>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <img
            src={comment.commentCreator.photo.includes("/undefined") ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" : comment.commentCreator.photo}
            alt={comment.commentCreator.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="grow flex-1 bg-gray-50 rounded-2xl px-4 py-3">
            <h4 className="font-semibold text-sm text-gray-900">{comment.commentCreator.name}</h4>
            
            {isEditing ? (
              <div className="mt-1">
                <input
                  ref={editInputRef}
                  type="text"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={updateCommentHandler}
                    disabled={isLoading}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 disabled:opacity-50"
                  >
                    {isLoading ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    disabled={isLoading}
                    className="px-3 py-1 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600 disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-700 mt-1">
                {comment.content}
              </p>
            )}
          </div>

          {!isLoading ? (
            <>
              {user?._id === postUserId && user?._id === comment.commentCreator._id && !isEditing && (
                <Dropdown>
                  <DropdownTrigger className="cursor-pointer">
                    <BsThreeDotsVertical className="w-5 h-5" />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownSection>
                      <DropdownItem key="edit" onClick={handleEditClick}>
                        Edit
                      </DropdownItem>
                      <DropdownItem 
                        onClick={deleteCommentHandler} 
                        key="delete" 
                        className="text-danger" 
                        color="danger"
                      >
                        Delete
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              )}
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  )
}