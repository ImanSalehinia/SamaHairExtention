import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';
import { settings } from '../data/settings';
import './Services.css';
import './Home.css';
import './Locations.css';

const methods = [
  {
    name: 'Keratin Bond Extensions',
    desc: 'Individual strands fitted using small keratin bonds for a personalised, strand-by-strand transformation — ideal for natural movement, beautiful length and discreet attachments.',
  },
  {
    name: 'Tape-In Extensions',
    desc: 'Ultra-thin, pre-taped panels applied in sandwiched sections around your natural hair — the fastest route to noticeably longer, fuller hair with a completely flat, undetectable finish.',
  },
  {
    name: 'Micro Ring Extensions',
    desc: 'Small silicone-lined rings clamp each section without heat or adhesive, giving hair that moves exactly like your own and holds up beautifully over months of wear.',
  },
  {
    name: 'Nano Ring Extensions',
    desc: 'A refined, miniature version of the micro ring — the smallest attachment point available, ideal when discretion and comfort matter most.',
  },
  {
    name: 'Clip-In Extensions',
    desc: 'No commitment, no appointment needed after your first fitting — clip in whenever you want extra length or volume, then take them out at the end of the day.',
  },
];

const faqs = [
  {
    q: 'Do you travel to clients across West London?',
    a: 'Most appointments take place at the Brentford studio, which is easily reached from Chiswick, Ealing, Kew, Isleworth, Richmond, Hounslow and the surrounding areas. Get in touch if you need to discuss travel for a group or event booking.',
  },
  {
    q: 'How far in advance should I book an appointment?',
    a: "Weekends and the run-up to events — weddings, holidays, parties — book up fastest, so 2–3 weeks' notice is recommended. Shorter-notice slots do come up, so it's always worth asking.",
  },
  {
    q: 'What should I bring to my consultation?',
    a: "Just yourself, really — though if you're after a specific colour or look, a clear photo in natural light helps enormously with matching.",
  },
  {
    q: "What's the best extension method if I've never had extensions before?",
    a: 'Tape-ins or clip-ins are usually the easiest starting point — low commitment, minimal maintenance, and a great way to see how extensions suit you before trying a longer-term method.',
  },
  {
    q: 'Is parking available near the studio?',
    a: "Yes, there's accessible parking near the Brentford studio, and it's also a short walk from local bus routes connecting Chiswick, Ealing and Hounslow.",
  },
];

export default function Locations() {
  return (
    <>
      <Helmet>
        <title>Hair Extensions in West London | Brentford, Chiswick, Ealing & More</title>
        <meta
          name="description"
          content="Sama Hair Extensions is a Brentford-based specialist serving Chiswick, Ealing, Isleworth, Kew, Richmond, Hounslow, Osterley, Syon and Hammersmith. Keratin bond, tape-in, micro ring, nano ring and clip-in extensions."
        />
        <link rel="canonical" href="https://samahair.co.uk/hair-extensions-london" />
        <meta property="og:url" content="https://samahair.co.uk/hair-extensions-london" />
        <meta property="og:title" content="Hair Extensions in West London | Sama Hair Extensions" />
        <meta
          property="og:description"
          content="Brentford-based hair extension specialist serving Chiswick, Ealing, Isleworth, Kew, Richmond, Hounslow, Osterley, Syon and Hammersmith."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Hair Extensions',
            provider: {
              '@type': 'HairSalon',
              name: 'Sama Hair Extensions',
              telephone: settings.phone,
              email: settings.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: settings.addressStreet,
                addressLocality: settings.addressLocality,
                addressRegion: settings.addressRegion,
                postalCode: settings.addressPostcode,
                addressCountry: settings.addressCountry,
              },
            },
            areaServed: locations.map(a => ({ '@type': 'Place', name: a.name })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="page-header locations-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">Serving West &amp; Greater London</span>
          <h1 className="section-title">Hair Extensions in West London <span>&amp; Across London</span></h1>
          <p>
            Based on Brentford High Street, Sama Hair Extensions welcomes clients from Brentford,
            Chiswick, Ealing, Isleworth, Hounslow, Kew, Richmond, Osterley, Syon and Hammersmith.
          </p>
          <p>
            Prefer to have your hair extensions fitted at home? We also offer a convenient mobile
            hair extension service across London, bringing professional hair extension treatments to
            you, so you can enjoy your dream hair without the hassle of long, tiring journeys across
            the city. Mobile appointments are available for an additional travel fee, confirmed
            before your booking.
          </p>
          <Link to="/contact" className="luxe-btn-primary">Book Your Free Consultation</Link>
          <p className="locations-header__tagline">Beautiful hair, expert fitting and convenience tailored to you.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="locations-intro section-pad">
        <div className="container locations-intro__inner">
          <span className="section-label">About the Studio</span>
          <h2 className="section-title">A Personal Approach to <span>Beautiful Hair</span></h2>
          <div className="divider" />
          <p>
            At Sama Hair Extensions, we believe every transformation starts with understanding your
            hair and the look you want to achieve. With over three years of hands-on experience, we
            take a personalised approach to help you find an extension method that complements your
            natural hair, lifestyle and desired result.
          </p>
          <p>
            From adding subtle volume to creating a fuller, longer look, attention to detail is at the
            heart of every appointment. We focus on careful colour matching, considered placement and
            seamless blending to create a finish that looks and feels natural.
          </p>
          <p>
            Whether you&rsquo;re trying extensions for the first time or looking for a new method, we
            provide individual guidance to help you make an informed choice for your hair.
          </p>
        </div>
      </section>

      {/* METHODS */}
      <section className="locations-methods section-pad">
        <div className="container">
          <div className="locations-methods__header">
            <span className="section-label">Every Method</span>
            <h2 className="section-title">Hair Extension <span>Services</span></h2>
            <div className="divider centered" />
          </div>
          <div className="locations-methods__grid">
            {methods.map(m => (
              <div key={m.name} className="locations-methods__card">
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="locations-methods__more">
            <Link to="/services" className="btn-gold">See Pricing &amp; Full Details</Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="locations-areas section-pad">
        <div className="container">
          <div className="locations-areas__header">
            <span className="section-label">Areas We Cover</span>
            <h2 className="section-title">West London <span>Coverage</span></h2>
            <div className="divider centered" />
          </div>
          <div className="locations-areas__grid">
            {locations.map(a => (
              <Link key={a.slug} to={`/hair-extensions-london/${a.slug}`} className="locations-areas__card">
                <h3>{a.name}</h3>
                <p>{a.cardText}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq__header">
            <span className="section-label">Good to Know</span>
            <h2 className="section-title">Booking &amp; <span>Travel FAQ</span></h2>
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
      <section className="services-cta" aria-label="Call to action">
        <div className="container services-cta__content">
          <h2>Book Your West London Appointment</h2>
          <p>Free consultation, colour match and method advice — in the Brentford studio.</p>
          <Link to="/contact" className="btn-gold">Book Now</Link>
        </div>
      </section>
    </>
  );
}
