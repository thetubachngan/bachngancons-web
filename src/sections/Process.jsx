import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { Search, PenTool, FileSignature, HardHat, CheckCircle } from 'lucide-react'

const steps = [
    {
        icon: <Search size={24} />,
        step: '01',
        title: 'Khảo sát & Tư vấn miễn phí',
        description: 'Đội ngũ kỹ sư đến tận nơi khảo sát hiện trạng, lắng nghe nhu cầu và tư vấn phương án tối ưu.',
    },
    {
        icon: <PenTool size={24} />,
        step: '02',
        title: 'Thiết kế & Báo giá chi tiết',
        description: 'Bản vẽ 3D, bảng dự toán chi tiết từng hạng mục. Không phát sinh, không chi phí ẩn.',
    },
    {
        icon: <FileSignature size={24} />,
        step: '03',
        title: 'Ký hợp đồng minh bạch',
        description: 'Hợp đồng rõ ràng, thanh toán theo giai đoạn: làm tới đâu, trả tiền tới đó.',
    },
    {
        icon: <HardHat size={24} />,
        step: '04',
        title: 'Thi công — Giám sát — Báo cáo',
        description: 'Kỹ sư giám sát trực tiếp tại công trình, báo cáo tiến độ hàng ngày qua hình ảnh và video.',
    },
    {
        icon: <CheckCircle size={24} />,
        step: '05',
        title: 'Nghiệm thu & Bảo hành 5 năm',
        description: 'Nghiệm thu từng hạng mục, bàn giao trọn gói. Bảo hành toàn diện 5 năm.',
    },
]

export default function Process() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <SectionWrapper id="process" dark>
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">Quy trình</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    Quy trình thi công minh bạch
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                    5 bước đơn giản từ ý tưởng đến ngôi nhà mơ ước. Mọi phát sinh đều phải ký duyệt.
                </p>
            </div>

            <div ref={ref} className="relative max-w-3xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] md:transform md:-translate-x-px" />

                {steps.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        className={`relative flex items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] transform -translate-x-1.5 mt-6 z-10 ring-4 ring-[var(--color-secondary)]" />

                        {/* Content */}
                        <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                            <div className={`inline-flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <span className="text-[var(--color-accent)] font-bold text-sm">{item.step}</span>
                                <div className="w-8 h-8 rounded-[var(--radius-card)] bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">{item.title}</h3>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Highlight */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-24 text-center"
            >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-[var(--radius-pill)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5">
                    <span className="text-[var(--color-accent)] text-lg">💡</span>
                    <span className="text-[var(--color-text-main)] text-sm font-medium">
                        "Làm tới đâu, trả tiền tới đó" — Mọi phát sinh phải ký duyệt
                    </span>
                </div>
            </motion.div>
        </SectionWrapper>
    )
}
