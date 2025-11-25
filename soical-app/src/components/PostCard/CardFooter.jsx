import React from 'react'

export default function CardFooter({ comment }) {
  return (
    <>
      {/* Comments */}




      <div className="p-4">
        <div className="flex items-start gap-3">
          <img
            src={comment.commentCreator.photo.includes("/undefined") ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" : comment.commentCreator.photo}
            alt={comment.commentCreator.name}

            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 bg-gray-50 rounded-2xl px-4 py-3">
            <h4 className="font-semibold text-sm text-gray-900">{comment.commentCreator.name}</h4>
            <p className="text-sm text-gray-700 mt-1">
              {comment.content}
            </p>
          </div>
        </div>

      </div>

    </>
  )
}
