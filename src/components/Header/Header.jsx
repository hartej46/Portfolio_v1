import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <div className="nav-container">
                        <Link to="/">
                            <h3 className="logo">Hartejsingh</h3>
                        </Link>

                        <div className="nav-links-wrapper" id="mobile-menu-2">
                            <ul className="nav-links">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/project" className={({ isActive }) =>
                                        `nav-link ${isActive ? "active" : ""}`
                                    }>
                                        Project
                                    </NavLink>
                                </li>
                                <li>
                                    
                                    <NavLink to="/contact" className={({ isActive }) =>
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
        </>
    );
}