import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import './Services.css'; // Reusing service styles

const Services = () => {
    return (
        <div className="service-page">
            <div className="service-hero" style={{ backgroundImage: 'url(/images/maintenance.png)' }}>
                <div className="container">
                    <h1>Our Fire Safety Services</h1>
                    <p className="service-subtitle">Comprehensive testing, maintenance, and compliance solutions.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3>Annual Testing</h3>
                            <p style={{ flex: 1, marginBottom: '1.5rem' }}>Full NFPA 72 compliance testing of all components—control panels, detectors, and notification appliances.</p>
                            <Link to="/services/annual-testing">
                                <Button variant="outline" style={{ width: '100%' }}>Learn More</Button>
                            </Link>
                        </div>

                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3>Maintenance & Repair</h3>
                            <p style={{ flex: 1, marginBottom: '1.5rem' }}>Troubleshooting, battery replacement, and prompt repair services to minimize system downtime.</p>
                            <Link to="/services/maintenance">
                                <Button variant="outline" style={{ width: '100%' }}>Learn More</Button>
                            </Link>
                        </div>

                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3>Emergency Lighting</h3>
                            <p style={{ flex: 1, marginBottom: '1.5rem' }}>Ensures egress pathways are illuminated per code requirements during a power failure.</p>
                            <Link to="/services/lighting">
                                <Button variant="outline" style={{ width: '100%' }}>Learn More</Button>
                            </Link>
                        </div>

                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3>Sprinkler & Suppression</h3>
                            <p style={{ flex: 1, marginBottom: '1.5rem' }}>Coordination for integrated fire sprinkler and suppression system compliance inspections.</p>
                            <Button variant="outline" style={{ width: '100%' }}>Enquire Now</Button>
                        </div>

                        <div className="card text-center" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <h3>Compliance Consulting</h3>
                            <p style={{ flex: 1, marginBottom: '1.5rem' }}>Guidance on local Los Angeles Fire Department (LAFD) requirements and professional record-keeping.</p>
                            <Link to="/compliance">
                                <Button variant="outline" style={{ width: '100%' }}>View Resources</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
