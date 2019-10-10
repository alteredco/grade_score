import React from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = () => {
  return (
    <Consumer>
      { ({categories, actions}) => {
        const highScore =  actions.highScore;
        return (
        <React.Fragment>
          {categories.map( ( category, index) => 
            <Category 
              { ...category}
              key={ category.id.toString() }
              index={ index }
              isHighScore = {highScore === category.score}
              />
          )}
        </React.Fragment>
        );
      }}
    </Consumer>
  );
}

CategoryList.propTypes = {
  isHighScore: PropTypes.func
}

export default CategoryList;