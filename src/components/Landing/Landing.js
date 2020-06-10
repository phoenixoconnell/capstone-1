import React from 'react';
import { Link } from 'react-router-dom';
import logo from './stay_weird.png';
import './Landing.css'

function Landing() {
    return (
        <div className="landingContainer">
            <img src={logo} alt="Stay Weird Logo" />
            <div>
                <Link to="/products"><button>Browse Products</button></Link>
            </div>
        </div>
    )
}

export default Landing;
