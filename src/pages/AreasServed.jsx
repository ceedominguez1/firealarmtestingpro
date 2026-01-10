import React from 'react';
import Button from '../components/UI/Button';
import { MapPin } from 'lucide-react';
import './AreasServed.css';

const AreasServed = () => {
    return (
        <div className="areas-page">
            <div className="areas-hero">
                <div className="container text-center">
                    <h1>Fire Alarm Testing Services in Los Angeles</h1>
                    <p>Proudly serving Southern California businesses with local expertise.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="areas-content text-center">
                        <h2>Providing Fire Alarm Testing in Los Angeles and Surrounding Counties</h2>
                        <p className="lead-text" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                            We are your local fire alarm experts, conveniently serving Los Angeles County, Orange County, Ventura County, and the San Fernando Valley. From high-rises in DTLA to industrial complexes in the Inland Empire, we ensure your compliance.
                        </p>

                        <div className="map-placeholder">
                            {/* Map Placeholder */}
                            <span>Map of Service Area</span>
                        </div>

                        <div className="cities-grid">
                            <div className="city-group">
                                <h3>Los Angeles County</h3>
                                <ul>
                                    <li><MapPin size={16} /> Downtown LA</li>
                                    <li><MapPin size={16} /> Santa Monica</li>
                                    <li><MapPin size={16} /> Long Beach</li>
                                    <li><MapPin size={16} /> Pasadena</li>
                                    <li><MapPin size={16} /> Torrance</li>
                                </ul>
                            </div>
                            <div className="city-group">
                                <h3>Orange County</h3>
                                <ul>
                                    <li><MapPin size={16} /> Irvine</li>
                                    <li><MapPin size={16} /> Anaheim</li>
                                    <li><MapPin size={16} /> Santa Ana</li>
                                    <li><MapPin size={16} /> Costa Mesa</li>
                                    <li><MapPin size={16} /> Newport Beach</li>
                                </ul>
                            </div>
                            <div className="city-group">
                                <h3>Inland Empire</h3>
                                <ul>
                                    <li><MapPin size={16} /> Riverside</li>
                                    <li><MapPin size={16} /> San Bernardino</li>
                                    <li><MapPin size={16} /> Ontario</li>
                                    <li><MapPin size={16} /> Rancho Cucamonga</li>
                                </ul>
                            </div>
                        </div>

                        <div className="areas-cta">
                            <h3>Need service in your area?</h3>
                            <Button variant="primary">Check Availability</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AreasServed;
