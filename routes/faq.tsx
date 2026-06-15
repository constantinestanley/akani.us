import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const FAQS = [
  {
    category: 'About Akani',
    items: [
      {
        question: 'What is Akani?',
        answer:
          'Akani is an ultra AI-enabled startup that builds intelligent enterprise software products across five key verticals: export analytics (Xportlytics), hospitality booking (StaySync), art retailing (Chitr), dental practice management (DentAlert), and legal document generation (NotaryGen). Akani also offers consulting engagements for custom AI and enterprise systems work.',
      },
      {
        question: 'What is the consulting background behind Akani?',
        answer:
          "Akani's team brings several thousand man-hours of enterprise consulting experience accumulated through engagements with the world's top 10 global MNCs. This pedigree ensures every product is designed to the highest standards of reliability, security, scalability, and operational precision — the same standards expected in Fortune 500 environments.",
      },
      {
        question: 'Can Akani build custom AI solutions for my organization?',
        answer:
          'Yes. Beyond our standard product portfolio, Akani takes on custom consulting and development engagements. We can help you design AI strategies, architect bespoke machine learning pipelines, integrate LLMs into existing enterprise systems, and build domain-specific intelligent applications. Reach out at hello@akani.us to start a conversation.',
      },
    ],
  },
  {
    category: 'Our Products',
    items: [
      {
        question: 'What is Xportlytics and who is it for?',
        answer:
          'Xportlytics is our AI-powered export analytics platform. It delivers real-time global trade intelligence, multi-jurisdiction regulatory compliance tracking, market opportunity scoring, and tariff optimization insights. It is designed for exporters, trade compliance teams, logistics companies, and government trade bodies looking to make faster, data-driven decisions on global trade.',
      },
      {
        question: 'How does StaySync help hotels, resorts, and homestays?',
        answer:
          'StaySync is an end-to-end room booking management system. It features an AI-driven dynamic pricing engine that adjusts rates based on demand signals, a multi-property management dashboard, guest preference analytics that personalize the guest experience, and OTA channel management to synchronize availability across platforms like Booking.com and Airbnb. It helps hospitality operators maximize occupancy, reduce manual work, and deliver better guest experiences.',
      },
      {
        question: 'What makes Chitr different from other art platforms?',
        answer:
          "Chitr is both a curated digital marketplace and a full gallery operating system. Unlike generic art platforms, it offers AI-assisted valuation models, provenance tracking on an immutable ledger, virtual gallery experiences, and a collector CRM with relationship history. It is designed for galleries, art dealers, auction houses, and independent artists who need a professional-grade platform that handles both the retail and operational sides of the business.",
      },
      {
        question: 'What does DentAlert offer dental practices?',
        answer:
          'DentAlert is a comprehensive dental practice intelligence platform. It includes smart appointment scheduling with conflict detection, multi-channel patient alerting via SMS, email, and push notifications, treatment plan tracking across visits, and insurance pre-authorization automation. It is built to reduce patient no-shows, streamline front-desk workflows, and give practice managers real-time analytics on their operations.',
      },
      {
        question: 'How does NotaryGen handle county-specific legal requirements?',
        answer:
          'NotaryGen uses an AI-driven template engine that is pre-configured for specific county-level notary requirements across the United States. When a user selects a county and document type, the system generates a fully compliant notary document, runs real-time regulatory checks against current county statutes, supports electronic notarization workflows where permitted, and maintains a comprehensive audit trail for every document generated.',
      },
    ],
  },
  {
    category: 'Getting Started',
    items: [
      {
        question: 'How do I get started with an Akani product?',
        answer:
          "The easiest way to get started is to send us a message at hello@akani.us or use the contact section on our homepage. We will schedule a discovery call to understand your requirements, recommend the most suitable product or solution, and walk you through implementation options — whether that's a standard SaaS deployment or a custom integration.",
      },
      {
        question: 'Do you offer implementation support and onboarding?',
        answer:
          'Yes. Every Akani product engagement includes onboarding support, documentation, and dedicated assistance during the initial deployment phase. For enterprise clients, we offer extended implementation packages that include data migration, team training, custom integrations, and ongoing technical account management.',
      },
      {
        question: 'Are Akani products available as cloud SaaS or on-premise?',
        answer:
          'Our products are primarily offered as cloud-native SaaS applications hosted on secure, enterprise-grade infrastructure. For regulated industries or organizations with strict data residency requirements, we can discuss private cloud or hybrid deployment options. Contact us to discuss the right architecture for your situation.',
      },
      {
        question: 'What industries and geographies do you serve?',
        answer:
          "Akani's products serve clients across multiple industries — trade, hospitality, arts, healthcare, and legal — and are designed to support global operations. Our consulting background includes engagements across multiple continents, and our platforms are built with internationalization and multi-jurisdiction compliance in mind from the ground up.",
      },
    ],
  },
]

