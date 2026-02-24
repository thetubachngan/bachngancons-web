import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Button from '../components/Button'
import CounterStat from '../components/CounterStat'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
            {/* Ambient gradient background */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
                    style={{
                        background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                        animation: 'ambient-gradient 8s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                        animation: 'ambient-gradient 8s ease-in-out infinite 4s',
                    }}
                />
                {/* Hero beam */}
                <div
                    className="absolute top-0 left-0 h-full w-32 opacity-5"
                    style={{
                        background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
                        animation: 'hero-beam 8s linear infinite',
                    }}
                />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text-muted)] mb-10"
                >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    Hơn 10 năm kinh nghiệm xây dựng tại Hà Nội
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                    style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em' }}
                >
                    Kiến tạo tổ ấm
                    <br />
                    <span className="text-[var(--color-accent)]">Chìa khóa trao tay</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--color-text-muted)] mb-12 leading-relaxed"
                >
                    Thiết kế & thi công trọn gói nhà ở, nội thất với sự minh bạch tuyệt đối.
                    Bảo hành 5 năm, kỹ sư giám sát trực tiếp, báo cáo tiến độ hàng ngày.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Button size="lg" href="#contact">
                        <Phone size={18} />
                        Nhận báo giá miễn phí
                    </Button>
                    <Button variant="secondary" size="lg" href="#portfolio">
                        Xem công trình đã thực hiện
                        <ArrowRight size={18} />
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-10 border-t border-[var(--color-border)]"
                >
                    <CounterStat end={400} suffix="m²" label="Diện tích đã thi công" />
                    <CounterStat end={50} suffix="+" label="Công trình hoàn thành" />
                    <CounterStat end={5} suffix=" năm" label="Bảo hành công trình" />
                    <CounterStat end={10} suffix="+" label="Năm kinh nghiệm" />
                </motion.div>
            </div>
        </section>
    )
}
