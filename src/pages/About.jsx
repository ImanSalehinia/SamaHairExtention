import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import aboutHero from '../assets/about-hero.jpg';
import { aboutContent } from '../data/aboutContent';
import './Home.css';
import './About.css';

const extensionTypes = aboutContent.extensionTypes;
const secondaryImage = aboutContent.qualityImage;

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Sama Hair Extensions | Luxury Hair Extensions in London</title>
        <meta
          name="description"
          content="Learn about Sama Hair Extensions — luxury hair extensions in London. Explore keratin bond, nano ring, micro ring, tape-in, clip-in, halo and more."
        />
        <link rel="canonical" href="https://samahair.co.uk/about" />
        <meta property="og:url" content="https://samahair.co.uk/about" />
      </Helmet>

      {/* HERO */}
      <section className="luxe-hero about-hero" aria-label="About hero">
        <div className="container luxe-hero__box about-hero__box">
          <div
            className="luxe-hero__bg"
            style={{ backgroundImage: `url(${aboutHero})` }}
            role="img"
            aria-label="Sama Hair Extensions studio"
          />
          <div className="luxe-hero__bg-fade about-hero__bg-fade" aria-hidden="true" />
          <div className="luxe-hero__inner about-hero__inner">
            <div className="about-hero__content">
              <span className="section-label">About Us</span>
              <h1 className="section-title">About <span>Sama Hair Extensions</span></h1>
              <h2 className="about-hero__subtitle">{aboutContent.heroSubtitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: aboutContent.heroParagraph1.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
              <p>{aboutContent.heroParagraph2}</p>
              <Link to="/contact" className="luxe-btn-primary">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENSION TYPES */}
      <section className="about-types section-pad">
        <div className="container">
          <div className="about-section__header">
            <span className="section-label">The Options</span>
            <h2 className="section-title">Explore Different <span>Types of Hair Extensions</span></h2>
            <div className="divider centered" />
            <p className="about-section__intro">{aboutContent.extensionTypesIntro}</p>
          </div>
          <div className="about-types__grid">
            {extensionTypes.map(t => (
              <div key={t.name} className="about-types__card">
                <h3>{t.name}</h3>
                {t.aka && <span className="about-types__aka">{t.aka}</span>}
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAIDS */}
      <section className="about-braids section-pad">
        <div className="container">
          <div className="about-section__header">
            <span className="section-label">A New Way to Transform Your Hair</span>
            <h2 className="section-title">Love Balayage, Highlights &amp; Blonde Hair? <span>Without the Bleach.</span></h2>
            <div className="divider centered" />
            <p className="about-section__intro">{aboutContent.balayageIntro}</p>
          </div>

          <div className="about-braids__alt">
            <p>{aboutContent.balayageParagraph1}</p>
            <p>{aboutContent.balayageParagraph2}</p>
            <p className="about-braids__tagline">{aboutContent.balayageTagline}</p>
            <Link to="/contact" className="luxe-btn-primary">Explore Hair Extension Services</Link>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="about-quality section-pad">
        <div className="container about-quality__grid">
          <div className="about-quality__image">
            <img src={secondaryImage} alt="Hair extension result by Sama" loading="lazy" />
          </div>
          <div className="about-quality__content">
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Quality, <span>Personalisation</span> &amp; Hair Care</h2>
            <div className="divider" />
            <p>{aboutContent.qualityParagraph1}</p>
            <p>{aboutContent.qualityParagraph2}</p>
            <p>{aboutContent.qualityParagraph3}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="luxe-cta" aria-label="Call to action">
        <div className="container luxe-cta__content">
          <h2>Book Your Hair Extension Consultation in London</h2>
          <p>
            Contact Sama Hair Extensions to discuss your hair goals, explore suitable extension
            options and arrange a consultation. Whether you are interested in keratin bond hair
            extensions, nano rings, micro rings, tape-ins or removable extensions, we can help
            you understand the options available and choose the next step towards your desired look.
          </p>
          <Link to="/contact" className="luxe-btn-primary">Book Your Consultation</Link>
          <p className="about-tagline">Sama Hair Extensions — Your Hair, Your Confidence, Your Style.</p>
        </div>
      </section>
    </>
  );
}
