import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
import { useSignOut } from '../hooks/useSignOut';
import { useAuthContext } from '../hooks/useAuthContext';


const Header = (props) => {
    const navigate = useNavigate()
    const { signOut} = useSignOut()
    const { user } = useAuthContext(/*(state) => state.auth*/)

    const onSignOut = async () => {
        await signOut();
        navigate('/');
      };

    // const onLogout = () => {
    //     dispatch(signOut())
    //     dispatch(reset())
    //     navigate('/')
    //   }

    return (
        <header className='header'>
            <nav className='nav'>
                <ul>
                    {user ? (
                    <li>
                        <button className='btn' onClick={onSignOut}>
                        Sign Out
                        </button>
                    </li>
                ) : (
                    <>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to='/about' className='link'>
                            About
                        </Link>
                        <Link to='/signin' className='link'>
                            Sign In
                        </Link>
                        <Link to='/register' className='link'>
                            Register
                        </Link>
                    </>
                    )}
                </ul>    
            </nav>
        </header>
    );
}

export default Header;