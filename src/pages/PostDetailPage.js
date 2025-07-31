import React from 'react';

function PostDetailPage({ post, onNavigate }) {
  if (!post) return <div className="text-center mt-10">존재하지 않는 게시글입니다.</div>;

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
      <button
        onClick={() => onNavigate('home')}
        className="mt-6 bg-white border border-black rounded px-4 py-2 hover:bg-gray-100"
      >
        ← 목록으로
      </button>
    </div>
  );
}

export default PostDetailPage;
