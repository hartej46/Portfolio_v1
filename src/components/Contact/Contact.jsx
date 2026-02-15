import React from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Copy } from 'lucide-react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="Contact">
            <div className="contact-container">
                <div className="written">
                    <h1>Get In Touch</h1>
                    <div className='line'></div>
                    <p className="p1">
                        Have a project in mind or want to collaborate? Feel free to reach out using the form
                        below or through my contact information.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="card">
                        <h2>Send a Message</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" placeholder="Name Here" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" className="send-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    <div className="info-column">
                        <div className="info-cards">
                            <div className="info-item">
                                <div className="info-icon">
                                    <Mail size={24} />
                                </div>
                                <div className="info-content">
                                    <p>Email</p>
                                    <p>reach.hartej@gmail.com</p>
                                </div>
                                <Copy className="copy-icon" size={18} />
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <Phone size={24} />
                                </div>
                                <div className="info-content">
                                    <p>Phone</p>
                                    <p>+91 9172354187</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="info-content">
                                    <p>Location</p>
                                    <p>Pune, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-section">
                            <h2>Connect with Me</h2>
                            <div className="social-links">
                                <a href="https://www.github.com/hartej46" target="_blank" rel="noopener noreferrer" className="social-btn"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/hartej46" target="_blank" rel="noopener noreferrer" className="social-btn"><Linkedin size={24} /></a>
                                <a href="#" className="social-btn"><Instagram size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