function FAQ() {
  return (
    <div
      style={{ background: 'var(--bg)', minHeight: '100vh', padding: '80px 0 120px' }}
    >
      <div style={{ maxWidth: 840, margin: '0 auto', padding: '0 32px' }}>
        {/* Back link */}
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: 'rgba(240,237,232,0.38)',
            textDecoration: 'none',
            fontSize: 13,
            fontWeight: 500,
            marginBottom: 52,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#C9973A')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'rgba(240,237,232,0.38)')
          }
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <span
            className="section-label"
            style={{ display: 'block', marginBottom: 16 }}
          >
            FAQ
          </span>
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 700,
              color: '#F0EDE8',
              margin: '0 0 20px',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Frequently Asked
            <br />
            <em
              style={{
                color: 'rgba(240,237,232,0.28)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              Questions
            </em>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: 'rgba(240,237,232,0.45)',
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: 520,
            }}
          >
            Everything you need to know about Akani, our products, and how to work
            with us. Can't find an answer?{' '}
            <a
              href="mailto:hello@akani.us"
              style={{ color: '#C9973A', textDecoration: 'none', fontWeight: 500 }}
            >
              Email us directly.
            </a>
          </p>
        </div>

        {/* FAQ sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
          {FAQS.map((section) => (
            <div key={section.category}>
              {/* Category label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#C9973A',
                  }}
                >
                  {section.category}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: 'rgba(255,255,255,0.06)',
                  }}
                />
              </div>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {section.items.map((faq, i) => (
                  <Accordion key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 80,
            padding: '40px',
            border: '1px solid rgba(201,151,58,0.16)',
            borderRadius: 16,
            background: 'rgba(201,151,58,0.04)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: '0 0 20px',
              fontSize: 16,
              color: 'rgba(240,237,232,0.55)',
              fontWeight: 300,
              lineHeight: 1.65,
            }}
          >
            Still have questions? We're happy to walk you through anything.
          </p>
          <a href="mailto:hello@akani.us" className="btn-gold">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

function Accordion({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        border: '1px solid rgba(255,255,255,0.055)',
        borderRadius: 10,
        overflow: 'hidden',
        transition: 'border-color 0.2s',
        borderColor: open ? 'rgba(201,151,58,0.22)' : 'rgba(255,255,255,0.055)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 22px',
          background: open ? 'rgba(201,151,58,0.03)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
          transition: 'background 0.2s',
        }}
      >
        <span
          style={{
            fontSize: 14.5,
            fontWeight: 500,
            color: open ? '#F0EDE8' : 'rgba(240,237,232,0.78)',
            lineHeight: 1.45,
            transition: 'color 0.2s',
          }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          color={open ? '#C9973A' : 'rgba(240,237,232,0.3)'}
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease, color 0.2s',
            flexShrink: 0,
          }}
        />
      </button>

      {open && (
        <div
          style={{
            padding: '0 22px 20px',
            fontSize: 14,
            lineHeight: 1.72,
            color: 'rgba(240,237,232,0.48)',
            fontWeight: 300,
          }}
        >
          {answer}
        </div>
      )}
    </div>
  )
}
