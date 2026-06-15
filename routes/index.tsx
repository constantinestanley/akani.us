import { createFileRoute } from '@tanstack/react-router'
import {
  BarChart3,
  Building2,
  Palette,
  CalendarCheck,
  FileText,
  ArrowRight,
  CheckCircle,
  Mail,
  Globe,
  Award,
  Briefcase,
  Cpu,
  TrendingUp,
  Shield,
  Layers,
  Users,
  ChevronRight,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

/* ─── Data ─────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    num: '01',
    name: 'Xportlytics',
    tagline: 'Export Analytics Intelligence',
    description:
      'AI-powered platform delivering real-time trade intelligence, multi-jurisdiction compliance tracking, and predictive analytics for global export operations.',
    features: [
      'Live global trade data streams',
      'Multi-jurisdiction compliance engine',
      'Market opportunity scoring model',
      'Tariff & duty optimization',
    ],
    icon: BarChart3,
    color: '#2ABFCE',
    bg: 'rgba(42,191,206,0.06)',
    border: 'rgba(42,191,206,0.16)',
    label: 'Trade & Exports',
  },
  {
    num: '02',
    name: 'StaySync',
    tagline: 'Hospitality Booking Intelligence',
    description:
      'End-to-end room booking management for hotels, resorts, and homestays — with AI-driven dynamic pricing, guest analytics, and seamless OTA integrations.',
    features: [
      'Dynamic AI pricing engine',
      'Multi-property dashboard',
      'Guest preference AI',
      'OTA channel management',
    ],
    icon: Building2,
    color: '#7C6EF5',
    bg: 'rgba(124,110,245,0.06)',
    border: 'rgba(124,110,245,0.16)',
    label: 'Hospitality',
  },
  {
    num: '03',
    name: 'Chitr',
    tagline: 'Art Marketplace & Gallery OS',
    description:
      'Curated digital marketplace and gallery management for art retailing, authentication, provenance tracking, and collector relationship management.',
    features: [
      'AI-assisted art valuation',
      'Provenance blockchain ledger',
      'Virtual gallery experiences',
      'Collector CRM suite',
    ],
    icon: Palette,
    color: '#E8876A',
    bg: 'rgba(232,135,106,0.06)',
    border: 'rgba(232,135,106,0.16)',
    label: 'Art & Culture',
  },
  {
    num: '04',
    name: 'DentAlert',
    tagline: 'Dental Practice Intelligence',
    description:
      'Comprehensive dental appointment management with AI-powered scheduling, automated patient alerting, treatment tracking, and practice analytics.',
    features: [
      'Smart appointment scheduling',
      'Multi-channel patient alerts',
      'Treatment plan tracking',
      'Insurance pre-auth automation',
    ],
    icon: CalendarCheck,
    color: '#5EC97B',
    bg: 'rgba(94,201,123,0.06)',
    border: 'rgba(94,201,123,0.16)',
    label: 'Healthcare',
  },
  {
    num: '05',
    name: 'NotaryGen',
    tagline: 'County-Specific Document Engine',
    description:
      'AI-driven notary document generation with county-level customization, compliance verification, and electronic notarization workflows — for any U.S. county.',
    features: [
      'County-specific template engine',
      'Real-time compliance checks',
      'E-notarization workflows',
      'Full document audit trail',
    ],
    icon: FileText,
    color: '#C9973A',
    bg: 'rgba(201,151,58,0.06)',
    border: 'rgba(201,151,58,0.16)',
    label: 'Legal Tech',
  },
]

const STATS = [
  {
    value: '5,000+',
    label: 'Consulting Hours',
    sub: 'Across all product verticals',
  },
  { value: '10', label: 'Global MNC Partners', sub: 'Top-tier enterprise clients' },
  { value: '5', label: 'AI Verticals', sub: 'Production-ready platforms' },
  { value: '98.4%', label: 'Delivery Precision', sub: 'Client satisfaction rate' },
]

const CAPABILITIES = [
  {
    icon: Cpu,
    title: 'AI/ML Engineering',
    desc: 'Production LLM pipelines, predictive models, and real-time inference systems built for scale.',
  },
  {
    icon: Globe,
    title: 'Enterprise Architecture',
    desc: 'Scalable cloud-native systems engineered to global MNC-grade reliability standards.',
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    desc: 'Regulatory-aware platforms with built-in audit trails, encryption, and data governance.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Delivery',
    desc: 'End-to-end product engineering — from database schema to pixel-perfect UI.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & BI',
    desc: 'Real-time dashboards, data warehousing, and decision intelligence systems.',
  },
  {
    icon: Users,
    title: 'Domain Consulting',
    desc: 'Deep vertical expertise across trade, healthcare, legal, hospitality, and arts.',
  },
]

const TICKER_ITEMS = [
  'Xportlytics',
  'StaySync',
  'Chitr',
  'DentAlert',
  'NotaryGen',
  'AI-Native',
  'Enterprise-Grade',
  'MNC-Proven',
  'Xportlytics',
  'StaySync',
  'Chitr',
  'DentAlert',
  'NotaryGen',
  'AI-Native',
  'Enterprise-Grade',
  'MNC-Proven',
]

/* ─── Helpers ────────────────────────────────────────────────────── */

function hexToRgb(hex: string): string {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return r
    ? `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}`
    : '255,255,255'
}

/* ─── Page ───────────────────────────────────────────────────────── */

function Home() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <HeroSection />
      <TickerBar />
      <ProductsSection />
      <StatsSection />
      <CapabilitiesSection />
      <AboutSection />
      <ContactSection />
      <PageFooter />
    </div>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="grid-lines"
      style={{
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0',
      }}
    >
      {/* Glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 560,
          height: 560,
          background:
            'radial-gradient(circle, rgba(201,151,58,0.14) 0%, transparent 68%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'breathe 7s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '8%',
          width: 380,
          height: 380,
          background:
            'radial-gradient(circle, rgba(42,191,206,0.09) 0%, transparent 68%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'breathe 9s 2s ease-in-out infinite',
        }}
      />

      <div
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        {/* Badge */}
        <div className="animate-fade-up" style={{ marginBottom: 30 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              padding: '6px 16px',
              border: '1px solid rgba(201,151,58,0.28)',
              borderRadius: 100,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: '0.11em',
              textTransform: 'uppercase',
              color: '#C9973A',
              background: 'rgba(201,151,58,0.055)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: '#C9973A',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'breathe 2s ease-in-out infinite',
              }}
            />
            Ultra AI-Enabled Enterprise Solutions
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display animate-fade-up-1"
          style={{
            fontSize: 'clamp(54px, 9vw, 118px)',
            fontWeight: 400,
            lineHeight: 0.93,
            color: '#F0EDE8',
            margin: '0 0 14px',
            letterSpacing: '-0.025em',
          }}
        >
          Five Verticals.
          <br />
          <em
            className="gold-gradient-text"
            style={{ fontStyle: 'italic', fontWeight: 700 }}
          >
            One Vision.
          </em>
        </h1>

        {/* Subtitle */}
        <div className="animate-fade-up-2" style={{ marginTop: 30, maxWidth: 580 }}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.68,
              color: 'rgba(240,237,232,0.52)',
              margin: 0,
              fontWeight: 300,
            }}
          >
            Akani builds ultra-intelligent software platforms for export analytics,
            hospitality, arts, healthcare, and legal tech — powered by AI and backed
            by{' '}
            <span style={{ color: '#C9973A', fontWeight: 600 }}>
              5,000+ consulting hours
            </span>{' '}
            with the world's top MNCs.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="hero-ctas animate-fade-up-3"
          style={{ display: 'flex', gap: 14, marginTop: 42, flexWrap: 'wrap' }}
        >
          <a href="#products" className="btn-gold">
            Explore Products <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-outline">
            Talk to us <ChevronRight size={15} />
          </a>
        </div>

        {/* Product strip */}
        <div
          className="hero-products-strip animate-fade-up-4"
          style={{ marginTop: 72, display: 'flex', gap: 28, flexWrap: 'wrap' }}
        >
          {PRODUCTS.map((p) => (
            <div
              key={p.num}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: p.color,
                  display: 'inline-block',
                  opacity: 0.85,
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: 'rgba(240,237,232,0.38)',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Ticker ─────────────────────────────────────────────────────── */

function TickerBar() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '16px 0',
        background: 'var(--surface)',
        overflow: 'hidden',
      }}
    >
      <div className="ticker-wrap">
        <div className="ticker-track">
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 32,
                paddingRight: 60,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: i % 4 === 0 ? '#C9973A' : 'rgba(240,237,232,0.22)',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: 'rgba(201,151,58,0.3)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Products ───────────────────────────────────────────────────── */

function ProductsSection() {
  return (
    <section id="products" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 14 }}>
            Our Products
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 600,
              color: '#F0EDE8',
              margin: 0,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}
          >
            AI-powered platforms
            <br />
            <span
              style={{
                color: 'rgba(240,237,232,0.28)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              for every vertical
            </span>
          </h2>
        </div>

        {/* Grid — top row: 2 large cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            className="products-row-top"
            style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 18 }}
          >
            <ProductCard product={PRODUCTS[0]} size="large" />
            <ProductCard product={PRODUCTS[1]} size="large" />
          </div>

          {/* Bottom row: 3 smaller cards */}
          <div
            className="products-row-bottom"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1.2fr 1fr',
              gap: 18,
            }}
          >
            <ProductCard product={PRODUCTS[2]} size="small" />
            <ProductCard product={PRODUCTS[3]} size="small" />
            <ProductCard product={PRODUCTS[4]} size="small" />
          </div>
        </div>
      </div>
    </section>
  )
}

