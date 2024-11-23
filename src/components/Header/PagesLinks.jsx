import React from 'react';
import './Header.css';

const PagesLinks = () => {
  return (
    <nav className="pages__container">
      <ul className="pages">
        <li className="page">
          <a href="#magazine">Magazine</a>
        </li>
        <li className="page">
          <a href="#authors">Authors</a>
        </li>
        <li className="page">
          <a href="#podcast">Podcast</a>
        </li>
      </ul>
    </nav>
  );
};

export default PagesLinks;
