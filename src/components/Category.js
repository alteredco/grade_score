import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Counter from  './Counter';

class Category extends PureComponent {
  static propTypes = {
    title : PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    const {
      title,
      score,
      changeScore,
      index
    } = this.props;
    return (
      <div className="category">
        <span className="category-name">
        <Icon isHighScore={this.props.isHighScore}/>
          {title}
        </span>
        <Counter 
          score = {score}
          changeScore = { changeScore }
          index= { index }
          />
      </div>
    )
  }
}


export default Category;