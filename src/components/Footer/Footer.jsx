import github from "../../assets/github.svg";
import Instagram from '../../assets/instagram-svgrepo-com.svg'
import Linkedin from '../../assets/linkedin-svgrepo-com.svg'
import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'
import './Footer.css'

import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="footer-me">
                        <h2>Hartejsingh Sandhu</h2>
                        <p>Creating beautifully designed web experiences <br /> that engage and inspire.</p>
                        <div className="social">
                            <a href="https://www.github.com/hartej46" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="social-img github" /></a>
                            <a href="#" className="social-img instagram"><img src={Instagram} alt="Instagram" /></a>
                            <a href="https://www.linkedin.com/in/hartej46" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" className="social-img linkedin" /></a>
                        </div>
                    </div>
                    <div className="Navigation">
                        <h3>Navigation</h3>
                        <ul className="footer-nav">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h1>Contact</h1>
                        <p> <img src={email} alt="" className="email" /> reach.hartej@gmail.com</p>
                        <p> <img src={phone} alt="" className="phone" />+91 9172354187</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer