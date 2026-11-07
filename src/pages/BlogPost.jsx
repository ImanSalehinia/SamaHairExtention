import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '../data/blogPosts';
import './Gallery.css';
import './Blog.css';

const formatDate = iso =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Sama Hair Extensions Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://samahair.co.uk/blog/${post.slug}`} />
        <meta property="og:url" content={`https://samahair.co.uk/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            image: `https://samahair.co.uk${post.img}`,
            datePublished: post.date,
            author: {
              '@type': 'Organization',
              name: 'Sama Hair Extensions',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Sama Hair Extensions',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://samahair.co.uk/blog/${post.slug}`,
            },
          })}
        </script>
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header blog-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">{post.category}</span>
          <h1 className="section-title">{post.title}</h1>
          <p className="blog-post__meta">{formatDate(post.date)} · {post.readTime}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="blog-post section-pad">
        <div className="container blog-post__inner">
          <div className="blog-post__cover">
            <img src={post.img} alt={post.title} />
          </div>

          <div className="blog-post__markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </div>

          <div className="blog-post__cta">
            <h2>Ready to Get Started?</h2>
            <p>Book a free consultation and let's find the right method for your hair.</p>
            <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
          </div>

          <div className="blog-post__back">
            <Link to="/blog">← Back to All Articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
