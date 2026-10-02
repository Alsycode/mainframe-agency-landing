import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import Pill from './Pill'
import CopyIcon from './CopyIcon'

const EMAIL = 'hello@mainframe.co'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setError(false)
      setCopied(true)
    } catch {
      setError(true)
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setCopied(false)
      setError(false)
    }, 2000)
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-44 md:px-10"
    >
      <div className="max-w-4xl">
        <Reveal>
          <p
            className="pointer-events-none mb-5 select-none text-black sm:mb-6"
            style={{
              fontSize: 'clamp(18px, 4vw, 26px)',
              lineHeight: 1.3,
              filter: 'blur(4px)',
            }}
          >
            So, what are we building?
            <br />
            Tell A.R.I.A, or tell a human.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="text-black"
            style={{
              fontSize: 'clamp(40px, 8.4vw, 120px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
            }}
          >
            Let&apos;s build something worth talking about.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-y-1">
            <Pill href={`mailto:${EMAIL}`} className="mx-[0.2em] mb-[0.4em] ml-0">
              Pitch us an idea
            </Pill>
            <Pill href="#openings" className="mx-[0.2em] mb-[0.4em]">
              Come work here
            </Pill>
            <button
              type="button"
              onClick={handleCopy}
              aria-live="polite"
              className="mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 rounded-full border border-black/30 bg-transparent px-4 py-[0.3em] text-[13px] whitespace-nowrap text-black transition-[color,background-color,transform] duration-200 hover:bg-black hover:text-white active:scale-[0.98] sm:gap-3 sm:px-5 sm:text-[15px]"
            >
              <span>
                {copied ? 'Copied to clipboard' : error ? 'Copy failed, try again' : 'Reach us: '}
                {!copied && !error && <span className="underline underline-offset-1">{EMAIL}</span>}
              </span>
              <CopyIcon />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
