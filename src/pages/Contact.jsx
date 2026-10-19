import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const serviceOptions = [
  'Tape-In Extensions',
  'Micro Ring Extensions',
  'Nano Ring Extensions',
  'Weft Extensions',
  'Clip-In Extensions',
  'Not Sure – Free Consultation',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Please enter a valid email address.';
    if (!form.service) e.service = 'Please select a service.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment | Sama Hair Extensions UK</title>
        <meta name="description" content="Book your hair extension appointment with Sama. Get in touch for a free consultation or to reserve your slot." />
        <link rel="canonical" href="https://samahair.co.uk/contact" />
        <meta property="og:url" content="https://samahair.co.uk/contact" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header contact-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">Book Your <span>Appointment</span></h1>
          <p>Ready to transform your look? Fill in the form and I'll be in touch within 24 hours.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* INFO PANEL */}
          <aside className="contact-info">
            <div className="contact-info__block">
              <span className="section-label">Contact Details</span>
              <h2>Let's Talk</h2>
              <div className="divider" />
            </div>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-info__label">Phone / WhatsApp</span>
                  <a href="tel:+447472113443" className="contact-info__value">+44 7472 113443</a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-info__label">Email</span>
                  <a href="mailto:samahairextensions@gmail.com" className="contact-info__value">samahairextensions@gmail.com</a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-info__label">Instagram</span>
                  <a href="https://instagram.com/samahairextensionss" target="_blank" rel="noreferrer" className="contact-info__value">@samahairextensionss</a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-info__label">Location</span>
                  <span className="contact-info__value">United Kingdom</span>
                  <span className="contact-info__sub">Exact address provided upon booking</span>
                </div>
              </div>
            </div>

            <div className="contact-info__hours">
              <h3>Working Hours</h3>
              <div className="hours-grid">
                <span>Monday – Friday</span><span>9:00am – 7:00pm</span>
                <span>Saturday</span><span>9:00am – 5:00pm</span>
                <span>Sunday</span><span>By appointment</span>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">✓</div>
                <h2>Thank You, {form.name}!</h2>
                <p>Your enquiry has been received. I'll be in touch within 24 hours to confirm your appointment.</p>
                <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',service:'',message:'' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2>Send an Enquiry</h2>
                <p className="contact-form__sub">Fill in the details below and I'll get back to you within 24 hours.</p>

                <div className="form-row">
                  <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 7000 000000"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                  <div className={`form-group${errors.service ? ' form-group--error' : ''}`}>
                    <label htmlFor="service">Service of Interest *</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <span className="form-error">{errors.service}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Additional Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your hair goals, preferred dates, or any questions you have…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <p className="form-privacy">
                  Your details are kept private and only used to respond to your enquiry.
                </p>

                <button type="submit" className="btn-gold form-submit">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
