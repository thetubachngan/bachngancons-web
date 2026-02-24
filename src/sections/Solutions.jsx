import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { ShieldCheck, Palette, FileText, Landmark, Package, UserCheck } from 'lucide-react'

const commitments = [
    {
        icon: <ShieldCheck size={32} />,
        title: 'Bảo hành 5 năm',
        description: 'Hệ thống bảo hành toàn diện cho toàn bộ hạng mục thi công, cam kết xử lý trong 48h.',
    },
    {
        icon: <Palette size={32} />,
        title: 'Miễn phí tư vấn thiết kế',
        description: 'Tư vấn công năng, thẩm mỹ, phong thủy hoàn toàn miễn phí trước khi ký hợp đồng.',
    },
    {
        icon: <FileText size={32} />,
        title: 'Hồ sơ thủ tục đầy đủ',
        description: 'Hỗ trợ đăng ký thi công, giấy phép xây dựng, nghiệm thu công trình theo quy định.',
    },
    {
        icon: <Landmark size={32} />,
        title: 'Hỗ trợ vay vốn',
        description: 'Tư vấn và hỗ trợ thủ tục vay vốn ngân hàng để xây dựng nhà ở.',
    },
    {
        icon: <Package size={32} />,
        title: 'Cam kết vật tư',
        description: 'Đúng chủng loại, đúng thương hiệu như đã thỏa thuận trong hợp đồng. Không thay thế.',
    },
    {
        icon: <UserCheck size={32} />,
        title: 'Giám sát hàng ngày',
        description: 'Kỹ sư giám sát trực tiếp tại công trình, báo cáo tiến độ online cho gia chủ mỗi ngày.',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    }),
}

export default function Solutions() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <SectionWrapper id="solutions" dark>
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">Tại sao chọn chúng tôi?</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    6 cam kết của Bách Ngân
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                    Mỗi cam kết là lời hứa bằng hành động, được bảo đảm bằng hợp đồng rõ ràng.
                </p>
            </div>

            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {commitments.map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={cardVariants}
                        className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-large)] p-8 hover:border-[var(--color-accent)]/50 transition-colors duration-300"
                        whileHover={{ y: -4 }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-14 h-14 rounded-[var(--radius-card)] bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-4">{item.title}</h3>
                                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}
