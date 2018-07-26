import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';
 
const Header = () => (
  <header>
    <h1>Hyphen Auth Demo</h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/private'>Private</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        {
          !isAuthenticated() && (
            <li><Link to='/login'>Login</Link></li>
          )
        }
        {
          isAuthenticated() && (
            <li><Link to='/logout'>Logout</Link></li>
          )
        }
      </ul>
    </nav>
  </header>
)

export default Header;