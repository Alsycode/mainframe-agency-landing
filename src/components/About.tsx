import Reveal from './Reveal'
import Pill, { SectionLabel } from './Pill'

const FACTS = ['Founded 2019', '23 people, 6 time zones', 'Remote-first']

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-36 md:px-10"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-3">
          <SectionLabel>About</SectionLabel>
        </Reveal>

        <div className="md:col-span-8 md:col-start-5">
          <Reveal delay={80}>
            <p
              className="pointer-events-none mb-5 select-none text-black sm:mb-6"
              style={{
                fontSize: 'clamp(18px, 4vw, 26px)',
                lineHeight: 1.3,
                filter: 'blur(4px)',
              }}
            >
              Hey there, still scrolling?
              <br />
              Good. This part is the manifesto.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p
              className="text-black"
              style={{
                fontSize: 'clamp(28px, 5.2vw, 64px)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              We build brands, products, and intelligent systems for companies
              that would rather stand out than blend in.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-black/65 sm:text-[18px]">
              Strategists, designers, and engineers work in teams of three to
              five. No account layer, no decks that go nowhere. A.R.I.A, our
              in-house agent, keeps briefs honest and handoffs fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-y-1">
              {FACTS.map((fact) => (
                <span
                  key={fact}
                  className="mx-[0.2em] mb-[0.4em] inline-flex rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black first:ml-0 sm:px-5 sm:text-[15px]"
                >
                  {fact}
                </span>
              ))}
              <Pill href="#studio" variant="ghost" className="mx-[0.2em] mb-[0.4em]">
                See the work
              </Pill>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
