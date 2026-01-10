import React from 'react';
import Button from '../components/UI/Button';
import { Check, AlertTriangle } from 'lucide-react';
import './Services.css';

const AnnualTesting = () => {
    return (
        <div className="service-page">
            <div className="service-hero annual-hero">
                <div className="container">
                    <h1>Annual Fire Alarm Testing & Inspection</h1>
                    <p className="service-subtitle">NFPA 72 Compliant Testing for 100% Peace of Mind.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="split-layout">
                        <div className="content-col">
                            <h2>More Than Just a Checkbox</h2>
                            <p className="lead-text">
                                Routine testing isn't just a safety choice—it’s a legal requirement. Our 'Pro' inspection covers every component of your system to ensure 100% functionality when seconds count.
                            </p>
                            <p>
                                We provide comprehensive digital reports immediately following our inspection, ensuring you are audit-ready for the Fire Marshal and Insurance providers.
                            </p>

                            <div className="alert-box">
                                <AlertTriangle size={24} />
                                <span>
                                    <strong>Compliance Note:</strong> Missed inspections can lead to severe fines and voided insurance claims.
                                </span>
                            </div>

                            <div className="checklist-section">
                                <h3>What We Test (NFPA 72 Standards)</h3>
                                <ul className="service-checklist">
                                    <li><Check size={18} /> Control panels and power supplies (primary & backup)</li>
                                    <li><Check size={18} /> Smoke and heat detector sensitivity</li>
                                    <li><Check size={18} /> Manual pull stations</li>
                                    <li><Check size={18} /> Audible and visual notification appliances (horns/strobes)</li>
                                    <li><Check size={18} /> Remote monitoring station connectivity</li>
                                    <li><Check size={18} /> Battery load testing</li>
                                </ul>
                            </div>

                            <div className="service-cta">
                                <Button variant="primary">Schedule Annual Inspection</Button>
                            </div>
                        </div>

                        <div className="visual-col">
                            {/* Placeholder for an image or graphic */}
                            <div className="service-image-placeholder" style={{ backgroundImage: 'url(/images/annual_testing.png)' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AnnualTesting;
