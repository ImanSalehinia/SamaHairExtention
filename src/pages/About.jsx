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
    text: 'Keratin bond extensions use individual strands attached with keratin-based bonds. They are a popular choice for clients looking for individual strand placement and natural movement.',
  },
  {
    name: 'Nano Ring Hair Extensions',
    text: 'Nano ring extensions use small rings to attach individual extension strands to natural hair. They are designed for discreet placement without traditional adhesive or heat-fused bonds.',
  },
  {
    name: 'Micro Ring and I-Tip Hair Extensions',
    text: 'Micro ring, micro bead, micro link and I-Tip extensions use small rings or beads to secure individual strands. They offer another option for clients who prefer a strand-by-strand application method.',
  },
  {
    name: 'Tape-In Hair Extensions',
    text: 'Tape-in extensions use flat adhesive panels fitted around sections of natural hair. They are popular for adding length and volume with a relatively flat attachment profile.',
  },
  {
    name: 'Weft Hair Extensions',
    text: 'Weft extensions consist of hair attached along a continuous track. Depending on the fitting technique, they may be installed using sewing, beads or other suitable methods to create fuller-looking hair.',
  },
  {
    name: 'Sew-In and Weave Hair Extensions',
    text: 'Sew-in extensions and traditional hair weaves generally involve attaching extension hair to a prepared foundation, often made using braided sections of natural hair. These methods can provide length, volume and a variety of styling options.',
  },
  {
    name: 'Clip-In Hair Extensions',
    text: 'Clip-in extensions are removable hairpieces designed to add length or volume temporarily. They can be attached and removed at home without a permanent salon installation.',
  },
  {
    name: 'Halo Hair Extensions',
    text: 'Halo extensions use an almost invisible wire or similar support to position a weft around the head, underneath the natural hair. They offer a removable option without attaching individual strands directly to the hair.',
  },
  {
    name: 'Other Hair Extension Methods',
    text: 'Other methods include hand-tied wefts, machine wefts, genius wefts, flat-tip extensions, stick-tip extensions, micro-loop extensions and crochet-based installation techniques. The suitability of each method depends on its construction, fitting process and your individual hair needs.',
  },
];

const braidStyles = [
  { name: 'Box Braids', text: 'Individual three-strand braids, often created using additional braiding hair.' },
  { name: 'Knotless Braids', text: 'A variation of box braids that starts with natural hair before extension hair is gradually incorporated.' },
  { name: 'Cornrows', text: 'Braids formed close to the scalp in straight lines or decorative patterns.' },
  { name: 'Ghana Braids', text: 'Traditional feed-in braiding styles, often featuring larger or more defined cornrows.' },
  { name: 'Fulani Braids', text: 'Decorative braiding styles commonly combining cornrows, individual braids and accessories.' },
  { name: 'Senegalese Twists', text: 'Rope-like twists created by wrapping two strands of hair together.' },
  { name: 'Marley Twists', text: 'Textured twists traditionally created with coarser-textured extension hair.' },
  { name: 'Crochet Braids', text: 'A technique in which extension hair is attached to a braided foundation using a crochet tool.' },
  { name: 'Faux Locs', text: 'Protective styles designed to create the appearance of locs using natural hair and, often, additional hair.' },
  { name: 'Feed-In Braids', text: 'Braids created by gradually adding hair to build length or thickness.' },
  { name: 'Goddess Braids', text: 'Larger, raised braids that can be styled in different patterns.' },
  { name: 'Traditional Sew-In Weaves', text: 'Extension hair attached to a braided foundation using a needle and thread.' },
];

const secondaryImage = galleryItems.find(g => g.id === 15).img;

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Sama Hair Extensions | Luxury Hair Extensions in London</title>
        <meta
          name="description"
          content="Learn about Sama Hair Extensions — luxury hair extensions in London. Explore keratin bond, nano ring, micro ring, tape-in, weft, clip-in, halo and more."
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
            <span className="section-label">Braids &amp; Protective Styles</span>
            <h2 className="section-title">Traditional Braids <span>& Modern Alternatives</span></h2>
            <div className="divider centered" />
            <p className="about-section__intro">
              Traditional braiding styles have a rich history and remain popular for their beauty,
              versatility and cultural significance. Some clients also explore hair extensions, weaves
              or alternative styling methods when they want a different way to achieve added length,
              volume or a new look. Popular traditional braiding and protective hairstyles include:
            </p>
          </div>
          <div className="about-braids__grid">
            {braidStyles.map(b => (
              <div key={b.name} className="about-braids__card">
                <h3>{b.name}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>

          <div className="about-braids__alt">
            <h3>Hair Extensions as an Alternative to Certain Braided Styles</h3>
            <p>
              If you are considering a change from traditional braids, hair extensions may offer
              another way to create length, volume and different hairstyles.
            </p>
            <p>
              For example, keratin bond, nano ring, tape-in and weft extensions can be considered by
              clients looking for flowing, loose hairstyles rather than individual braids or twists.
              Clip-in and halo extensions may also be suitable for temporary styling.
            </p>
            <p>
              However, hair extensions do not directly replace every braiding technique. The best
              choice depends on the hairstyle you want, your natural hair condition, your lifestyle
              and the amount of maintenance you prefer.
            </p>
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
            extensions, nano rings, micro rings, tape-ins, wefts or removable extensions, we can help
            you understand the options available and choose the next step towards your desired look.
          </p>
          <Link to="/contact" className="luxe-btn-primary">Book Your Consultation</Link>
          <p className="about-tagline">Sama Hair Extensions — Your Hair, Your Confidence, Your Style.</p>
        </div>
      </section>
    </>
  );
}
