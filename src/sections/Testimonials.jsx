import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        quote: 'Mỗi không gian sống là một câu chuyện. Và chúng tôi đã cùng gia chủ viết nên câu chuyện ấy bằng sự tỉ mỉ trong từng chi tiết.',
        author: 'Anh Minh — Chủ nhà Tây Tựu',
        role: 'Xây nhà phố 4 tầng',
    },
    {
        quote: 'Đội ngũ Bách Ngân làm việc rất chuyên nghiệp, báo cáo tiến độ hàng ngày, vật tư đúng cam kết. Tôi rất an tâm suốt quá trình thi công.',
        author: 'Chị Hương — Hải Phòng',
        role: 'Nội thất trọn gói',
    },
    {
        quote: 'Báo giá rõ ràng, không phát sinh. Kỹ sư giám sát nhiệt tình, sẵn sàng giải đáp mọi thắc mắc. Sẽ giới thiệu cho bạn bè.',
        author: 'Anh Tuấn — Hà Nội',
        role: 'Cải tạo nhà cũ',
    },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)

    const next = () => setActive((prev) => (prev + 1) % testimonials.length)
    const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <SectionWrapper id="testimonials" dark>
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">Phản hồi</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    Khách hàng nói gì?
                </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
                <Quote size={48} className="text-[var(--color-accent)]/20 absolute -top-4 left-0" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="text-center px-8 py-12"
                    >
                        <p className="text-lg sm:text-xl text-[var(--color-text-main)] leading-relaxed mb-12 italic" style={{ fontFamily: 'var(--font-heading)' }}>
                            "{testimonials[active].quote}"
                        </p>
                        <div>
                            <p className="text-[var(--color-accent)] font-semibold">{testimonials[active].author}</p>
                            <p className="text-sm text-[var(--color-text-muted)]">{testimonials[active].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                        aria-label="Next"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </SectionWrapper>
    )
}
