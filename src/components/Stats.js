import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
  return (
  <Consumer>
    { ({categories}) => {
      const meetsScore = categories.length * 50
      const totalPoints = categories.reduce( (total, category) => {
        return total+category.score;
      }, 0)
      return (
        <table className="stats">
          <tbody>
            <tr>
              <td>Score To Meet:</td>
              <td>{meetsScore}</td>
            </tr>
            <tr>
              <td>Total Points:</td>
              <td>{ totalPoints }</td>
            </tr>
          </tbody>
        </table>
      );
    }}
  </Consumer>
  );
}

export default Stats;