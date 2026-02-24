import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Button from './Button'

const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Dịch vụ', href: '#solutions' },
    { label: 'Công trình', href: '#portfolio' },
    { label: 'Quy trình', href: '#process' },
    { label: 'Kiến thức', href: '#knowledge' },
    { label: 'Liên hệ', href: '#contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Bách Ngân" className="h-10 w-auto" />
                        <div className="hidden sm:block">
                            <div className="text-sm font-semibold text-[var(--color-text-main)]">BÁCH NGÂN</div>
                            <div className="text-xs text-[var(--color-text-muted)]">Construction</div>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-3">
                        <Button size="sm" href="#contact" className="hidden sm:inline-flex">
                            <Phone size={16} />
                            Báo giá miễn phí
                        </Button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]"
                    >
                        <div className="px-4 py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button size="sm" href="#contact" className="mt-2">
                                <Phone size={16} />
                                Báo giá miễn phí
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
