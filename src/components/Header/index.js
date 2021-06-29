import React from "react";
import {Link} from 'react-router-dom';
import Logo from './../../assets/default.svg';
import {auth} from './../../firebase/util'
import './styles.css';


const Header = props => {
    const {currentUser } = props; // using javascript destructuring feature to get the currentUser from the props
    return (
        <div className="header">
            <div>
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div>
                {!currentUser && (
                    <ul className="links">
                        <li>
                            <Link to="/registration">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                )}
                {currentUser && (
                    <ul className="links">
                        <li>
                            <span onClick={() => auth.signOut()}>Logout</span>
                        </li>
                    </ul>
                )}

            </div>
        </div>
    )
}

Header.defaultProps = { currentUser: null};

export default Header;