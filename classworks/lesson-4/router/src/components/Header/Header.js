import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <ul>
        <a href="#">LOGO</a>
        <li>
          <a href="#">SIGN IN</a>
        </li>
        <li>
          <a href="#">SIGN UP</a>
        </li>
        <li>
          <a href="#">SIGN OUT</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
