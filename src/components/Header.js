import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({categories, title}) => {
  return (
    <header>
      <Stats 
        categories= {categories}
      />
      <h1>{ title }</h1>
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

Header.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object)
}

Header.defaultProps = {
  title: 'Peer Review Score'
}

export default Header;