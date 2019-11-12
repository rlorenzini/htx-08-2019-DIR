import React from 'react';
import './App.css';

import LikeCounter from './components/LikeCounter';
import AddComments from './components/AddComments';
import CommentList from './components/CommentList';

function App() {
  return (
    <div>
      <AddComments />
      <LikeCounter />
      <CommentList />
    </div>
  );
}

export default App;
