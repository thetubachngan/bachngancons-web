import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CounterStat({ end, suffix = '', label }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return
        let start = 0
        const duration = 2000
        const increment = end / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [isInView, end])

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent)] font-[var(--font-heading)]" style={{ fontFamily: 'var(--font-heading)' }}>
                {count}{suffix}
            </div>
            <div className="text-sm text-[var(--color-text-muted)] mt-2">{label}</div>
        </div>
    )
}
