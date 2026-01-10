import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <span className="text-primary">Fire</span>AlarmTestingPro
                    </Link>
                    <p className="footer-mission">
                        NFPA-certified fire alarm testing and inspection services for Los Angeles. Keeping compliance simple and your building safe.
                        100% Audit-Ready Digital Reports.
                    </p>
                    <div className="cert-logos">
                        <div className="cert-badge">NFPA Member</div>
                        <div className="cert-badge">NICET Certified</div>
                        <div className="cert-badge">Fully Insured</div>
                        <div className="cert-badge">Local in LA</div>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/services/annual-testing">Annual Fire Alarm Testing</Link></li>
                        <li><Link to="/services/maintenance">Maintenance & Repair</Link></li>
                        <li><Link to="/services/lighting">Emergency Lighting Testing</Link></li>
                        <li><Link to="/compliance">Compliance Consulting</Link></li>
                        <li><Link to="/compliance">Digital Documentation</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="icon-gold" />
                            <span>Serving Greater Los Angeles, Orange County, Ventura County & SFV</span>
                        </li>
                        <li>
                            <Phone size={18} className="icon-gold" />
                            <a href="tel:555-123-4567">(555) 123-4567</a>
                        </li>
                        <li>
                            <Mail size={18} className="icon-gold" />
                            <a href="mailto:service@firealarmpro.com">service@firealarmpro.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} FireAlarmTestingPro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
