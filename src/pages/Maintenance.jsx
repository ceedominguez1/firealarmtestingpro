import React from 'react';
import Button from '../components/UI/Button';
import { Wrench, ShieldAlert } from 'lucide-react';
import './Services.css';

const Maintenance = () => {
    return (
        <div className="service-page">
            <div className="service-hero maintenance-hero">
                <div className="container">
                    <h1>Fire Alarm Maintenance & Repair</h1>
                    <p className="service-subtitle">Prevent False Alarms. Avoid Heavy Fines.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="split-layout">
                        <div className="content-col">
                            <h2>System Reliability Experts</h2>
                            <p className="lead-text">
                                A malfunctioning fire alarm is more than a nuisance; it's a liability.
                                Regular maintenance is the single best way to prevent false alarms—a huge pain point that leads to costly fire department response fees.
                            </p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <ShieldAlert className="text-primary" size={32} />
                                    <h3>Emergency Repair</h3>
                                    <p>24/7 Response for critical system failures to get you back online fast.</p>
                                </div>
                                <div className="feature-item">
                                    <Wrench className="text-primary" size={32} />
                                    <h3>Preventative Care</h3>
                                    <p>Cleaning sensors and tightening connections to stop problems before they start.</p>
                                </div>
                            </div>

                            <p>
                                Don't let dirty sensors or loose wiring disrupt your business. Our technicians carry a wide stock of replacement parts to resolve issues on the first visit whenever possible.
                            </p>

                            <div className="service-cta">
                                <Button variant="primary">Request Maintenance</Button>
                            </div>
                        </div>
                        <div className="visual-col">
                            <div className="service-image-placeholder" style={{ backgroundImage: 'url(/images/maintenance.png)' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Maintenance;
