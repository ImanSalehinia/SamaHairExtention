import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import aboutImg from '../assets/about.jpg';
import './Home.css';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '200+', label: 'Happy Clients' },
  { number: '5', label: 'Extension Methods' },
  { number: '★ 5.0', label: 'Google Rating' },
];

const whyUs = [
  {
    icon: '✦',
    title: 'Premium Quality Hair',
    desc: 'We use only 100% Remy human hair, sourced ethically for the most natural look and feel.',
  },
  {
    icon: '✦',
    title: 'Certified Specialist',
    desc: 'Sama is fully qualified and keeps up with the latest techniques and trends in the UK industry.',
  },
  {
    icon: '✦',
    title: 'Personalised Consultation',
    desc: 'Every client receives a bespoke consultation to find the perfect method and colour match.',
  },
  {
    icon: '✦',
    title: 'Long-Lasting Results',
    desc: 'Proper application and aftercare advice ensures your extensions look stunning for months.',
  },
];

const testimonials = [
  {
    name: 'Emma R.',
    location: 'London',
    text: 'Sama is absolutely amazing! My hair has never looked so beautiful. The extensions blend perfectly and feel so natural.',
  },
  {
    name: 'Charlotte T.',
    location: 'Manchester',
    text: 'I was nervous about getting extensions for the first time, but Sama made me feel so comfortable. The result is stunning!',
  },
  {
    name: 'Olivia M.',
    location: 'Birmingham',
    text: 'Three months in and they still look incredible. Sama really knows her craft. I\'ve already booked my next appointment!',
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sama Hair Extensions | Premium Hair Specialist UK</title>
        <meta name="description" content="Transform your look with Sama, a premium hair extension specialist in the UK with 3+ years of experience. Tape-in, micro ring, weft and more." />
        <link rel="canonical" href="https://samahair.co.uk/" />
        <meta property="og:url" content="https://samahair.co.uk/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'Sama Hair Extensions',
            image: 'https://samahair.co.uk/og-image.jpg',
            url: 'https://samahair.co.uk/',
            telephone: '+44-7472-113443',
            email: 'samahairextensions@gmail.com',
            priceRange: '££',
            areaServed: [
              'Brentford', 'Chiswick', 'Ealing', 'Isleworth', 'Kew',
              'Richmond upon Thames', 'Hounslow', 'Osterley', 'Syon', 'Hammersmith',
            ].map(name => ({ '@type': 'Place', name })),
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Brentford High Street',
              addressLocality: 'Brentford',
              addressRegion: 'London',
              addressCountry: 'GB',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '19:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '17:00',
              },
            ],
            sameAs: [
              'https://instagram.com/Sama_hairextensionss',
            ],
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero__bg">
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <span className="section-label">Welcome to Sama Hair Extensions</span>
          <h1 className="hero__title">
            Transform Your Hair.<br />
            <span>Elevate Your Confidence.</span>
          </h1>
          <p className="hero__sub">
            Premium hair extension specialist based in the UK — delivering natural, seamless results you'll love.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn-gold">Book a Consultation</Link>
            <Link to="/gallery" className="btn-outline">View My Work</Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* STATS */}
      <section className="stats" aria-label="Statistics">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stats__item">
              <span className="stats__number">{s.number}</span>
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SAMA */}
      <section className="about section-pad" id="about" aria-label="About Sama">
        <div className="container about__grid">
          <div className="about__image-wrap">
            <img
              src={aboutImg}
              alt="Sama – Hair Extension Specialist"
              className="about__image"
            />
            <div className="about__badge">
              <span className="about__badge-years">3+</span>
              <span className="about__badge-text">Years of Excellence</span>
            </div>
          </div>
          <div className="about__content">
            <span className="section-label">About Sama</span>
            <h2 className="section-title">
              Passion for <span>Beautiful Hair</span>
            </h2>
            <div className="divider" />
            <p>
              Hi, I'm Sama — a dedicated hair extension specialist with over 3 years of hands-on experience transforming the way my clients look and feel.
            </p>
            <p style={{ marginTop: '16px' }}>
              My journey started with a deep love for hairdressing and a passion for making people feel their most confident selves. I've trained extensively in the UK and work with only the highest-quality Remy human hair to deliver results that look completely natural.
            </p>
            <p style={{ marginTop: '16px' }}>
              Whether you're looking for extra length, volume, or a complete transformation, I'll guide you through every step — from colour matching to aftercare — so your extensions last beautifully.
            </p>
            <div className="about__tags">
              <span>Tape-In</span>
              <span>Micro Ring</span>
              <span>Nano Ring</span>
              <span>Weft</span>
              <span>Clip-In</span>
            </div>
            <Link to="/services" className="btn-gold" style={{ marginTop: '32px' }}>View Services &amp; Pricing</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SAMA */}
      <section className="why-us section-pad" aria-label="Why choose Sama">
        <div className="container">
          <div className="why-us__header">
            <span className="section-label">Why Choose Me</span>
            <h2 className="section-title">The <span>Sama Difference</span></h2>
            <div className="divider centered" />
          </div>
          <div className="why-us__grid">
            {whyUs.map((item) => (
              <div key={item.title} className="why-us__card">
                <span className="why-us__icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-pad" aria-label="Client testimonials">
        <div className="container">
          <div className="testimonials__header">
            <span className="section-label">Client Love</span>
            <h2 className="section-title">What My <span>Clients Say</span></h2>
            <div className="divider centered" />
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__location">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="container cta-banner__content">
          <h2>Ready for Your Transformation?</h2>
          <p>Book a free consultation today and let's create your perfect look.</p>
          <Link to="/contact" className="btn-gold">Book Your Appointment</Link>
        </div>
      </section>
    </>
  );
}
