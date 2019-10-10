import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Counter from  './Counter';

class Category extends PureComponent {
  static propTypes = {
    title : PropTypes.string.isRequired,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    const {
      title,
      index
    } = this.props;
    return (
      <div className="category">
        <span className="category-name">
        <Icon isHighScore={this.props.isHighScore}/>
          {title}
        </span>
        <Counter 
          index= { index }
          />
      </div>
    )
  }
}


export default Category;