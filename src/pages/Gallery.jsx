import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { galleryItems } from '../data/galleryItems';
import './Gallery.css';

const filters = ['All', 'Before & After', 'Tape-In', 'Micro Ring', 'Weft', 'Colour'];

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
