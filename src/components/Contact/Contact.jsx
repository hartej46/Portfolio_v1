import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Copy, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState({
        loading: false,
        success: null,
        error: null
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus({ loading: false, success: null, error: 'Please fill in all fields.' })
            return
        }

        setStatus({ loading: true, success: null, error: null })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok && data.success) {
                setStatus({
                    loading: false,
                    success: data.message || 'Inquiry sent successfully! I will get back to you soon.',
                    error: null
                })
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error(data.error || 'Failed to send inquiry. Please try again.')
            }
        } catch (err) {
            setStatus({
                loading: false,
                success: null,
                error: err.message || 'Failed to send message. Please verify your SMTP settings.'
            })
        }
    }

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

                        {status.success && (
                            <div className="status-banner status-success">
                                <CheckCircle size={20} />
                                <span>{status.success}</span>
                            </div>
                        )}

                        {status.error && (
                            <div className="status-banner status-error">
                                <AlertCircle size={20} />
                                <span>{status.error}</span>
                            </div>
                        )}

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name Here"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="send-btn" disabled={status.loading}>
                                {status.loading ? (
                                    <>
                                        Sending... <Loader2 className="spinner" size={18} />
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
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
