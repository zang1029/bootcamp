import React from 'react';
import PostItem from '../components/PostItem';

function Home({ posts, onNavigate }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📋 게시글 목록</h1>
      <button
        className="bg-white border border-black rounded px-4 py-2 hover:bg-gray-100 mb-6"
        onClick={() => onNavigate('new')}
      >
        ✍️ 새 글 작성
      </button>

      {posts.length === 0 ? (
        <p className="text-gray-500">📝 아직 작성된 게시글이 없습니다.</p>
      ) : (
        posts.map((post) => (
          <PostItem key={post.id} post={post} onClick={() => onNavigate('detail', post)} />
        ))
      )}
    </div>
  );
}

export default Home;