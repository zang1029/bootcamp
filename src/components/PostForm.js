import React, { useState } from 'react';

function PostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert('제목과 내용을 입력하세요');
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-center">
      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용을 입력하세요"
        className="w-full border border-gray-300 p-2 h-32 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="bg-white border border-black rounded px-4 py-2 hover:bg-gray-100"
      >
        작성 완료
      </button>
    </form>
  );
}

export default PostForm;