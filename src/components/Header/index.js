import React from "react";
import {Link} from 'react-router-dom';
import Logo from './../../assets/default.svg';
import './styles.css';


const Header = props => {

    return (
        <div className="header">
            <div>
                <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/registration">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;