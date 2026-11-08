import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { services } from '../data/services';
import { galleryItems } from '../data/galleryItems';
import './Services.css';
import './ServiceDetail.css';

const placeholderImageIds = [1, 2, 6, 8];
const placeholderImages = placeholderImageIds.map(id => galleryItems.find(g => g.id === id));

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${service.name} | Sama Hair Extensions UK`}</title>
        <meta name="description" content={service.desc} />
        <link rel="canonical" href={`https://samahair.co.uk/services/${service.slug}`} />
        <meta property="og:url" content={`https://samahair.co.uk/services/${service.slug}`} />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header services-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">{service.heroLabel || service.tag || 'Service'}</span>
          <h1 className="section-title">{service.name}</h1>
          <p>{service.tagline}</p>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="service-detail-info">
        <div className="container service-detail-info__grid">
          <div className="service-detail-info__item">
            <span className="meta-label">{service.priceLabel}</span>
            <span className="service-detail-info__value">{service.priceValue}</span>
          </div>
          <div className="service-detail-info__item">
            <span className="meta-label">{service.durationLabel}</span>
            <span className="service-detail-info__value">{service.durationValue}</span>
          </div>
          <div className="service-detail-info__item">
            <span className="meta-label">Maintenance</span>
            <span className="service-detail-info__value">{service.maintenanceValue}</span>
          </div>
          <div className="service-detail-info__item service-detail-info__cta">
            <Link to="/contact" className="btn-gold">Book This Service</Link>
          </div>
        </div>
      </section>

      {/* STAGGERED CONTENT BLOCKS */}
      <section className="service-detail-blocks section-pad">
        <div className="container">
          {service.sections.map((block, i) => (
            <div
              key={block.title}
              className={`service-detail-block${i % 2 === 1 ? ' service-detail-block--reverse' : ''}`}
            >
              <div className="service-detail-block__image">
                <img src={block.img || placeholderImages[i].img} alt={block.title} loading="lazy" />
              </div>
              <div className="service-detail-block__text">
                <span className="service-detail-block__num">0{i + 1}</span>
                <h2>{block.title}</h2>
                <div className="service-detail-block__markdown">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.body}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container services-cta__content">
          <h2>Ready to Book Your {service.name}?</h2>
          <p>Free consultation, colour match and method advice — in the Brentford studio.</p>
          <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
          <div className="service-detail-back">
            <Link to="/services">← Back to All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
