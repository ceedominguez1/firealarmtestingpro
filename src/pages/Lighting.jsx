import React from 'react';
import Button from '../components/UI/Button';
import { Lightbulb, BatteryCharging } from 'lucide-react';
import './Services.css';

const Lighting = () => {
    return (
        <div className="service-page">
            <div className="service-hero lighting-hero">
                <div className="container">
                    <h1>Emergency Lighting & Exit Sign Testing</h1>
                    <p className="service-subtitle">Ensure safe egress during power failures.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="split-layout">
                        <div className="content-col">
                            <h2>Don't Be Left in the Dark</h2>
                            <p className="lead-text">
                                Emergency lights and exit signs must remain illuminated for 90 minutes during a power failure.
                                Battery degradation is the #1 cause of failure during real emergencies.
                            </p>

                            <div className="bundle-offer">
                                <h3>💡 Pro Tip: Bundle & Save</h3>
                                <p>
                                    Combine your Emergency Lighting test with your Annual Fire Alarm Inspection for discounted pricing and a single disruption-free visit.
                                </p>
                                <Button variant="primary">Get Bundle Pricing</Button>
                            </div>

                            <h3>Our 90-Minute Test Includes:</h3>
                            <ul className="service-checklist">
                                <li><Lightbulb size={18} /> Load testing of battery backup systems</li>
                                <li><BatteryCharging size={18} /> Verifying charging circuit functionality</li>
                                <li><Lightbulb size={18} /> Bulb and lamp inspection</li>
                                <li><Lightbulb size={18} /> Beam alignment and positioning check</li>
                            </ul>
                        </div>

                        <div className="visual-col">
                            <div className="service-image-placeholder" style={{ backgroundImage: 'url(/images/lighting.png)' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lighting;
