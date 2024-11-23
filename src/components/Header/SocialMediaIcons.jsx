import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const SocialMediaIcons = ({ icon, href }) => {
  return (
    <li className='icon'>
      <Link to={href}>
        {icon}
      </Link>
    </li>
  );
};

export default SocialMediaIcons;