import React from 'react';
import { Consumer } from  './Context/';
import PropTypes from 'prop-types';

const Counter = ({index}) => {
  return (
    <Consumer>
      { ({categories, actions}) => (
        <div className="counter">
          <button className="counter-action decrement" onClick={ () => actions.changeScore(index, -50) }> - </button>
          <span className="counter-score">{ categories[index].score }</span>
          <button className="counter-action increment" onClick={ () => actions.changeScore(index, +50) }> +</button>
    </div>
      )}
    </Consumer>
  );
}

Counter.propTypes = {
  index: PropTypes.number
}

export default Counter;