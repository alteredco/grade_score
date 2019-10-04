import React from 'react';
import Counter from  './Counter';

const Category = (props) => {
  return (
    <div className="category">
      <span className="category-name">
        {props.title}
      </span>
      <Counter 
        score = {props.score}
        changeScore = { props.changeScore }
        index= { props.index }
        />
    </div>
  )
}

export default Category;