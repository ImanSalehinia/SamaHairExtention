import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import './Services.css';

const faqs = [
  {
    q: 'How long do hair extensions last?',
    a: 'With proper care, tape-in and weft extensions last 6–8 weeks between maintenance appointments, while micro and nano ring methods last 8–12 weeks. The hair itself can last up to a year with good aftercare.',
  },
  {
    q: 'Will extensions damage my natural hair?',
    a: 'When applied and maintained correctly, hair extensions should not damage your natural hair. I always assess your hair\'s condition during consultation and recommend the best method for your hair type.',
  },
  {
    q: 'How do I maintain my extensions?',
    a: 'I provide a full aftercare kit and detailed guide with every appointment. Key tips: brush gently from the bottom up, avoid oils near the roots, use sulphate-free products, and sleep with a loose braid.',
  },
  {
    q: 'Can I colour or heat style my extensions?',
    a: 'Yes — our 100% Remy human hair extensions can be heat styled and toned. However, we recommend avoiding bleaching extensions. I\'ll colour-match your set at consultation.',
  },
  {
    q: 'Do you offer a consultation before booking?',
    a: 'Absolutely. Every client gets a thorough consultation (in-person or virtual) where we discuss your goals, assess your hair, match the colour, and recommend the best method for you.',
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services & Pricing | Sama Hair Extensions UK</title>
        <meta name="description" content="Tape-in, micro ring, nano ring, weft and clip-in hair extensions. Transparent pricing and full details from Sama Hair Extensions UK." />
        <link rel="canonical" href="https://samahair.co.uk/services" />
        <meta property="og:url" content="https://samahair.co.uk/services" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header services-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">What I Offer</span>
          <h1 className="section-title">Services &amp; <span>Pricing</span></h1>
          <p>Transparent pricing. Exceptional results. Choose the method that's right for you.</p>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map(s => (
              <article key={s.slug} className={`service-card${s.tag ? ' service-card--featured' : ''}`}>
                {s.tag && <div className="service-card__tag">{s.tag}</div>}
                <div className="service-card__header">
                  <h2>
                    <Link to={`/services/${s.slug}`}>{s.name}</Link>
                  </h2>
                  <span className="service-card__price">{s.price}</span>
                </div>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__meta">
                  <div className="service-card__meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{s.duration}</span>
                  </div>
                  <div className="service-card__meta-item">
                    <span className="meta-label">Maintenance</span>
                    <span className="meta-value">{s.maintenanceEvery}</span>
                  </div>
                </div>
                <div className="service-card__best-for">
                  <span>Best for:</span> {s.bestFor}
                </div>
                <ul className="service-card__includes">
                  {s.includes.map(inc => (
                    <li key={inc}>
                      <span className="check">✓</span> {inc}
                    </li>
                  ))}
                </ul>
                <div className="service-card__actions">
                  <Link to={`/services/${s.slug}`} className="service-card__more">More Info →</Link>
                  <Link to="/contact" className="btn-outline service-card__cta">Book This Service</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq__header">
            <span className="section-label">Got Questions?</span>
            <h2 className="section-title">Frequently <span>Asked Questions</span></h2>
            <div className="divider centered" />
          </div>
          <div className="faq-grid">
            {faqs.map(faq => (
              <div key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container services-cta__content">
          <h2>Not Sure Which Method Is Right for You?</h2>
          <p>Book a free consultation — I'll guide you to the perfect choice for your hair type and lifestyle.</p>
          <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
