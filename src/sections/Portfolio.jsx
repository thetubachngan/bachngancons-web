import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'
import { ArrowRight, MapPin, Ruler, Building } from 'lucide-react'

const projects = [
    {
        title: 'Nhà phố Tây Tựu',
        location: 'Tây Tựu, Hà Nội',
        area: '400m²',
        type: 'Xây mới trọn gói',
        description: 'Thiết kế và thi công trọn gói nhà phố 4 tầng, kết hợp không gian kinh doanh tầng 1 và nhà ở các tầng trên.',
        gradient: 'from-amber-900/30 to-stone-900/80',
    },
    {
        title: 'Nội thất nhà ở Hải Phòng',
        location: 'Ngô Quyền, Hải Phòng',
        area: '250m²',
        type: 'Nội thất toàn bộ',
        description: 'Thiết kế và thi công nội thất toàn bộ ngôi nhà 3 tầng theo phong cách hiện đại, tối ưu công năng.',
        gradient: 'from-yellow-900/30 to-stone-900/80',
    },
    {
        title: 'Cafe Phúc',
        location: 'Hà Nội',
        area: '120m²',
        type: 'Thi công thương mại',
        description: 'Thi công nội thất quán cafe theo phong cách industrial, tạo không gian sáng tạo và ấm cúng.',
        gradient: 'from-orange-900/30 to-stone-900/80',
    },
]

export default function Portfolio() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <SectionWrapper id="portfolio">
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">Portfolio</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    Công trình tiêu biểu
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                    Mỗi công trình là một câu chuyện được viết nên bằng sự tỉ mỉ và tâm huyết.
                </p>
            </div>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                        className="group relative rounded-[var(--radius-large)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]"
                    >
                        {/* Image placeholder with gradient */}
                        <div className={`h-56 bg-gradient-to-br ${project.gradient} relative`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Building size={48} className="text-[var(--color-accent)]/30" />
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-300" />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-5 text-xs text-[var(--color-text-muted)]">
                                <span className="flex items-center gap-1"><MapPin size={12} />{project.location}</span>
                                <span className="flex items-center gap-1"><Ruler size={12} />{project.area}</span>
                            </div>
                            <span className="inline-block px-3 py-1 rounded-[var(--radius-pill)] bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium mb-5">
                                {project.type}
                            </span>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <Button variant="ghost" size="sm">
                                Xem chi tiết <ArrowRight size={14} />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    )
}
