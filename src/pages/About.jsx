import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import aboutHero from '../assets/about-hero.jpg';
import { galleryItems } from '../data/galleryItems';
import './Home.css';
import './About.css';

const extensionTypes = [
  {
    name: 'Keratin Bond Hair Extensions',
    aka: 'K-Tip / U-Tip / Pre-Bonded',
    text: 'Individual strands of premium human hair are attached using small keratin bonds, creating a natural-looking finish with beautiful movement. Ideal for adding length and volume with discreet, strand-by-strand placement.',
  },
  {
    name: 'Nano & Micro Ring Hair Extensions',
    aka: 'Nano Rings / Micro Rings',
    text: 'Individual hair extension strands are attached using small rings or beads, without glue or heat during application. A versatile method for adding natural-looking length and volume with discreet attachments.',
  },
  {
    name: 'Tape-In Hair Extensions',
    text: 'Lightweight adhesive panels are carefully applied to sections of your natural hair. A popular choice for adding length and volume with a flat, seamless finish.',
  },
  {
    name: 'Clip-In Hair Extensions',
    text: 'A temporary and flexible option for adding instant length and volume. Clip-in extensions can be easily attached and removed, making them ideal for special occasions or occasional styling.',
  },
];

const secondaryImage = galleryItems.find(g => g.id === 15).img;

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
              <h2 className="about-hero__subtitle">Luxury Hair Extensions in London for Every Style</h2>
              <p>
                At <strong>Sama Hair Extensions</strong>, we believe beautiful hair is about more than
                length. It is about confidence, individuality and finding a hairstyle that makes you
                feel your best.
              </p>
              <p>
                Based in London, we specialise in hair extensions designed to add length, volume and
                fullness while creating a natural-looking blend with your own hair. Whether you want
                longer, fuller hair, a subtle transformation or a glamorous new look, our aim is to help
                you explore the options that suit your hair goals and personal style.
              </p>
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
            <p className="about-section__intro">
              There are many types of hair extensions available, each offering different benefits
              depending on your natural hair, desired result, lifestyle and maintenance preferences.
            </p>
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
            <p className="about-section__intro">
              Dreaming of lighter shades, beautiful highlights or a balayage look? You don&rsquo;t
              always need to bleach or chemically colour your natural hair to achieve the look you
              love.
            </p>
          </div>

          <div className="about-braids__alt">
            <p>
              With premium 100% human hair extensions, you can add blonde, caramel, honey or
              lighter-toned pieces to your natural hair, creating beautiful dimension, contrast and a
              sun-kissed finish without chemically lightening your own hair.
            </p>
            <p>
              Whether you love subtle highlights, face-framing blonde pieces, a balayage-inspired
              blend or a complete colour transformation, hair extensions offer a versatile way to
              experiment with colour while keeping your natural hair colour untouched.
            </p>
            <p className="about-braids__tagline">Your dream colour. No bleach needed. Just beautiful hair.</p>
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
            <p>
              At Sama Hair Extensions, we believe that choosing the right method is just as important
              as choosing the desired length and colour.
            </p>
            <p>
              We encourage clients to consider their natural hair condition, styling preferences and
              maintenance requirements before selecting an extension method. Appropriate application,
              professional removal where required and suitable aftercare are important parts of the
              extension experience.
            </p>
            <p>
              Our goal is to help you understand your options and find an approach that complements
              your natural hair and desired look.
            </p>
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
