import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Menu, X } from 'lucide-react'
import '../styles.css'

export const Route = createRootRoute({
  component: RootLayout,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Akani — Ultra AI-Enabled Enterprise Solutions' },
      {
        name: 'description',
        content:
          'Akani builds AI-powered enterprise platforms for export analytics, hospitality, arts, healthcare, and legal verticals. Backed by 5000+ hours with top global MNCs.',
      },
      { name: 'theme-color', content: '#06060A' },
    ],
  }),
})

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '/faq' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'background-color 0.35s, border-color 0.35s',
    backgroundColor: scrolled ? 'rgba(6,6,10,0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
    borderBottom: scrolled
      ? '1px solid rgba(255,255,255,0.055)'
      : '1px solid transparent',
  }

  return (
    <nav style={navStyle}>
      <div
        style={{
          maxWidth: 1300,
          margin: '0 auto',
          padding: '0 32px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
        >
          <div
            style={{
              width: 35,
              height: 35,
              background: 'linear-gradient(140deg, #C9973A 0%, #E8C97A 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 18,
              color: '#06060A',
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            A
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 20,
              color: '#F0EDE8',
              letterSpacing: '0.04em',
            }}
          >
            AKANI
          </span>
        </a>

        <div
          style={{ display: 'flex', alignItems: 'center', gap: 36 }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a
            href="#contact"
            className="hidden md:inline-flex"
            style={{
              padding: '9px 22px',
              border: '1px solid rgba(201,151,58,0.45)',
              color: '#C9973A',
              borderRadius: 7,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s, border-color 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,151,58,0.09)'
              e.currentTarget.style.borderColor = '#C9973A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,151,58,0.45)'
            }}
          >
            Get in Touch
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: '#F0EDE8',
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            background: '#0C0C13',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'rgba(240,237,232,0.65)',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              padding: '12px 22px',
              border: '1px solid rgba(201,151,58,0.45)',
              color: '#C9973A',
              borderRadius: 7,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  )
}

function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 68 }}>{children ?? <Outlet />}</div>
    </>
  )
}
