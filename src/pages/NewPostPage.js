import React from 'react';
import PostForm from '../components/PostForm';

function NewPostPage({ onNavigate, onAddPost }) {
  const handleSubmit = (formData) => {
    onAddPost(formData);
    onNavigate('home');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">✍️ 새 글 작성</h1>
      <PostForm onSubmit={handleSubmit} />
      <button
        onClick={() => onNavigate('home')}
        className="mt-6 bg-white border border-black rounded px-4 py-2 hover:bg-gray-100"
      >
        ← 목록으로
      </button>
    </div>
  );
}

export default NewPostPage;
