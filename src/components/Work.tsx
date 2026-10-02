import { useState } from 'react'
import Reveal from './Reveal'
import Pill, { ArrowUpRight, SectionLabel } from './Pill'

interface Project {
  title: string
  tag: string
  year: string
  seed: string
  ratio: string
  span: string
  offset: string
}

const PROJECTS: Project[] = [
  {
    title: 'Northline Freight',
    tag: 'Brand & Product',
    year: '2026',
    seed: 'northline-freight',
    ratio: 'aspect-[4/3]',
    span: 'md:col-span-7',
    offset: '',
  },
  {
    title: 'Ferro Labs',
    tag: 'AI Systems',
    year: '2026',
    seed: 'ferro-labs',
    ratio: 'aspect-[3/4]',
    span: 'md:col-span-5',
    offset: 'md:mt-28',
  },
  {
    title: 'Lumen Clinic',
    tag: 'Product Design',
    year: '2025',
    seed: 'lumen-clinic',
    ratio: 'aspect-[3/4]',
    span: 'md:col-span-5',
    offset: 'md:-mt-12',
  },
  {
    title: 'Kettle & Rye',
    tag: 'Identity & Film',
    year: '2025',
    seed: 'kettle-rye',
    ratio: 'aspect-[4/3]',
    span: 'md:col-span-7',
    offset: 'md:mt-16',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <a href="#contact" className="group block">
      <div
        className={`relative w-full overflow-hidden rounded-[28px] bg-black/10 ${project.ratio}`}
      >
        {!loaded && !failed && <div className="skeleton absolute inset-0" />}
        {!failed && (
          <img
            src={`https://picsum.photos/seed/${project.seed}/1200/1200`}
            alt={`${project.title} project preview`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`h-full w-full object-cover grayscale-[0.35] transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.04] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        {failed && (
          <div className="absolute inset-0 grid place-items-center text-[14px] text-black/40">
            Preview unavailable
          </div>
        )}

        <div className="glass absolute bottom-4 left-4 flex items-center gap-3 rounded-full py-[0.35em] pr-2 pl-5 text-black transition-colors duration-200 group-hover:bg-black group-hover:text-white">
          <span className="text-[14px] sm:text-[16px]">{project.title}</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
            <ArrowUpRight />
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between px-1 text-[14px] text-black/60 sm:text-[15px]">
        <span>{project.tag}</span>
        <span>{project.year}</span>
      </div>
    </a>
  )
}

export default function Work() {
  return (
    <section
      id="studio"
      className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-36 md:px-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <SectionLabel>Studio</SectionLabel>
          <h2
            className="mt-6 max-w-[14ch] text-black"
            style={{
              fontSize: 'clamp(32px, 6vw, 76px)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Selected work, 2025 to now.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Pill href="#contact" variant="white">
            Start something similar
          </Pill>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 90} className={`${project.span} ${project.offset}`}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
