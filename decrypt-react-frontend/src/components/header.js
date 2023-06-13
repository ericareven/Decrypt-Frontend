import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
import { useSignOut } from '../hooks/useSignOut';
import { useAuthContext } from '../hooks/useAuthContext';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/header.css'

const Header = (props) => {
    const navigate = useNavigate()
    const { signOut} = useSignOut()
    const { user } = useAuthContext(/*(state) => state.auth*/)

    const onSignOut = async () => {
        await signOut();
        navigate('/');
      };



    return (
        <Navbar className='nav'>
      <Link to='/' className='nav-link link'>
        <Navbar.Brand>
            <img className='logo' src="/decrypt-logo.png" alt='Decrypt'></img>
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse>
        <Nav>
            <div className='link-container'>
              <NavDropdown title={<span>Home</span>} className='home-link'>
                <div className='nav-dropdown'>
                <NavDropdown.Item>
                        <Link to="/" className='link'>Home</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/posts" className='link'>Timeline</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/about' className='link'>About</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/signin' className='link'>Sign In</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to='/register' className='link'>Register</Link>
                    </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
            <div className='navLinks list-unstyled'>
                <ul>
                    {user ? (
                    <li>
                        <button className='button' onClick={onSignOut}>Sign Out</button>
                    </li>
                ) : null }
                </ul>    
            </div>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;

                