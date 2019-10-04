import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Score to Meet: { props.totalPoints }</span>
      <p>Points awarded as follows: "Needs Work" = 0, "Meets Requirements" = 1, "Excels" = 2</p>
    </header>
  )
}



export default Header;