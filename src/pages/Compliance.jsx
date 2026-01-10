import React from 'react';
import { FileText, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './Compliance.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h4>{question}</h4>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
        </div>
    );
};

const Compliance = () => {
    return (
        <div className="compliance-page">
            <div className="page-header text-center">
                <div className="container">
                    <h1>Compliance Center</h1>
                    <p>Resources, Guides, and Answers for Property Managers.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <h2>Latest Insights</h2>
                    <div className="blog-grid">
                        <div className="blog-card">
                            <div className="blog-image">
                                <FileText size={48} className="text-secondary" />
                            </div>
                            <div className="blog-content">
                                <h3>2026 Fire Safety Codes: What Property Managers Need to Know</h3>
                                <p>Stay ahead of the new NFPA updates affecting high-rise and commercial properties in Los Angeles.</p>
                                <a href="#" className="read-more">Read Guide &rarr;</a>
                            </div>
                        </div>
                        <div className="blog-card">
                            <div className="blog-image">
                                <FileText size={48} className="text-secondary" />
                            </div>
                            <div className="blog-content">
                                <h3>How to Prepare Your Building for a Fire Marshal Inspection</h3>
                                <p>A step-by-step checklist to ensure you pass your annual audit with flying colors.</p>
                                <a href="#" className="read-more">Read Guide &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-bg">
                <div className="container faq-section">
                    <div className="text-center mb-4">
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about fire alarm compliance.</p>
                    </div>

                    <div className="faq-list">
                        <FAQItem
                            question="How often does my fire alarm system need to be tested in California?"
                            answer="Per NFPA 72 and California Fire Code, full system testing is required annually. Additionally, visual inspections and battery checks are often required quarterly. We manage this schedule for you."
                        />
                        <FAQItem
                            question="What is included in a standard annual fire alarm test?"
                            answer="Our certified technicians test all control panel functions, every smoke detector, heat detector, pull station, horn, strobe, and visual notification device according to the strict NFPA testing checklist."
                        />
                        <FAQItem
                            question="Why are digital reports important?"
                            answer="Digital reports provide immediate, tamper-evident records that are easy to store, share, and present during an insurance audit or fire marshal inspection, proving due diligence."
                        />
                        <FAQItem
                            question="Are you licensed and certified?"
                            answer="Yes. Our lead technicians hold NICET certification in Fire Alarm Systems, and we adhere strictly to NFPA standards. We are fully insured and familiar with LAFD permitting and protocols."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Compliance;
