import React from "react";
import Logo from './../../assets/default.svg'
import './styles.css'


const Header = props => {

    return (
        <header className="header">
            <div>
                <img src={Logo} alt="" />
            </div>

        </header>
    )
}

export default Header;