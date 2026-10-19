import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    name: 'Tape-In Extensions',
    price: 'From £180',
    duration: '2–3 hours',
    maintenanceEvery: '6–8 weeks',
    desc: 'The most popular method — ultra-thin wefts with medical-grade adhesive tape. Lightweight, invisible, and incredibly natural looking.',
    bestFor: 'Adding length & volume with minimal damage',
    includes: ['Consultation & colour match', 'Full application', 'Styling', 'Aftercare kit & guide'],
    tag: 'Most Popular',
  },
  {
    name: 'Micro Ring Extensions',
    price: 'From £250',
    duration: '3–4 hours',
    maintenanceEvery: '8–10 weeks',
    desc: 'Individual strands attached with tiny metal rings — no heat, no glue. Perfect for long-term wear with maximum hair health.',
    bestFor: 'Long-term wear & fine hair types',
    includes: ['Full consultation', 'Strand-by-strand application', 'Styling finish', 'Detailed aftercare advice'],
    tag: null,
  },
  {
    name: 'Nano Ring Extensions',
    price: 'From £280',
    duration: '3–4 hours',
    maintenanceEvery: '8–12 weeks',
    desc: 'The smallest, most discreet extension method available. Nano rings are half the size of micro rings for the most invisible result.',
    bestFor: 'Very fine hair & maximum discretion',
    includes: ['In-depth consultation', 'Nano ring application', 'Blow-dry & styling', 'Aftercare pack'],
    tag: 'Premium',
  },
  {
    name: 'Weft Extensions',
    price: 'From £220',
    duration: '2–3 hours',
    maintenanceEvery: '6–8 weeks',
    desc: 'Hand-tied or machine wefts sewn close to the scalp for dramatic volume and length. A salon favourite for transformations.',
    bestFor: 'Dramatic volume & length transformations',
    includes: ['Consultation', 'Weft fitting & sewing', 'Full blow-dry', 'Aftercare guidance'],
    tag: null,
  },
  {
    name: 'Clip-In Extensions',
    price: 'From £60',
    duration: '30 min lesson',
    maintenanceEvery: 'On demand',
    desc: 'The flexible, non-committal option — clip in for special occasions or daily use. I\'ll teach you how to apply and style them yourself.',
    bestFor: 'Occasional wear & beginners',
    includes: ['Full clip-in set', 'Application lesson', 'Styling tips', 'Matching colour guide'],
    tag: null,
  },
];

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
              <article key={s.name} className={`service-card${s.tag ? ' service-card--featured' : ''}`}>
                {s.tag && <div className="service-card__tag">{s.tag}</div>}
                <div className="service-card__header">
                  <h2>{s.name}</h2>
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
                <Link to="/contact" className="btn-outline service-card__cta">Book This Service</Link>
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
