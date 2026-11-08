import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { locations } from '../data/locations';
import { settings } from '../data/settings';
import './Services.css';
import './Locations.css';
import './Blog.css';

export default function LocationDetail() {
  const { slug } = useParams();
  const area = locations.find(a => a.slug === slug);

  if (!area) {
    return <Navigate to="/hair-extensions-london" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`Hair Extensions in ${area.name} | Sama Hair Extensions`}</title>
        <meta name="description" content={area.cardText} />
        <link rel="canonical" href={`https://samahair.co.uk/hair-extensions-london/${area.slug}`} />
        <meta property="og:url" content={`https://samahair.co.uk/hair-extensions-london/${area.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Hair Extensions',
            areaServed: { '@type': 'Place', name: area.name },
            provider: {
              '@type': 'HairSalon',
              name: 'Sama Hair Extensions',
              telephone: settings.phone,
              email: settings.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: settings.addressStreet,
                addressLocality: settings.addressLocality,
                addressRegion: settings.addressRegion,
                postalCode: settings.addressPostcode,
                addressCountry: settings.addressCountry,
              },
            },
          })}
        </script>
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header locations-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">Areas We Cover</span>
          <h1 className="section-title">Hair Extensions in <span>{area.name}</span></h1>
          <p>{area.cardText}</p>
          <Link to="/contact" className="luxe-btn-primary">Book Your Free Consultation</Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="blog-post section-pad">
        <div className="container blog-post__inner">
          {area.img && (
            <div className="blog-post__cover">
              <img src={area.img} alt={`Hair extensions in ${area.name}`} />
            </div>
          )}

          <div className="blog-post__markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{area.body}</ReactMarkdown>
          </div>

          <div className="blog-post__cta">
            <h2>Book Your {area.name} Appointment</h2>
            <p>Free consultation, colour match and method advice — in the Brentford studio.</p>
            <Link to="/contact" className="btn-gold">Book Now</Link>
          </div>

          <div className="blog-post__back">
            <Link to="/hair-extensions-london">← Back to All Areas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
