import { useState } from 'react';
import './Contact.css';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        setTimeout(() => {
            setSubmitted(false);
        }, 3000); // Reset after 3 seconds
    }

    return (

        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="contact-title">CONTACT US</h2>
                <p className="contact-subtitle">
                    We'd love to hear from you! Reach out to us with any questions, feedback, or collaboration opportunities.
                </p>
                
                {/* Success message appears ABOVE the form without unmounting it */}
                {submitted && (
                    <div className="form-success-msg">
                        [ SYSTEM RESPONSE ]: TRANSMISSION RECEIVED! WE'LL BE IN TOUCH SHORTLY.
                    </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Your Name *" required />
                    <input type="email" value={formData.email} onChange={handleChange} name="email" placeholder="Your Email *" required />
                    <textarea value={formData.message} onChange={handleChange} name="message" placeholder="Your Message *" required></textarea>
                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;