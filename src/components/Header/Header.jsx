import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-container">
                    <Link to="/" onClick={closeMenu}>
                        <h3 className="logo">Hartejsingh</h3>
                    </Link>

                    {/* Hamburger Button */}
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            )}
                        </svg>
                    </button>

                    <div className={`nav-links-wrapper ${isMenuOpen ? 'open' : ''}`} id="mobile-menu-2">
                        <ul className="nav-links">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" onClick={closeMenu} className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }>
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}