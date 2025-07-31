import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import NewPostPage from './pages/NewPostPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  const [page, setPage] = useState('home');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const navigate = (targetPage, post = null) => {
    setPage(targetPage);
    setSelectedPost(post);
  };

  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now() };
    setPosts([postWithId, ...posts]);
  };

  let content;
  if (page === 'home') content = <Home posts={posts} onNavigate={navigate} />;
  else if (page === 'new') content = <NewPostPage onNavigate={navigate} onAddPost={addPost} />;
  else if (page === 'detail') content = <PostDetailPage post={selectedPost} onNavigate={navigate} />;
  else content = <div className="text-center text-red-500">404 Not Found</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-200 rounded-xl shadow-md p-6 text-center min-h-[600px]">
        {content}
      </div>
    </div>
  );
}

export default App;