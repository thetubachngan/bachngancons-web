import { motion } from 'framer-motion'

export default function Card({ icon, title, description, className = '' }) {
    return (
        <motion.div
            className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-8 transition-all duration-200 ${className}`}
            whileHover={{
                y: -6,
                boxShadow: 'var(--shadow-card-hover)',
                transition: { duration: 0.18, ease: 'easeOut' },
            }}
            style={{ boxShadow: 'var(--shadow-card)' }}
        >
            {icon && (
                <div className="text-[var(--color-accent)] mb-6 text-3xl">{icon}</div>
            )}
            {title && (
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">{title}</h3>
            )}
            {description && (
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{description}</p>
            )}
        </motion.div>
    )
}
