import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Gallery.css';

const filters = ['All', 'Before & After', 'Tape-In', 'Micro Ring', 'Weft', 'Colour'];

const galleryItems = [
  { id: 1,  category: 'Before & After', type: 'image', label: 'Tape-In Transformation',   desc: 'Added length & volume',    img: 'https://loremflickr.com/600/800/hair-extensions,hair?lock=1' },
  { id: 2,  category: 'Tape-In',        type: 'image', label: 'Blonde Tape-In Extensions', desc: 'Natural seamless blend',   img: 'https://loremflickr.com/600/800/hair-extensions,blonde?lock=2' },
  { id: 3,  category: 'Micro Ring',     type: 'image', label: 'Micro Ring Results',         desc: 'No heat, no damage',      img: 'https://loremflickr.com/600/800/hair-extensions,hairstyle?lock=3' },
  { id: 4,  category: 'Before & After', type: 'image', label: 'Volume Boost',               desc: 'From thin to full',       img: 'https://loremflickr.com/600/800/hair,woman,beauty?lock=4' },
  { id: 5,  category: 'Weft',           type: 'image', label: 'Weft Installation',          desc: 'Full, luscious lengths',  img: 'https://loremflickr.com/600/800/hair-extensions,long-hair?lock=5' },
  { id: 6,  category: 'Colour',         type: 'image', label: 'Balayage Extensions',        desc: 'Sun-kissed highlights',   img: 'https://loremflickr.com/600/800/balayage,hair,colour?lock=6' },
  { id: 7,  category: 'Tape-In',        type: 'image', label: 'Dark Tape-In Extensions',    desc: 'Rich, deep brunette',     img: 'https://loremflickr.com/600/800/hair,brunette,extensions?lock=7' },
  { id: 8,  category: 'Before & After', type: 'image', label: 'Complete Makeover',          desc: 'Stunning transformation', img: 'https://loremflickr.com/600/800/hairstyle,hair,woman?lock=8' },
  { id: 9,  category: 'Micro Ring',     type: 'image', label: 'Micro Ring – Brunette',      desc: 'Invisible bond',          img: 'https://loremflickr.com/600/800/hair,long,extensions?lock=9' },
  { id: 10, category: 'Colour',         type: 'image', label: 'Ombre Extensions',           desc: 'Seamless colour fade',    img: 'https://loremflickr.com/600/800/ombre,hair,colour?lock=10' },
  { id: 11, category: 'Weft',           type: 'video', label: 'Weft Installation Video',    desc: 'Watch the process',       img: 'https://loremflickr.com/900/506/hair-extensions,salon?lock=11' },
  { id: 12, category: 'Before & After', type: 'video', label: 'Transformation Video',       desc: '60 second reveal',        img: 'https://loremflickr.com/900/506/hair,beauty,woman?lock=12' },
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
              <div key={item.id} className={`gallery-item${item.type === 'video' ? ' gallery-item--video' : ''}`}>
                <div className="gallery-item__thumb">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="gallery-item__img"
                    loading="lazy"
                  />
                  {item.type === 'video' && (
                    <div className="gallery-item__play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
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
