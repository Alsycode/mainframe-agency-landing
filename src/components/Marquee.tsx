import type { CSSProperties } from 'react'

const ROW_ONE = ['Brand Strategy', 'Product Design', 'AI Systems', 'Motion & Sound']
const ROW_TWO = ['Engineering', 'Spatial Design', 'Naming', 'Creative Direction']

function Row({ items, reverse, duration }: { items: string[]; reverse?: boolean; duration: number }) {
  const track = [...items, ...items, ...items, ...items]

  return (
    <div className="marquee overflow-hidden">
      <div
        className="marquee-track flex w-max items-center gap-3 py-1"
        style={
          {
            '--dur': `${duration}s`,
            '--dir': reverse ? 'reverse' : 'normal',
          } as CSSProperties
        }
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="glass inline-flex items-center gap-3 rounded-full px-5 py-[0.35em] text-[15px] whitespace-nowrap text-black sm:text-[19px]"
          >
            <span aria-hidden="true" className="text-[13px] text-black/50">
              &#10035;&#65038;
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section aria-label="Capabilities" className="flex flex-col gap-3 py-10 sm:py-14">
      <Row items={ROW_ONE} duration={38} />
      <Row items={ROW_TWO} duration={44} reverse />
    </section>
  )
}
