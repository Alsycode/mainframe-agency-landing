import Reveal from './Reveal'
import { SectionLabel } from './Pill'

const STEPS = [
  {
    index: '01',
    title: 'Discover',
    when: 'Weeks 1 to 2',
    description:
      'We get inside the problem, not just the brief. Interviews, audits, and one uncomfortable question per stakeholder.',
  },
  {
    index: '02',
    title: 'Design',
    when: 'Weeks 3 to 6',
    description:
      'Concepts move fast and in the open, with real users in the loop before anything gets polished.',
  },
  {
    index: '03',
    title: 'Build',
    when: 'Weeks 7 to 12',
    description:
      'Production-grade from the first commit. No throwaway prototypes, no mystery handoff.',
  },
  {
    index: '04',
    title: 'Ship',
    when: 'Week 13 onward',
    description:
      'Launch, measure, and keep tuning alongside your team after we hand it over.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-36 md:px-10"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <SectionLabel>How we operate</SectionLabel>
              <p
                className="mt-6 max-w-[14ch] text-black"
                style={{
                  fontSize: 'clamp(24px, 3.4vw, 40px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Thirteen weeks, start to ship.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-8">
          {STEPS.map((step, i) => (
            <div
              key={step.index}
              className="sticky mb-6 last:mb-0"
              style={{ top: `${104 + i * 18}px` }}
            >
              <div className="glass flex min-h-[260px] bg-white/95 flex-col justify-between rounded-[32px] p-7 sm:min-h-[300px] sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="text-black"
                    style={{ fontSize: 'clamp(48px, 8vw, 104px)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
                  >
                    {step.index}
                  </span>
                  <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black sm:text-[15px]">
                    {step.when}
                  </span>
                </div>
                <div className="mt-10">
                  <h3
                    className="text-black"
                    style={{ fontSize: 'clamp(26px, 3.6vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-black/65 sm:text-[17px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
