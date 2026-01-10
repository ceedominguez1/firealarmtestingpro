import React from 'react';
import Button from '../components/UI/Button';
import { CheckCircle, FileText, Award, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Professional Fire Alarm Testing & Inspection Services.</h1>
                    <p className="hero-sub">
                        Keeping your business compliant and your people safe. We provide NFPA-certified fire alarm testing with 100% digital documentation for audit-ready peace of mind.
                    </p>
                    <div className="hero-cta">
                        <Button variant="primary">Get a Free Quote</Button>
                        <Button variant="white" style={{ marginLeft: '1rem' }}>Schedule Inspection</Button>
                    </div>
                </div>
            </section>

            {/* Introduction Paragraph */}
            <section className="section intro-section">
                <div className="container">
                    <p className="lead-text text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        Is your Los Angeles property meeting NFPA 72 and California fire code requirements? <strong>FireAlarmTestingPro</strong> delivers professional, reliable fire alarm testing and inspection services designed for property managers and facility teams. We eliminate the stress of annual fire alarm inspections with certified expertise, seamless scheduling, and instant digital reports that satisfy fire marshals and insurance providers. Ensure life safety system compliance and protect your assets.
                    </p>
                </div>
            </section>

            {/* Trust Bar */}
            <div className="trust-bar">
                <div className="container">
                    <span>Trusted by local businesses in Los Angeles</span>
                    {/* Add fast-scrolling logos or just text for now */}
                </div>
            </div>

            {/* The "Pro" Advantage Section */}
            <section className="section section-advantages">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose FireAlarmTestingPro? Your Local Compliance Partner</h2>
                        <p>Property managers across Greater Los Angeles trust us to maintain their critical life safety systems.</p>
                    </div>

                    <div className="grid-3">
                        <div className="card">
                            <div className="icon-wrapper">
                                <Award size={32} />
                            </div>
                            <h3>Certified & Code-Compliant Expertise</h3>
                            <p>Our technicians are NICET-certified and continuously trained on the latest NFPA 72 (2026) standards and California fire codes. You can trust accurate, up-to-date testing.</p>
                        </div>

                        <div className="card">
                            <div className="icon-wrapper">
                                <CheckCircle size={32} />
                            </div>
                            <h3>Zero-Gap Compliance Scheduling</h3>
                            <p>Never miss a quarterly or annual fire alarm test again. Our proactive reminder system and flexible scheduling ensure your property remains in continuous compliance.</p>
                        </div>

                        <div className="card">
                            <div className="icon-wrapper">
                                <FileText size={32} />
                            </div>
                            <h3>Audit-Ready Digital Documentation</h3>
                            <p>Receive detailed, professional reports in your inbox instantly after inspection. Our digital logs provide clear proof of compliance for fire department audits and insurance reviews.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section section-bg">
                <div className="container text-center">
                    <h2>Client Testimonials: Trusted by LA Property Managers</h2>
                    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />)}
                            </div>
                            <blockquote>
                                "FireAlarmTestingPro made our annual audit a breeze. The digital reports were exactly what our insurance company asked for. Their team is professional and punctual."
                            </blockquote>
                            <cite>— Sarah J., Commercial Property Manager, Downtown LA</cite>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />)}
                            </div>
                            <blockquote>
                                "As a facility director for multiple sites, their proactive scheduling is a lifesaver. I never worry about missing a testing deadline. Their NICET certification gives us full confidence."
                            </blockquote>
                            <cite>— Mark T., Facility Director, Westside Portfolio</cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Secure Your Compliance Section */}
            <section className="section cta-section text-center">
                <div className="container">
                    <h2>Ready to Secure Your Compliance? Don't Wait for a Violation.</h2>
                    <p>Protect your building, your occupants, and your liability. Contact FireAlarmTestingPro today for straightforward pricing and reliable service.</p>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Button variant="primary">Free Quote</Button>
                        <Button variant="secondary">Schedule Inspection</Button>
                    </div>
                    <p style={{ marginTop: '1.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
                        Call Our Compliance Team: <a href="tel:5551234567" className="text-primary">(555) 123-4567</a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
