import Reveal from './Reveal'
import { ArrowUpRight, SectionLabel } from './Pill'

const SERVICES = [
  {
    index: '01',
    title: 'Brand & Strategy',
    description:
      'Positioning, naming, and the language that holds a company together as it grows.',
    tags: ['Naming', 'Identity systems', 'Voice'],
  },
  {
    index: '02',
    title: 'Product & Design',
    description:
      'Interfaces for web, mobile, and the spaces in between, designed to be used rather than admired.',
    tags: ['Web apps', 'Mobile', 'Design systems'],
  },
  {
    index: '03',
    title: 'Engineering & AI',
    description:
      'Full-stack builds and agentic tooling that does real work instead of chasing headlines.',
    tags: ['React', 'Agents', 'Data pipelines'],
  },
  {
    index: '04',
    title: 'Motion & Sound',
    description:
      'Film, animation, and audio direction for launches and the moments that need to move.',
    tags: ['Launch film', 'Sonic identity', '3D'],
  },
]

export default function Services() {
  return (
    <section
      id="labs"
      className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-36 md:px-10"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <SectionLabel>Labs</SectionLabel>
              <p
                className="mt-6 max-w-[16ch] text-black"
                style={{
                  fontSize: 'clamp(24px, 3.4vw, 40px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Four disciplines, one table.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 70}>
              <a
                href="#contact"
                className="group relative -mx-4 block rounded-3xl px-4 py-8 transition-colors duration-300 hover:bg-white/60 sm:-mx-6 sm:px-6"
              >
                <span className="absolute inset-x-4 top-0 h-px bg-black/15 sm:inset-x-6" />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="inline-flex rounded-full border border-black/10 bg-white px-3 py-[0.2em] text-[13px] text-black">
                      {service.index}
                    </span>
                    <h3
                      className="mt-5 text-black transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        fontSize: 'clamp(28px, 4.4vw, 52px)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/15 bg-white text-black transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight />
                  </span>
                </div>

                <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-black/65 sm:text-[17px]">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-y-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mr-[0.4em] mb-[0.4em] inline-flex rounded-full border border-black/15 px-3 py-[0.2em] text-[13px] text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
          <span className="block h-px bg-black/15" />
        </div>
      </div>
    </section>
  )
}
