import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Gallery.css';
import './Blog.css';

const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Hair Extension Tips &amp; Guides | Sama Hair Extensions Blog</title>
        <meta
          name="description"
          content="Advice on choosing, styling and caring for your hair extensions, from the Sama Hair Extensions studio in Brentford."
        />
        <link rel="canonical" href="https://samahair.co.uk/blog" />
        <meta property="og:url" content="https://samahair.co.uk/blog" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header blog-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">The Journal</span>
          <h1 className="section-title">Hair Extension <span>Tips &amp; Guides</span></h1>
          <p>
            Advice on choosing, styling and caring for your hair extensions, from the Sama Hair
            Extensions studio in Brentford.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-list section-pad">
        <div className="container">
          <div className="blog-grid">
            {sortedPosts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <div className="blog-card__img">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card__body">
                  <span className="blog-card__meta">{post.category} · {post.readTime}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="blog-card__link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
