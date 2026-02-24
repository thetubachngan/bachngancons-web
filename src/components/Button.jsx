import { motion } from 'framer-motion'

const variants = {
    primary: 'bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)] font-semibold',
    secondary: 'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] font-medium',
    ghost: 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] font-medium',
}

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', href, ...props }) {
    const classes = `inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`

    const motionProps = {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
    }

    if (href) {
        return (
            <motion.a href={href} className={classes} {...motionProps} {...props}>
                {children}
            </motion.a>
        )
    }

    return (
        <motion.button className={classes} {...motionProps} {...props}>
            {children}
        </motion.button>
    )
}
