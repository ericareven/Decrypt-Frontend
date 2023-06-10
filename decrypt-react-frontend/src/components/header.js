import React from 'react';
import { Link } from 'react-router-dom';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import PlantCategories from '../pages/PlantCategories';
// import './Header.css';

const Header = (props) => {
  return (
      <nav className='nav'>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to='/profile' className='link'>
                Profile
            </Link>
            <Link to='/about' className='link'>
                About
            </Link>
      </nav>
  );
}

export default Header;