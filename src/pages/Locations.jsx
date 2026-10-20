import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/galleryItems';
import './Gallery.css';
import './Services.css';
import './Home.css';
import './Locations.css';

const methods = [
  {
    name: 'Tape-In Extensions',
    desc: 'Ultra-thin, pre-taped wefts applied in sandwiched sections around your natural hair — the fastest route to noticeably longer, fuller hair with a completely flat, undetectable finish.',
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
    name: 'Weft Extensions',
    desc: 'Wefts fitted along hidden tracks close to the scalp for maximum volume in a single sitting — the method of choice for dramatic length and thickness.',
  },
  {
    name: 'Clip-In Extensions',
    desc: 'No commitment, no appointment needed after your first fitting — clip in whenever you want extra length or volume, then take them out at the end of the day.',
  },
];

const areas = [
  {
    name: 'Brentford',
    text: "Our home studio is based right here in Brentford, moments from Brentford Lock and the River Thames. If you're local, you can reach your appointment in minutes from Brentford High Street.",
  },
  {
    name: 'Chiswick',
    text: 'A short hop down the A4, Chiswick clients often combine their visit with a morning at Chiswick House and Gardens or a walk along the riverside.',
  },
  {
    name: 'Ealing',
    text: "Known as the 'Queen of the Suburbs', Ealing is just a few stops away — plenty of clients travel in via the Elizabeth line for a full tape-in or micro ring session.",
  },
  {
    name: 'Isleworth',
    text: 'Neighbouring Isleworth, with its riverside village charm close to Syon Park, is one of the easiest areas to reach — a quick drive or bus ride across Brentford.',
  },
  {
    name: 'Kew',
    text: 'Just across Kew Bridge from the studio, Kew clients often pair their hair appointment with a visit to the world-famous Kew Gardens.',
  },
  {
    name: 'Richmond upon Thames',
    text: "Richmond's leafy streets and riverside are a short drive via the A4 — Richmond clients regularly book in for weft and micro ring installations ahead of events.",
  },
  {
    name: 'Hounslow',
    text: 'Well connected by the Piccadilly line, Hounslow is one of our most central service areas, with easy access for clients from right across the borough.',
  },
  {
    name: 'Osterley',
    text: 'Close to Osterley Park, this quiet residential area is a favourite with return clients booking in for maintenance and re-fits.',
  },
  {
    name: 'Syon',
    text: 'The Syon Park area, just over the water from Brentford, is within easy reach for appointments — no need to travel into Central London.',
  },
  {
    name: 'Hammersmith',
    text: 'Hammersmith clients travel in via the regular bus routes connecting straight to Brentford, making the journey simple even on a lunch break.',
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
          content="Sama Hair Extensions is a Brentford-based specialist serving Chiswick, Ealing, Isleworth, Kew, Richmond, Hounslow, Osterley, Syon and Hammersmith. Tape-in, micro ring, nano ring, weft and clip-in extensions."
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
              telephone: '+44-7472-113443',
              email: 'samahairextensions@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Brentford High Street',
                addressLocality: 'Brentford',
                addressRegion: 'London',
                addressCountry: 'GB',
              },
            },
            areaServed: areas.map(a => ({ '@type': 'Place', name: a.name })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="page-header locations-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">Serving West London</span>
          <h1 className="section-title">Hair Extensions Across <span>West London</span></h1>
          <p>
            Based in Brentford, Sama Hair Extensions welcomes clients from Chiswick, Ealing, Isleworth,
            Kew, Richmond, Hounslow, Osterley, Syon and Hammersmith — every method, every hair type,
            every occasion.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="locations-intro section-pad">
        <div className="container locations-intro__inner">
          <span className="section-label">About the Studio</span>
          <h2 className="section-title">Your Local <span>Hair Extension Specialist</span></h2>
          <div className="divider" />
          <p>
            Sama is a hair extension specialist with over 3 years of hands-on experience, working from
            a private studio in Brentford, West London. Clients travel in from across the borough and
            beyond for tape-in, micro ring, nano ring, weft and clip-in extensions — all fitted with
            100% Remy human hair and a free consultation to match colour, texture and method to your
            natural hair.
          </p>
          <p>
            Below is a look at real client work — close-up application detail and full before &amp; after
            transformations — plus a breakdown of every method on offer and the West London areas
            served from the Brentford studio.
          </p>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="locations-gallery section-pad">
        <div className="container">
          <div className="locations-gallery__header">
            <span className="section-label">Real Results</span>
            <h2 className="section-title">Client <span>Transformations</span></h2>
            <div className="divider centered" />
          </div>
          <div className="locations-gallery__grid">
            {galleryItems.map(item => (
              <div key={item.id} className="locations-gallery__item">
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="locations-gallery__caption">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="locations-gallery__more">
            <Link to="/gallery" className="btn-outline">View Full Gallery</Link>
          </div>
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
            {areas.map(a => (
              <div key={a.name} className="locations-areas__card">
                <h3>{a.name}</h3>
                <p>{a.text}</p>
              </div>
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
      <section className="cta-banner" aria-label="Call to action">
        <div className="container cta-banner__content">
          <h2>Book Your West London Appointment</h2>
          <p>Free consultation, colour match and method advice — in the Brentford studio.</p>
          <Link to="/contact" className="btn-gold">Book Now</Link>
        </div>
      </section>
    </>
  );
}
