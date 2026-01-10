import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../UI/Button';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <span className="logo-fire">Fire</span>Alarm<span className="logo-pro">TestingPro</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
                    <NavLink to="/compliance" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Compliance</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About/Areas</NavLink>
                </nav>

                <div className="header-actions">
                    <a href="tel:555-123-4567" className="phone-link">
                        <Phone size={18} />
                        <span>(555) 123-4567</span>
                    </a>
                    <Button variant="primary">Get a Quote</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <nav className="mobile-nav">
                        <Link to="/" onClick={toggleMenu} className="mobile-nav-link">Home</Link>
                        <Link to="/services" onClick={toggleMenu} className="mobile-nav-link">Services</Link>
                        <Link to="/compliance" onClick={toggleMenu} className="mobile-nav-link">Compliance</Link>
                        <Link to="/about" onClick={toggleMenu} className="mobile-nav-link">Areas Served</Link>
                        <div className="mobile-actions">
                            <Button variant="primary" style={{ width: '100%' }}>Get a Quote</Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
