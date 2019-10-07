import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
  return (
    <header>
      <Stats 
        categories= {props.categories}
      />
      <h1>{ props.title }</h1>
      <table className="criteria">
        <tbody>
          <tr>
            <td>Points awarded as follows:</td>
          </tr>
          <tr>
            <td>"Needs Work" = 0,</td>
          </tr>
          <tr>
            <td>"Meets Requirements"= 50,</td>
         </tr>
         <tr>
          <td> "Excels"= 100</td>
          </tr>
       </tbody>
      </table>
      <Stopwatch />
    </header>
  )
}

export default Header;