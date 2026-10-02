import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Labs', href: '#labs' },
  { label: 'Studio', href: '#studio' },
  { label: 'Openings', href: '#openings' },
  { label: 'Shop', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 transition-[background-color,backdrop-filter] duration-300 sm:px-8 sm:py-5 ${
          scrolled ? 'bg-white/70 backdrop-blur-xl' : ''
        }`}
      >
        <div className="flex flex-row items-center gap-3">
          <span
            className="text-[21px] tracking-tight text-black sm:text-[26px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe&reg;
          </span>
          <span
            className="select-none text-[25px] text-black sm:text-[30px]"
            style={{ letterSpacing: '-0.02em' }}
          >
            &#10035;&#65038;
          </span>
        </div>

        <div className="hidden flex-row text-[23px] text-black md:flex">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center">
              <a href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden text-[23px] text-black underline underline-offset-2 transition-opacity hover:opacity-60 md:block"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col items-end gap-[5px] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className="h-[2px] w-6 bg-black transition-transform duration-300"
            style={{
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="h-[2px] w-6 bg-black transition-opacity duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="h-[2px] w-6 bg-black transition-transform duration-300"
            style={{
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-[9] flex flex-col items-start justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[32px] font-medium text-black"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-[32px] font-medium text-black underline"
          onClick={() => setMenuOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
