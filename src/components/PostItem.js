import React from 'react';

function PostItem({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-100 transition text-center"
    >
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-600 mt-2">{post.content.slice(0, 50)}...</p>
    </div>
  );
}

export default PostItem;