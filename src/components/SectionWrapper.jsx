import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '', dark = false }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id={id}
            ref={ref}
            className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-[var(--color-secondary)]' : ''} ${className}`}
        >
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                {children}
            </motion.div>
        </section>
    )
}
