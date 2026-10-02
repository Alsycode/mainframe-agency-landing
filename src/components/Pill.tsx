import type { ReactNode } from 'react'

type Variant = 'white' | 'glass' | 'ghost'

interface PillProps {
  children: ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  className?: string
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] whitespace-nowrap text-black transition-[color,background-color,transform] duration-200 hover:bg-black hover:text-white active:scale-[0.98]'

const VARIANTS: Record<Variant, string> = {
  white: 'bg-white border border-black/10',
  glass: 'glass',
  ghost: 'border border-black/30 bg-transparent',
}

export default function Pill({
  children,
  variant = 'white',
  href,
  onClick,
  className = '',
}: PillProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-[0.3em] text-[13px] text-black sm:text-[15px]">
      <span aria-hidden="true">&#10035;&#65038;</span>
      {children}
    </span>
  )
}

export function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3.5 10.5L10.5 3.5M5 3.5H10.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
