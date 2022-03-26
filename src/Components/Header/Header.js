import React from 'react';
import { Link } from 'react-router-dom';

import abhibuslogo from '../../images/logo.png';
import './Header.css';

export default function Header() {
    return (
        <>
            <header className="bg-light d-flex align-items-center justify-content-between justify-content-md-around">
                <img src={abhibuslogo} height="55" width="130px" alt="abhibus logo" />
                <nav className="navOption">
                    <i className="fas fa-bars d-block d-lg-none"></i>
                    <div className="d-none d-lg-block">
                        <Link to="/bus">Bus</Link>
                        <Link to="/trains">Trains</Link>
                        <Link to="/hotels">Hotels</Link>
                        <Link to="/rentals">Rentals</Link>
                        <Link to="/mybookings">My Bookings</Link>
                        <button type="button" className="btn btn-warning p-1">
                            <Link to="/">
                                Login</Link>
                        </button>
                    </div>

                </nav>
            </header>
            <hr className="m-0" />
        </>
    )
}
