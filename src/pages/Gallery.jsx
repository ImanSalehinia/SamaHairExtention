import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import closeupMicroring from '../assets/gallery/closeup-microring.jpg';
import hairrootTapein from '../assets/gallery/hairroot-tapein.jpg';
import redStrandDetail from '../assets/gallery/red-strand-detail.jpg';
import blondeSectioning from '../assets/gallery/blonde-sectioning.jpg';
import balayageBlend from '../assets/gallery/balayage-blend.jpg';
import coldfusionApplication from '../assets/gallery/coldfusion-application.jpg';
import multitoneBonds from '../assets/gallery/multitone-bonds.jpg';
import wavyBlondeFinish from '../assets/gallery/wavy-blonde-finish.jpg';
import bondedTipsFan from '../assets/gallery/bonded-tips-fan.jpg';
import goldenBrownTransformation from '../assets/gallery/golden-brown-transformation.jpg';
import pixieToLongDark from '../assets/gallery/pixie-to-long-dark.jpg';
import vividRedColour from '../assets/gallery/vivid-red-colour.jpg';
import longStraightTransformation from '../assets/gallery/long-straight-transformation.jpg';
import wavyBrunetteTransformation from '../assets/gallery/wavy-brunette-transformation.jpg';
import longWavyBlondeTransformation from '../assets/gallery/long-wavy-blonde-transformation.jpg';
import bobToLongBalayage from '../assets/gallery/bob-to-long-balayage.jpg';
import pixieToCurlyLong from '../assets/gallery/pixie-to-curly-long.jpg';
import shortToLongWavy from '../assets/gallery/short-to-long-wavy.jpg';
import straightBlondeLength from '../assets/gallery/straight-blonde-length.jpg';
import vividRedLongStraight from '../assets/gallery/vivid-red-long-straight.jpg';
import './Gallery.css';

const filters = ['All', 'Before & After', 'Tape-In', 'Micro Ring', 'Weft', 'Colour'];

const galleryItems = [
  { id: 1,  category: 'Micro Ring',     label: 'Micro Ring Application',       desc: 'Precision bead placement, no damage',    img: closeupMicroring },
  { id: 2,  category: 'Tape-In',        label: 'Seamless Root Blend',          desc: 'Natural-looking root application',       img: hairrootTapein },
  { id: 3,  category: 'Colour',         label: 'Vivid Red Strand Detail',      desc: 'Custom colour-matched extensions',       img: redStrandDetail },
  { id: 4,  category: 'Micro Ring',     label: 'Blonde Micro Ring Sectioning', desc: 'Precise placement for a natural fall',   img: blondeSectioning },
  { id: 5,  category: 'Colour',         label: 'Balayage Root Blend',          desc: 'Seamless dark-to-blonde transition',     img: balayageBlend },
  { id: 6,  category: 'Tape-In',        label: 'Cold Fusion Application',      desc: 'Damage-free bonding technique',          img: coldfusionApplication },
  { id: 7,  category: 'Micro Ring',     label: 'Multi-Tone Bond Detail',       desc: 'Custom blended colour extensions',       img: multitoneBonds },
  { id: 8,  category: 'Weft',           label: 'Wavy Blonde Finish',           desc: 'Full, voluminous length',                img: wavyBlondeFinish },
  { id: 9,  category: 'Micro Ring',     label: 'Bonded Tip Detail',            desc: 'Multi-tone micro ring extensions',       img: bondedTipsFan },
  { id: 10, category: 'Before & After', label: 'Golden Brown Transformation',  desc: 'Added length and dimension',             img: goldenBrownTransformation },
  { id: 11, category: 'Before & After', label: 'Pixie to Long Transformation', desc: 'Dramatic length change',                 img: pixieToLongDark },
  { id: 12, category: 'Colour',         label: 'Vivid Red Makeover',           desc: 'Bold colour transformation',             img: vividRedColour },
  { id: 13, category: 'Before & After', label: 'Sleek Length Transformation',  desc: 'Silky straight extensions',              img: longStraightTransformation },
  { id: 14, category: 'Before & After', label: 'Wavy Brunette Transformation', desc: 'Natural volume and waves',               img: wavyBrunetteTransformation },
  { id: 15, category: 'Before & After', label: 'Long Wavy Blonde Transformation', desc: 'Beachy waves and length',             img: longWavyBlondeTransformation },
  { id: 16, category: 'Before & After', label: 'Bob to Long Balayage',         desc: 'From bob to flowing length',             img: bobToLongBalayage },
  { id: 17, category: 'Before & After', label: 'Pixie to Curly Length',        desc: 'Full curly transformation',              img: pixieToCurlyLong },
  { id: 18, category: 'Before & After', label: 'Short to Long Wavy',           desc: 'Natural wavy extensions',                img: shortToLongWavy },
  { id: 19, category: 'Before & After', label: 'Blonde Length Boost',          desc: 'Extra length and fullness',              img: straightBlondeLength },
  { id: 20, category: 'Colour',         label: 'Vivid Red, Long & Straight',   desc: 'Sleek bold red finish',                  img: vividRedLongStraight },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === active);

  return (
    <>
      <Helmet>
        <title>Gallery | Sama Hair Extensions UK</title>
        <meta name="description" content="Browse Sama's portfolio of hair extension transformations — tape-in, micro ring, weft, colour and before & after results." />
        <link rel="canonical" href="https://samahair.co.uk/gallery" />
        <meta property="og:url" content="https://samahair.co.uk/gallery" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header gallery-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">My Work</span>
          <h1 className="section-title">The <span>Gallery</span></h1>
          <p>Real transformations. Real results. Every look is uniquely crafted for each client.</p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters" role="tablist" aria-label="Gallery filter">
            {filters.map(f => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                className={`gallery-filter-btn${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-item__thumb">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="gallery-item__img"
                    loading="lazy"
                  />
                  <div className="gallery-item__overlay">
                    <div className="gallery-item__info">
                      <h3>{item.label}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="gallery-item__cat">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="container gallery-cta__content">
          <h2>Love What You See?</h2>
          <p>Book your appointment and let's create your perfect look.</p>
          <Link to="/contact" className="btn-gold">Book Now</Link>
        </div>
      </section>
    </>
  );
}
