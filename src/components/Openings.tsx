import Reveal from './Reveal'
import { ArrowUpRight, SectionLabel } from './Pill'

const ROLES = [
  { title: 'Senior Product Designer', location: 'Remote, EU or US East', type: 'Full-time' },
  { title: 'Creative Technologist', location: 'Remote', type: 'Full-time' },
  { title: 'Applied AI Engineer', location: 'Remote, US West', type: 'Full-time' },
  { title: 'Motion Designer', location: 'Lisbon', type: 'Contract' },
]

export default function Openings() {
  return (
    <section
      id="openings"
      className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-36 md:px-10"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-4">
          <SectionLabel>Openings</SectionLabel>
          <p
            className="mt-6 max-w-[14ch] text-black"
            style={{
              fontSize: 'clamp(24px, 3.4vw, 40px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Come work here.
          </p>
        </Reveal>

        <div className="flex flex-col gap-3 md:col-span-8">
          {ROLES.map((role, i) => (
            <Reveal key={role.title} delay={i * 70}>
              <a
                href="#contact"
                className="glass group flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-[28px] px-6 py-5 text-black transition-[color,background-color,transform] duration-200 hover:bg-black hover:text-white active:scale-[0.99] sm:rounded-full sm:py-4 sm:pr-4 sm:pl-8"
              >
                <span style={{ fontSize: 'clamp(18px, 2.4vw, 28px)', letterSpacing: '-0.015em' }}>
                  {role.title}
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[13px] opacity-60 sm:text-[15px]">
                    {role.location}
                  </span>
                  <span className="inline-flex rounded-full border border-current/20 px-3 py-[0.2em] text-[13px] opacity-80">
                    {role.type}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black">
                    <ArrowUpRight />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={320}>
            <p className="px-2 pt-3 text-[14px] text-black/55 sm:text-[15px]">
              Nothing that fits? Send a note anyway. Good taste tends to find us.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