type Product = (typeof PRODUCTS)[0]

function ProductCard({
  product: p,
  size,
}: {
  product: Product
  size: 'large' | 'small'
}) {
  const Icon = p.icon
  const lg = size === 'large'

  return (
    <div
      className="product-card"
      style={{
        background: p.bg,
        border: `1px solid ${p.border}`,
        borderRadius: 16,
        padding: lg ? '36px' : '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: lg ? 22 : 16,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost number */}
      <span
        style={{
          position: 'absolute',
          top: -16,
          right: 16,
          fontSize: 128,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 800,
          color: p.color,
          opacity: 0.035,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {p.num}
      </span>

      {/* Top row: tag + icon */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: 4,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '0.11em',
              textTransform: 'uppercase',
              color: p.color,
              background: `rgba(${hexToRgb(p.color)},0.13)`,
              marginBottom: 14,
            }}
          >
            {p.label}
          </span>
          <h3
            className="font-display"
            style={{
              margin: 0,
              fontSize: lg ? 30 : 23,
              fontWeight: 700,
              color: '#F0EDE8',
              letterSpacing: '-0.015em',
              lineHeight: 1.05,
            }}
          >
            {p.name}
          </h3>
          <p
            style={{
              margin: '5px 0 0',
              fontSize: 12,
              color: p.color,
              fontWeight: 500,
              opacity: 0.8,
            }}
          >
            {p.tagline}
          </p>
        </div>
        <div
          style={{
            width: lg ? 50 : 42,
            height: lg ? 50 : 42,
            borderRadius: 11,
            background: `rgba(${hexToRgb(p.color)},0.12)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: `1px solid rgba(${hexToRgb(p.color)},0.2)`,
          }}
        >
          <Icon size={lg ? 22 : 18} color={p.color} strokeWidth={1.75} />
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          margin: 0,
          fontSize: lg ? 14.5 : 13.5,
          lineHeight: 1.65,
          color: 'rgba(240,237,232,0.52)',
          fontWeight: 300,
        }}
      >
        {p.description}
      </p>

      {/* Feature list */}
      {lg ? (
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '9px 18px',
          }}
        >
          {p.features.map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12.5,
                color: 'rgba(240,237,232,0.58)',
              }}
            >
              <CheckCircle
                size={12}
                color={p.color}
                strokeWidth={2.5}
                style={{ flexShrink: 0 }}
              />
              {f}
            </li>
          ))}
        </ul>
      ) : (
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
          }}
        >
          {p.features.slice(0, 3).map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12,
                color: 'rgba(240,237,232,0.52)',
              }}
            >
              <CheckCircle
                size={11}
                color={p.color}
                strokeWidth={2.5}
                style={{ flexShrink: 0 }}
              />
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ─── Stats ──────────────────────────────────────────────────────── */

function StatsSection() {
  return (
    <section
      id="expertise"
      style={{
        padding: '80px 0',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 32px' }}>
        <div
          className="stats-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40 }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(42px, 4.5vw, 60px)',
                  fontWeight: 700,
                  color: '#C9973A',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#F0EDE8',
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  color: 'rgba(240,237,232,0.35)',
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Capabilities ───────────────────────────────────────────────── */

function CapabilitiesSection() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 32px' }}>
        <div
          className="caps-layout"
          style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}
        >
          {/* Left */}
          <div>
            <span className="section-label" style={{ marginBottom: 16 }}>
              Technical Stack
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 50px)',
                fontWeight: 600,
                color: '#F0EDE8',
                margin: '0 0 24px',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              Enterprise-grade
              <br />
              <em
                style={{
                  color: 'rgba(240,237,232,0.28)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                by design
              </em>
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.72,
                color: 'rgba(240,237,232,0.48)',
                margin: '0 0 32px',
                fontWeight: 300,
              }}
            >
              Every Akani product is built using methodologies and standards refined
              through thousands of hours working alongside the world's top 10 MNCs —
              where reliability, security, and precision are non-negotiable.
            </p>
            <a href="#contact" className="btn-gold" style={{ display: 'inline-flex' }}>
              Start a Conversation <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: 2-col grid of capability cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="cap-card">
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      background: 'rgba(201,151,58,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                      border: '1px solid rgba(201,151,58,0.14)',
                    }}
                  >
                    <Icon size={17} color="#C9973A" strokeWidth={1.8} />
                  </div>
                  <h4
                    style={{
                      margin: '0 0 8px',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#F0EDE8',
                    }}
                  >
                    {cap.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      lineHeight: 1.62,
                      color: 'rgba(240,237,232,0.42)',
                      fontWeight: 300,
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── About ──────────────────────────────────────────────────────── */

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: 60 }}>
          <span className="section-label" style={{ marginBottom: 14 }}>
            About Akani
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 600,
              color: '#F0EDE8',
              margin: 0,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}
          >
            Consulting pedigree.
            <br />
            <em
              style={{
                color: 'rgba(240,237,232,0.28)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              Startup velocity.
            </em>
          </h2>
        </div>

        <div
          className="about-layout"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}
        >
          {/* Left: Profile + badges */}
          <div>
            <div
              style={{
                border: '1px solid rgba(255,255,255,0.075)',
                borderRadius: 16,
                padding: 32,
                background: 'rgba(255,255,255,0.02)',
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  marginBottom: 22,
                }}
              >
                {/* Avatar initials */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 14,
                    background:
                      'linear-gradient(135deg, rgba(201,151,58,0.28) 0%, rgba(201,151,58,0.08) 100%)',
                    border: '1px solid rgba(201,151,58,0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: '#C9973A',
                    flexShrink: 0,
                    letterSpacing: '-0.02em',
                  }}
                >
                  CS
                </div>
                <div>
                  <div
                    style={{ fontSize: 17, fontWeight: 600, color: '#F0EDE8' }}
                  >
                    Constantine Stanley
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: 'rgba(240,237,232,0.42)',
                      marginTop: 3,
                    }}
                  >
                    Founder &amp; Principal Consultant
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: '#C9973A',
                      marginTop: 5,
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                    }}
                  >
                    akani.us
                  </div>
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.72,
                  color: 'rgba(240,237,232,0.5)',
                  fontWeight: 300,
                }}
              >
                Constantine brings several thousand hours of enterprise consulting
                experience accumulated across the world's top 10 global MNCs —
                spanning trade, healthcare, legal, hospitality, and creative
                industries. This breadth shapes every product decision at Akani.
              </p>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {[
                'Top 10 Global MNCs',
                '5,000+ Man Hours',
                'Multi-Industry',
                'AI-First Approach',
                'Enterprise Architecture',
                'Global Delivery',
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: '6px 14px',
                    border: '1px solid rgba(255,255,255,0.075)',
                    borderRadius: 100,
                    fontSize: 11,
                    color: 'rgba(240,237,232,0.45)',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Value pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              {
                icon: Award,
                title: 'MNC-Proven Methodology',
                desc: 'Our delivery frameworks are forged from thousands of hours working alongside global enterprise teams, where quality and precision are non-negotiable. Every sprint, every milestone, every release is MNC-accountable.',
              },
              {
                icon: Briefcase,
                title: 'Vertical Specialization',
                desc: 'Rather than generic solutions, each Akani product is purpose-built for its domain — combining deep industry knowledge with cutting-edge AI to solve problems that traditional software simply cannot.',
              },
              {
                icon: Cpu,
                title: 'AI-Native Architecture',
                desc: 'Every platform is designed AI-first, not AI-added. Intelligence is woven into the core of each product, enabling capabilities that go far beyond conventional automation or rule-based systems.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: 'rgba(201,151,58,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(201,151,58,0.14)',
                    }}
                  >
                    <Icon size={18} color="#C9973A" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: '0 0 7px',
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#F0EDE8',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13.5,
                        lineHeight: 1.68,
                        color: 'rgba(240,237,232,0.42)',
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ────────────────────────────────────────────────────── */

function ContactSection() {
  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 32px' }}>
        <div
          className="contact-inner"
          style={{
            border: '1px solid rgba(201,151,58,0.18)',
            borderRadius: 24,
            padding: '72px 64px',
            background:
              'linear-gradient(140deg, rgba(201,151,58,0.055) 0%, rgba(6,6,10,0) 55%)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: -120,
              right: -120,
              width: 460,
              height: 460,
              background:
                'radial-gradient(circle, rgba(201,151,58,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -80,
              left: -80,
              width: 320,
              height: 320,
              background:
                'radial-gradient(circle, rgba(42,191,206,0.07) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />

          <span
            className="section-label"
            style={{ marginBottom: 18, display: 'block' }}
          >
            Contact
          </span>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 600,
              color: '#F0EDE8',
              margin: '0 0 22px',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              position: 'relative',
            }}
          >
            Ready to build something
            <br />
            <em
              style={{
                color: 'rgba(240,237,232,0.35)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              extraordinary?
            </em>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: 'rgba(240,237,232,0.48)',
              margin: '0 auto 44px',
              maxWidth: 480,
              lineHeight: 1.72,
              fontWeight: 300,
              position: 'relative',
            }}
          >
            Whether you need one of our platforms or want to engage Akani for a
            custom AI consulting project, we're ready to scope and deliver.
          </p>

          {/* Contact links */}
          <div
            style={{
              display: 'flex',
              gap: 36,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 44,
              position: 'relative',
            }}
          >
            {[
              { icon: Mail, label: 'hello@akani.us', href: 'mailto:hello@akani.us' },
              { icon: Globe, label: 'akani.us', href: 'https://akani.us' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  color: 'rgba(240,237,232,0.58)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9973A')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(240,237,232,0.58)')
                }
              >
                <Icon size={16} color="#C9973A" strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
              position: 'relative',
            }}
          >
            <a href="mailto:hello@akani.us" className="btn-gold">
              Send a Message <Mail size={14} />
            </a>
            <a href="/faq" className="btn-outline">
              Read FAQ <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────────────────────── */

function PageFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 32px',
        background: 'var(--surface)',
      }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              background: 'linear-gradient(140deg, #C9973A, #E8C97A)',
              borderRadius: 7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 16,
              color: '#06060A',
            }}
          >
            A
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 18,
              color: '#F0EDE8',
              letterSpacing: '0.04em',
            }}
          >
            AKANI
          </span>
        </div>

        {/* Footer links */}
        <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {[
            { label: 'Products', href: '#products' },
            { label: 'Expertise', href: '#expertise' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
            { label: 'FAQ', href: '/faq' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 12.5,
                color: 'rgba(240,237,232,0.3)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'rgba(240,237,232,0.65)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(240,237,232,0.3)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: 11.5,
            color: 'rgba(240,237,232,0.18)',
            letterSpacing: '0.02em',
          }}
        >
          &copy; 2026 Akani. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
