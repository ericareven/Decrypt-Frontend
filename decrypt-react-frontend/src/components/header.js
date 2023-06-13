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

// import React from 'react';


// import {
//   Container, Row, Col, Form, Input, Button, Navbar, Nav,
//   NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
//   DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';

// const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

// const Header = () => (
//   <header>
//     <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
//     <Container>
//       <Row noGutters className="position-relative w-100 align-items-center">
      
//         <Col className="d-none d-lg-flex justify-content-start">
//           <Nav className="mrx-auto" navbar>
          
//             <NavItem className="d-flex align-items-center">
//               <NavLink className="font-weight-bold" href="/">
//                 <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
//               </NavLink>
//             </NavItem>
            
//             <NavItem className="d-flex align-items-center">
//               <NavLink className="font-weight-bold" href="/">Home</NavLink>
//             </NavItem>
            
//             <NavItem className="d-flex align-items-center">
//               <NavLink className="font-weight-bold" href="/">Electronics</NavLink>
//               </NavItem>
              
//               <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
//                 <DropdownToggle className="font-weight-bold" nav caret>fashion</DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>Men</DropdownItem>
//                   <DropdownItem>Women</DropdownItem>
//                   <DropdownItem>Baby and Kids</DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
              
//             </Nav>
//           </Col>
          
//           <Col className="d-flex justify-content-xs-start justify-content-lg-center">
//             <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>

//             </NavbarBrand>
//           </Col>
          
//           <Col className="d-none d-lg-flex justify-content-end">
//             <Form inline>
//             <Input type="search" className="mr-3" placeholder="Search React Courses" />
//               <Button type="submit" color="info" outline>Search</Button>
//             </Form>
//           </Col>
          
//         </Row>
//       </Container>
      
//     </Navbar>

//   </header>
// );

// export default Header


                