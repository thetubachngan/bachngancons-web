import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react'

const quickLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Dịch vụ', href: '#solutions' },
    { label: 'Công trình', href: '#portfolio' },
    { label: 'Quy trình', href: '#process' },
    { label: 'Kiến thức', href: '#knowledge' },
    { label: 'Liên hệ', href: '#contact' },
]

const services = [
    'Xây nhà trọn gói',
    'Thiết kế kiến trúc',
    'Thi công nội thất',
    'Cải tạo & sửa chữa',
    'Thi công thương mại',
]

export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" alt="Bách Ngân" className="h-10 w-auto" />
                            <div>
                                <div className="font-semibold text-[var(--color-text-main)]">BÁCH NGÂN</div>
                                <div className="text-xs text-[var(--color-text-muted)]">Construction</div>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                            Công ty CP Giải pháp Cơ điện và Xây dựng Bách Ngân — Kiến tạo tổ ấm, chìa khóa trao tay.
                        </p>
                        {/* Social links */}
                        <div className="flex gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                                aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href="https://zalo.me/0858651818" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                                aria-label="Zalo">
                                <MessageCircle size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-main)] uppercase tracking-wider mb-4">Liên kết nhanh</h4>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-main)] uppercase tracking-wider mb-4">Dịch vụ</h4>
                        <ul className="flex flex-col gap-2">
                            {services.map((item) => (
                                <li key={item} className="text-sm text-[var(--color-text-muted)]">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-main)] uppercase tracking-wider mb-4">Liên hệ</h4>
                        <div className="flex flex-col gap-3">
                            <a href="tel:0858651818" className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                                <Phone size={14} /> 085.865.1818
                            </a>
                            <a href="mailto:bachngancons@gmail.com" className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                                <Mail size={14} /> bachngancons@gmail.com
                            </a>
                            <div className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                                <span>Số 19, tổ 3 Tình Quang, Việt Hưng, Hà Nội</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--color-text-muted)]">
                        © 2026 Bách Ngân Construction. All rights reserved.
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                        Thiết kế & phát triển bởi Bách Ngân Team
                    </p>
                </div>
            </div>
        </footer>
    )
}
