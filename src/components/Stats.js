import React from 'react';

const Stats = (props) => {

  const meetsScore = props.categories.length
  const totalPoints = props.categories.reduce( (total, category) => {
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
}

export default Stats;