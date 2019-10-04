import React from 'react';
import Counter from  './Counter';

const Category = (props) => {
  return (
    <div className="category">
      <span className="category-name">
        <button className="remove-category" onClick={ () => props.removeCategory(props.id)}>✖</button>
        {props.title}
      </span>
      <Counter />
    </div>
  )
}

export default Category;