import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { services } from '../data/services';
import { servicesFaq } from '../data/servicesFaq';
import './Services.css';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services & Pricing | Sama Hair Extensions UK</title>
        <meta name="description" content="Keratin bond, tape-in, micro ring, nano ring and clip-in hair extensions. Transparent pricing and full details from Sama Hair Extensions UK." />
        <link rel="canonical" href="https://samahair.co.uk/services" />
        <meta property="og:url" content="https://samahair.co.uk/services" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header services-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">What I Offer</span>
          <h1 className="section-title">Hair Extension <span>Services &amp; Pricing</span></h1>
          <p className="services-header__tagline">
            More Hair <span className="services-header__tagline-heart">♥</span> More You
          </p>
          <div className="services-header__intro">
            <p>
              Discover your perfect look with premium 100% human hair extensions. Whether you're
              looking for extra length, natural-looking volume or a complete hair transformation,
              we offer different extension methods tailored to your hair type, style and
              individual goals.
            </p>
            <p>
              All appointments start with a personalised consultation and colour match to help you
              choose the right method and hair.
            </p>
          </div>
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
                  <span className="meta-label">{s.metaLabel}</span>
                  <div className="service-card__meta-lines">
                    <span className="meta-value">{s.metaLine1}</span>
                    <span className="meta-value">{s.metaLine2}</span>
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
          <p className="services-note">
            Please note: Hair prices are separate from installation costs. The final price depends
            on your chosen method, hair length and volume.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq__header">
            <span className="section-label">{servicesFaq.sectionLabel}</span>
            <h2 className="section-title">{servicesFaq.sectionTitleMain} <span>{servicesFaq.sectionTitleHighlight}</span></h2>
            <div className="divider centered" />
            <p className="faq__intro">{servicesFaq.intro}</p>
          </div>
          {servicesFaq.categories.map(cat => (
            <div key={cat.category} className="faq-category">
              <h3 className="faq-category__title">{cat.category}</h3>
              <div className="faq-grid">
                {cat.items.map(item => (
                  <div key={item.q} className="faq-item">
                    <h4>{item.q}</h4>
                    <div className="faq-item__markdown">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.a}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
