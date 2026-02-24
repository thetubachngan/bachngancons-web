import SectionWrapper from '../components/SectionWrapper'
import { ArrowRight, BookOpen } from 'lucide-react'
import Button from '../components/Button'

const articles = [
    {
        category: 'Kỹ thuật thi công',
        title: 'Hướng dẫn cắt đầu cọc bê tông 150×150',
        excerpt: 'Quy trình chuẩn cắt đầu cọc bê tông cốt thép, đảm bảo chất lượng nền móng vững chắc cho công trình.',
        readTime: '5 phút đọc',
    },
    {
        category: 'Vật liệu xây dựng',
        title: 'Sỏi tự nhiên vs Đá nghiền: chọn đúng cho bê tông',
        excerpt: 'So sánh chi tiết ưu nhược điểm của sỏi tự nhiên và đá nghiền, giúp bạn chọn đúng cốt liệu cho từng loại bê tông.',
        readTime: '7 phút đọc',
    },
    {
        category: 'Kiến thức nền móng',
        title: '4 loại móng phổ biến: chọn đúng cho đất nhà bạn',
        excerpt: 'Móng đơn, móng băng, móng bè, móng cọc — hiểu rõ đặc điểm từng loại để chọn phương án phù hợp.',
        readTime: '6 phút đọc',
    },
]

export default function KnowledgeHub() {
    return (
        <SectionWrapper id="knowledge">
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">Blog</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    Kiến thức xây dựng
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                    Chia sẻ kinh nghiệm thực tế từ đội ngũ kỹ sư Bách Ngân, giúp bạn hiểu rõ hơn về quy trình xây dựng.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {articles.map((article, i) => (
                    <div
                        key={i}
                        className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-large)] overflow-hidden hover:border-[var(--color-accent)]/30 transition-colors duration-300"
                    >
                        {/* Thumbnail placeholder */}
                        <div className="h-44 bg-gradient-to-br from-stone-800 to-stone-900 relative flex items-center justify-center">
                            <BookOpen size={32} className="text-[var(--color-accent)]/20" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                                {article.category}
                            </span>
                            <h3 className="text-base font-semibold text-[var(--color-text-main)] mt-4 mb-4 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-[var(--color-text-muted)]">{article.readTime}</span>
                                <Button variant="ghost" size="sm">
                                    Đọc thêm <ArrowRight size={14} />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}
