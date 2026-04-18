"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  {
    value: 94,
    display: "94%",
    label: "constatent un sommeil plus profond",
  },
  {
    value: 89,
    display: "89%",
    label: "s'endorment plus facilement qu'avant YOUY GUM",
  },
  {
    value: 80,
    display: "45 min -> 18 min",
    label: "temps moyen d'endormissement après 4 semaines",
  },
]

function AnimatedStat({
  value,
  display,
  label,
}: {
  value: number
  display: string
  label: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isRangeDisplay = display.includes("->")
  const [rangeStart, rangeEnd] = display.split("->").map((part) => part.trim())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 1500
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 rounded-2xl bg-primary p-8 text-primary-foreground">
      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" className="opacity-20" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${(count / 100) * 251.2} 251.2`}
            className="text-accent transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          {isRangeDisplay ? (
            <span className="font-mono text-xl font-bold leading-tight tracking-tight tabular-nums md:text-2xl">
              <span className="block">{rangeStart}</span>
              <span className="block">{`-> ${rangeEnd}`}</span>
            </span>
          ) : (
            <span className="font-mono text-3xl font-bold leading-none tracking-tight tabular-nums md:text-4xl">
              {display}
            </span>
          )}
        </div>
      </div>
      <p className="text-center text-sm font-medium leading-tight">{label}</p>
      <p className="text-center text-xs opacity-60">{"*Panel indépendant de 4 semaines"}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-card px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          {"Les chiffres parlent d'eux-mêmes"}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>

      </div>
    </section>
  )
}
