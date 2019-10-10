import React from 'react';
import Header from  './Header';
import CategoryList from  './CategoryList';
import Comment from './Comment';
import AddComment from './AddComment';
const App = () => {
    return (
        <div className="scoreboard">
          <Header />
          <CategoryList />
          <Comment />
          <AddComment />
        </div>
    );
}

export default App;