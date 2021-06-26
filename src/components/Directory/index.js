import React from 'react'
import Men from './../../assets/mens.jpeg'
import Women from './../../assets/women.jpeg'
import './styles.css'
const Directory = (props) => {
    const menStyle = {
        backgroundImage: `url(${Men})`
    }

    const womenStyle = {
        backgroundImage: `url(${Women})`
        }
  return (
    <div className="directory">
        <div className="wrap">
            <div className="item" style={menStyle}>
                <a href="">Show Men</a>
            </div>
            <div className="item" style={womenStyle}>
                <a href="">Show Women</a>
            </div>
        </div>
    </div>
  );
};

export default Directory;
