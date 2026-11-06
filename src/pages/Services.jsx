import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import './Services.css';

const faqCategories = [
  {
    category: 'Choosing the Right Hair Extensions',
    items: [
      {
        q: 'Which hair extension method is right for me?',
        a: [
          { type: 'p', text: 'The best hair extension method depends on your natural hair condition, hair thickness, lifestyle and the result you want to achieve.' },
          { type: 'p', text: "We offer Tape-In, Keratin Bond, Micro Ring, Nano Ring and Clip-In extensions. During your free consultation, we'll assess your hair and recommend the most suitable method for your needs." },
        ],
      },
      {
        q: 'What types of hair extensions do you offer?',
        a: [
          {
            type: 'list',
            intro: 'We offer five options:',
            items: [
              'Tape-In Extensions: Lightweight adhesive panels for adding length and volume.',
              'Keratin Bond Extensions: Individual strands attached using small keratin bonds.',
              'Micro Ring Extensions: Individual strands secured with small rings.',
              'Nano Ring Extensions: Individual strands fitted using smaller, discreet rings.',
              'Clip-In Extensions: Temporary extensions that can be attached and removed whenever you like.',
            ],
          },
        ],
      },
      {
        q: 'Do you offer 100% human hair extensions?',
        a: [
          { type: 'p', text: 'We offer premium 100% human hair extensions, available in different lengths and volumes. During your consultation, we\'ll help you choose a suitable shade and length for a natural-looking blend.' },
        ],
      },
      {
        q: 'Can hair extensions make my hair look thicker without adding much length?',
        a: [
          { type: 'p', text: "Yes. Hair extensions can add fullness and volume as well as length. A Half Head application may be suitable if you're mainly looking for thicker, fuller-looking hair. The right amount depends on your natural hair and desired result." },
        ],
      },
      {
        q: 'What hair extension lengths do you offer?',
        a: [
          {
            type: 'list',
            intro: 'We offer four lengths:',
            items: ['16 inches (40cm)', '18 inches (45cm)', '20 inches (50cm)', '22 inches (55cm)'],
          },
          { type: 'p', text: "We'll help you choose a length that blends naturally with your own hair and suits your desired look." },
        ],
      },
    ],
  },
  {
    category: 'Hair Extension Prices & Appointments',
    items: [
      {
        q: 'How much do hair extensions cost in London?',
        a: [
          {
            type: 'list',
            intro: 'Our installation prices start from:',
            items: [
              'Tape-In Extensions: £110',
              'Keratin Bond Extensions: £150',
              'Micro / Nano Ring Extensions: £140',
              'Clip-In Services: £60',
            ],
          },
          { type: 'p', text: 'For Tape-In, Keratin Bond and Micro / Nano Ring extensions, the cost of the hair is separate from installation. Your final price depends on the method, hair length and volume.' },
        ],
      },
      {
        q: 'Do I need to buy the hair separately?',
        a: [
          { type: 'p', text: "For our Tape-In, Keratin Bond and Micro / Nano Ring services, hair and installation are priced separately. We'll help you choose the right hair length, colour and amount during your consultation." },
        ],
      },
      {
        q: 'Do you offer Half Head and Full Head extensions?',
        a: [
          { type: 'p', text: "Yes. We offer Half Head (50g) and Full Head (100g) options for Tape-In, Keratin Bond and Micro / Nano Ring extensions. The most suitable volume depends on your natural hair and the result you're looking for." },
        ],
      },
      {
        q: 'How long does a hair extension appointment take?',
        a: [
          { type: 'p', text: 'Application time depends on the method, hair length and amount of hair required.' },
          {
            type: 'list',
            intro: 'As a general guide:',
            items: [
              'Tape-In: Approximately 2–3 hours.',
              'Keratin Bond: Approximately 3–5 hours.',
              'Micro / Nano Ring: Approximately 3–4 hours.',
              'Clip-In: Approximately 15–30 minutes.',
            ],
          },
          { type: 'p', text: "We'll confirm the expected appointment time when arranging your service." },
        ],
      },
      {
        q: 'Do you offer a free hair extension consultation?',
        a: [
          { type: 'p', text: "Yes! We offer a free consultation, either in person or virtually. We'll discuss your hair goals, assess your natural hair, match your colour and recommend a suitable extension method." },
        ],
      },
      {
        q: 'Can I book a hair extension appointment online?',
        a: [
          { type: 'p', text: "You can contact us through our website to arrange your free consultation. We'll discuss your preferred method and help coordinate a suitable appointment." },
        ],
      },
    ],
  },
  {
    category: 'Hair Extension Maintenance & Aftercare',
    items: [
      {
        q: 'How long do hair extensions last?',
        a: [
          { type: 'p', text: 'The time between maintenance appointments depends on the extension method and your natural hair growth. Tape-In extensions typically need repositioning every 6–8 weeks, while Micro / Nano Ring extensions generally need maintenance every 8–10 weeks.' },
          { type: 'p', text: "The lifespan of the hair itself depends on its quality, how often it's worn and how well it's cared for." },
        ],
      },
      {
        q: 'Will hair extensions damage my natural hair?',
        a: [
          { type: 'p', text: "Hair extensions can cause breakage or stress if they are unsuitable for your hair, applied incorrectly or poorly maintained. That's why we assess your natural hair before recommending a method and provide personalised aftercare advice to help reduce unnecessary tension and damage." },
        ],
      },
      {
        q: 'How do I look after my hair extensions?',
        a: [
          { type: 'p', text: 'Proper aftercare helps keep your extensions looking beautiful for longer. We provide personalised aftercare guidance with your appointment.' },
          {
            type: 'list',
            intro: 'Some important tips include:',
            items: [
              'Brush gently, starting from the ends and working upwards.',
              'Use suitable hair extension products.',
              'Avoid applying oils or conditioner directly to attachment points.',
              'Dry your hair and attachment areas properly after washing.',
              'Avoid sleeping with wet hair.',
              'Follow the aftercare instructions for your chosen method.',
            ],
          },
        ],
      },
      {
        q: 'Can I wash, blow-dry and heat-style my extensions?',
        a: [
          { type: 'p', text: 'Yes. Human hair extensions can generally be washed, blow-dried and styled with heat. However, gentle handling and suitable products are important. Always use heat protection and follow the aftercare advice for your extension method.' },
        ],
      },
      {
        q: 'Can I colour my hair extensions?',
        a: [
          { type: 'p', text: 'Our extensions are available in different shades to help create your desired look, including blonde, brunette and highlighted effects.' },
          { type: 'p', text: 'We recommend choosing the correct shade during your consultation rather than chemically lightening the extensions. If you want to create a balayage or highlighted look without bleaching your natural hair, different extension shades can be blended to add colour and dimension.' },
        ],
      },
      {
        q: 'Can I sleep, swim or exercise with hair extensions?',
        a: [
          { type: 'p', text: 'This depends on your extension method. Clip-In extensions should be removed before sleeping, showering or swimming.' },
          { type: 'p', text: 'For permanent methods, follow the personalised guidance we provide on sleeping, exercise and water exposure.' },
        ],
      },
      {
        q: 'Do you offer professional hair extension removal?',
        a: [
          { type: 'p', text: 'Yes. Professional removal is available for our extension methods. Removal prices depend on the method and amount of hair. Please contact us with details of your current extensions so we can advise you before booking.' },
        ],
      },
    ],
  },
  {
    category: 'Hair Extensions in Brentford & Across London',
    items: [
      {
        q: 'Where is your hair extension salon located?',
        a: [
          { type: 'p', text: 'Our salon is based on Brentford High Street in West London. We welcome clients from Brentford, Chiswick, Ealing, Hounslow, Isleworth, Richmond and surrounding areas.' },
        ],
      },
      {
        q: 'Do you offer mobile hair extension services across London?',
        a: [
          { type: 'p', text: 'Yes. Alongside salon appointments in Brentford, we offer mobile hair extension services across London, subject to availability. An additional travel fee applies and will be confirmed with you before booking.' },
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services & Pricing | Sama Hair Extensions UK</title>
        <meta name="description" content="Tape-in, micro ring, nano ring, weft and clip-in hair extensions. Transparent pricing and full details from Sama Hair Extensions UK." />
        <link rel="canonical" href="https://samahair.co.uk/services" />
        <meta property="og:url" content="https://samahair.co.uk/services" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header services-header">
        <div className="page-header__overlay" />
        <div className="container page-header__content">
          <span className="section-label">What I Offer</span>
          <h1 className="section-title">Hair Extension <span>Services &amp; Pricing</span></h1>
          <p className="services-header__tagline">
            More Hair <span className="services-header__tagline-heart">♥</span> More You
          </p>
          <div className="services-header__intro">
            <p>
              Discover your perfect look with premium 100% human hair extensions. Whether you're
              looking for extra length, natural-looking volume or a complete hair transformation,
              we offer different extension methods tailored to your hair type, style and
              individual goals.
            </p>
            <p>
              All appointments start with a personalised consultation and colour match to help you
              choose the right method and hair.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map(s => (
              <article key={s.slug} className={`service-card${s.tag ? ' service-card--featured' : ''}`}>
                {s.tag && <div className="service-card__tag">{s.tag}</div>}
                <div className="service-card__header">
                  <h2>
                    <Link to={`/services/${s.slug}`}>{s.name}</Link>
                  </h2>
                  <span className="service-card__price">{s.price}</span>
                </div>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__meta">
                  <span className="meta-label">{s.metaLabel}</span>
                  <div className="service-card__meta-lines">
                    <span className="meta-value">{s.metaLine1}</span>
                    <span className="meta-value">{s.metaLine2}</span>
                  </div>
                </div>
                <div className="service-card__best-for">
                  <span>Best for:</span> {s.bestFor}
                </div>
                <ul className="service-card__includes">
                  {s.includes.map(inc => (
                    <li key={inc}>
                      <span className="check">✓</span> {inc}
                    </li>
                  ))}
                </ul>
                <div className="service-card__actions">
                  <Link to={`/services/${s.slug}`} className="service-card__more">More Info →</Link>
                  <Link to="/contact" className="btn-outline service-card__cta">Book This Service</Link>
                </div>
              </article>
            ))}
          </div>
          <p className="services-note">
            Please note: Hair prices are separate from installation costs. The final price depends
            on your chosen method, hair length and volume.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq__header">
            <span className="section-label">Got Questions?</span>
            <h2 className="section-title">Frequently <span>Asked Questions</span></h2>
            <div className="divider centered" />
            <p className="faq__intro">
              Looking for professional hair extensions in London? At Sama Hair Extensions, we offer
              personalised hair extension services in Brentford and across London. Find answers to
              common questions about our extension methods, prices, application, maintenance and
              aftercare.
            </p>
          </div>
          {faqCategories.map(cat => (
            <div key={cat.category} className="faq-category">
              <h3 className="faq-category__title">{cat.category}</h3>
              <div className="faq-grid">
                {cat.items.map(item => (
                  <div key={item.q} className="faq-item">
                    <h4>{item.q}</h4>
                    {item.a.map((block, j) =>
                      block.type === 'list' ? (
                        <div className="faq-item__list" key={j}>
                          {block.intro && <p>{block.intro}</p>}
                          <ul>
                            {block.items.map(li => <li key={li}>{li}</li>)}
                          </ul>
                        </div>
                      ) : (
                        <p key={j}>{block.text}</p>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container services-cta__content">
          <h2>Not Sure Which Method Is Right for You?</h2>
          <p>Book a free consultation — I'll guide you to the perfect choice for your hair type and lifestyle.</p>
          <Link to="/contact" className="btn-gold">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
