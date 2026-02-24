import { Shield, Award, Building2, Hammer, CheckCircle, Star } from 'lucide-react'

const items = [
    { icon: <Shield size={24} />, label: 'ISO 9001:2015' },
    { icon: <Award size={24} />, label: 'Top 100 Nhà thầu uy tín' },
    { icon: <Building2 size={24} />, label: '50+ Công trình hoàn thành' },
    { icon: <Hammer size={24} />, label: 'Chứng chỉ Năng lực XD' },
    { icon: <CheckCircle size={24} />, label: 'Bảo hành 5 năm' },
    { icon: <Star size={24} />, label: '10+ Năm kinh nghiệm' },
]

export default function TrustBar() {
    return (
        <section className="py-10 border-y border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)]">
            <div className="animate-marquee flex gap-12 whitespace-nowrap">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[var(--color-text-muted)]">
                        <span className="text-[var(--color-accent)]">{item.icon}</span>
                        <span className="text-sm font-medium">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
