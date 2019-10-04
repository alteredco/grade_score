import React from 'react';
import Stats from './Stats';

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
            <td>"Meets Requirements"= 1,</td>
         </tr>
         <tr>
          <td> "Excels"= 2</td>
          </tr>
       </tbody>
      </table>
    </header>
  )
}

export default Header;