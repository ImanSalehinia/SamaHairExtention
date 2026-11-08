import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import { homeContent } from '../data/homeContent';
import { settings } from '../data/settings';
import './Home.css';

const heroBenefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
        <path d="M3 8h18M9 3l3 5 3-5M12 8l-3 13M12 8l3 13" />
      </svg>
    ),
    title: 'Premium Quality',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21c0-5-3-7-3-11a3 3 0 016 0c0 4-3 6-3 11z" />
        <path d="M12 14c-1-3-4-4-7-3 1 3 4 5 7 3zM12 14c1-3 4-4 7-3-1 3-4 5-7 3z" />
      </svg>
    ),
    title: 'Natural Look & Feel',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.8 8.6c0 4.4-8.8 10.4-8.8 10.4S3.2 13 3.2 8.6a4.6 4.6 0 018.8-1.8 4.6 4.6 0 018.8 1.8z" />
      </svg>
    ),
    title: 'Tailored to You',
  },
];

const benefitsStrip = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 3c2 5-2 7 0 12M9 3c2 5-2 7 0 12M13 3c2 5-2 7 0 12M17 3c2 5-2 7 0 12" />
      </svg>
    ),
    title: '100% Human Hair',
    desc: 'Premium quality for a natural look and feel.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
      </svg>
    ),
    title: 'Seamless & Natural',
    desc: 'Lightweight, comfortable and blends beautifully.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 3c2 5-2 7 0 12M9 3c2 5-2 7 0 12M13 3c2 5-2 7 0 12M17 3c2 5-2 7 0 12" />
      </svg>
    ),
    title: 'Instant Volume & Length',
    desc: 'Perfect for fine or thin hair — achieve fuller hair.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Long-Lasting',
    desc: 'With proper care, extensions can last for months.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.5 15.5M14.5 14.5L20 20M8.5 8.5L10 10" />
      </svg>
    ),
    title: 'Customised to You',
    desc: 'Tailored for your hair goals, length and style.',
  },
];

const featureCards = homeContent.featureCards.map(c => ({ ...c, key: c.title }));
const showcase = homeContent.recentWork;

const latestBlogPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sama Hair Extensions | Premium Hair Specialist UK</title>
        <meta name="description" content="Transform your look with Sama, a premium hair extension specialist in the UK with 3+ years of experience. Keratin bond, tape-in, micro ring and more." />
        <link rel="canonical" href="https://samahair.co.uk/" />
        <meta property="og:url" content="https://samahair.co.uk/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            name: 'Sama Hair Extensions',
            image: 'https://samahair.co.uk/og-image.jpg',
            url: 'https://samahair.co.uk/',
            telephone: settings.phone,
            email: settings.email,
            priceRange: '££',
            areaServed: [
              'Brentford', 'Chiswick', 'Ealing', 'Isleworth', 'Kew',
              'Richmond upon Thames', 'Hounslow', 'Osterley', 'Syon', 'Hammersmith',
            ].map(name => ({ '@type': 'Place', name })),
            address: {
              '@type': 'PostalAddress',
              streetAddress: settings.addressStreet,
              addressLocality: settings.addressLocality,
              addressRegion: settings.addressRegion,
              postalCode: settings.addressPostcode,
              addressCountry: settings.addressCountry,
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
              settings.instagramUrl,
              settings.googleMapsUrl,
            ],
          })}
        </script>
      </Helmet>

      <div className="home-page luxe">
        {/* HERO */}
        <section className="luxe-hero" aria-label="Hero">
          <div className="container luxe-hero__box">
            <div
              className="luxe-hero__bg"
              style={{ backgroundImage: `url(${homeContent.heroImage})` }}
              role="img"
              aria-label="Long, voluminous hair extensions by Sama"
            />
            <div className="luxe-hero__bg-fade" aria-hidden="true" />
            <span className="luxe-hero__script">More Than Hair <span className="luxe-hero__script-heart">♡</span></span>
            <div className="luxe-hero__inner">
              <div className="luxe-hero__content">
                <span className="luxe-hero__eyebrow">{homeContent.heroEyebrow}</span>
                <h1 className="luxe-hero__title">
                  {homeContent.heroTitleMain}<br />
                  <span>{homeContent.heroTitleHighlight}</span>
                </h1>
                <p className="luxe-hero__sub">
                  {homeContent.heroSubtitle}
                </p>
                <Link to="/contact" className="luxe-btn-primary">
                  Book Free Consultation <span aria-hidden="true">→</span>
                </Link>
                <div className="luxe-hero__benefits">
                  {heroBenefits.map((b) => (
                    <div key={b.title} className="luxe-hero__benefit">
                      <span className="luxe-hero__benefit-icon">{b.icon}</span>
                      <span>{b.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS STRIP */}
        <section className="luxe-strip" aria-label="Why choose Sama Hair Extensions">
          <div className="container">
            <div className="luxe-strip__panel">
              {benefitsStrip.map((b) => (
                <div key={b.title} className="luxe-strip__item">
                  <span className="luxe-strip__icon">{b.icon}</span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="luxe-cards" aria-label="Explore">
          <div className="container luxe-cards__grid">
            {featureCards.map((c) => (
              <div key={c.key} className="luxe-card">
                <div className="luxe-card__photo">
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
                <div className="luxe-card__info">
                  <span className="luxe-card__label">{c.label}</span>
                  <h3>{c.title}</h3>
                  <Link to={c.ctaLink} className="luxe-btn-secondary">
                    {c.ctaText} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SAMA */}
        <section className="about section-pad" id="about" aria-label="About Sama">
          <div className="container about__grid">
            <div className="about__image-wrap">
              <img
                src={homeContent.aboutImage}
                alt="Sama – Hair Extension Specialist"
                className="about__image"
              />
              <div className="about__badge">
                <span className="about__badge-years">{homeContent.aboutBadgeYears}</span>
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
                {homeContent.aboutParagraph1}
              </p>
              <p style={{ marginTop: '16px' }}>
                {homeContent.aboutParagraph2}
              </p>
              <p style={{ marginTop: '16px' }}>
                {homeContent.aboutParagraph3}
              </p>
              <div className="about__tags">
                <span>Keratin Bond</span>
                <span>Tape-In</span>
                <span>Micro Ring</span>
                <span>Nano Ring</span>
                <span>Clip-In</span>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
                <Link to="/services" className="luxe-btn-primary">View Services &amp; Pricing</Link>
                <Link to="/about" className="recent-work__areas-link">Learn more about Sama →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG TEASER */}
        <section className="home-blog section-pad" aria-label="From the blog">
          <div className="container">
            <div className="home-blog__header">
              <span className="section-label">The Journal</span>
              <h2 className="section-title">Hair Tips &amp; <span>Guides</span></h2>
              <div className="divider centered" />
            </div>
            <div className="home-blog__list">
              {latestBlogPosts.slice(0, 4).map((post, i) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.slug}
                  className={`home-blog__row${i % 2 === 1 ? ' home-blog__row--reverse' : ''}`}
                >
                  <div className="home-blog__row-img">
                    <img src={post.img} alt={post.title} loading="lazy" />
                  </div>
                  <div className="home-blog__row-text">
                    <span className="home-blog__cat">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="home-blog__row-link">Read Article <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="home-blog__more">
              <Link to="/blog" className="recent-work__areas-link">
                See all articles <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* RECENT WORK */}
        <section className="recent-work section-pad" aria-label="Recent work">
          <div className="container">
            <div className="recent-work__header">
              <span className="section-label">Real Results</span>
              <h2 className="section-title">Recent <span>Transformations</span></h2>
              <div className="divider centered" />
              <p className="recent-work__intro">
                Every set is fitted by hand in the Brentford studio — here's a look at recent client
                work, from close-up application detail to full before &amp; after reveals.
              </p>
            </div>
            <div className="recent-work__grid">
              {showcase.map((item) => (
                <div key={item.label} className="recent-work__item">
                  <img src={item.img} alt={item.label} loading="lazy" />
                  <div className="recent-work__caption">
                    <span className="recent-work__cat">{item.category}</span>
                    <h3>{item.label}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="recent-work__more">
              <Link to="/gallery" className="luxe-btn-secondary">View Full Gallery</Link>
              <Link to="/hair-extensions-london" className="recent-work__areas-link">
                See areas we cover across West London →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="luxe-cta" aria-label="Call to action">
          <div className="container luxe-cta__content">
            <h2>Ready for Your Transformation?</h2>
            <p>Book a free consultation today and let's create your perfect look.</p>
            <Link to="/contact" className="luxe-btn-primary">Book Your Appointment</Link>
          </div>
        </section>
      </div>
    </>
  );
}
