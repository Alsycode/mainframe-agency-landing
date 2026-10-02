import Pill from './Pill'

const NAV_LINKS = [
  { label: 'Labs', href: '#labs' },
  { label: 'Studio', href: '#studio' },
  { label: 'Openings', href: '#openings' },
  { label: 'Get in touch', href: '#contact' },
]
const SOCIAL_LINKS = ['Instagram', 'LinkedIn', 'Are.na']

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] px-3 pb-3 sm:px-5 sm:pb-5 md:px-6">
      <div className="glass rounded-[28px] px-6 py-10 sm:rounded-[36px] sm:px-10 sm:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span
                className="text-[21px] tracking-tight text-black sm:text-[26px]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Mainframe&reg;
              </span>
              <span className="select-none text-[25px] text-black sm:text-[30px]" style={{ letterSpacing: '-0.02em' }}>
                &#10035;&#65038;
              </span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-black/60">
              A small studio for brands, products, and intelligent systems.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2 md:col-span-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="w-fit text-[16px] text-black transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 md:col-span-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="w-fit text-[16px] text-black transition-opacity hover:opacity-60"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-black/10 pt-6 text-[13px] text-black/55 sm:flex-row sm:items-center sm:justify-between sm:text-[14px]">
          <span>&copy; {new Date().getFullYear()} Mainframe. All rights reserved.</span>
          <Pill href="#" variant="white">
            Back to top
          </Pill>
        </div>
      </div>
    </footer>
  )
}
