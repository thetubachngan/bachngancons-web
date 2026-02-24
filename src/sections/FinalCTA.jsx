import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle, Loader2 } from 'lucide-react'

const TELEGRAM_BOT_TOKEN = '8724706672:AAHar8HJMPHW3EpXlEi1Ma3fahF21CYP6SI'
const TELEGRAM_CHAT_ID = '7177776899'

async function sendTelegramMessage(formData) {
    const message = `🏠 *YÊU CẦU TƯ VẤN MỚI*\n\n👤 *Họ tên:* ${formData.name}\n📞 *SĐT:* ${formData.phone}\n🏗️ *Loại công trình:* ${formData.type || 'Chưa chọn'}\n📐 *Diện tích:* ${formData.area || 'Chưa cung cấp'}\n📝 *Ghi chú:* ${formData.note || 'Không có'}\n\n⏰ *Thời gian:* ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
        }),
    })

    return response.ok
}

export default function FinalCTA() {
    const [formData, setFormData] = useState({
        name: '', phone: '', type: '', area: '', note: '',
    })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            await sendTelegramMessage(formData)
            setStatus('success')
            setFormData({ name: '', phone: '', type: '', area: '', note: '' })
            setTimeout(() => setStatus('idle'), 4000)
        } catch (err) {
            console.error('Telegram send failed:', err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const projectTypes = {
        'nha-pho': 'Nhà phố',
        'biet-thu': 'Biệt thự',
        'noi-that': 'Nội thất',
        'thuong-mai': 'Công trình thương mại',
        'cai-tao': 'Cải tạo / Sửa chữa',
    }

    return (
        <SectionWrapper id="contact" dark>
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    <span className="text-[var(--color-accent)]">Bắt đầu</span> xây tổ ấm của bạn
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-xl mx-auto text-lg">
                    Liên hệ ngay để nhận tư vấn và báo giá miễn phí từ đội ngũ kỹ sư Bách Ngân.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-5xl mx-auto">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-large)] p-8 sm:p-10">
                    <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-10" style={{ fontFamily: 'var(--font-heading)' }}>
                        Gửi yêu cầu tư vấn
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className="block text-sm text-[var(--color-text-muted)] mb-2 font-medium">Họ và tên *</label>
                            <input
                                type="text" name="name" value={formData.name} onChange={handleChange} required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] px-4 py-3.5 text-[var(--color-text-main)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                placeholder="Nguyễn Văn A"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[var(--color-text-muted)] mb-2 font-medium">Số điện thoại *</label>
                            <input
                                type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] px-4 py-3.5 text-[var(--color-text-main)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                placeholder="0912 345 678"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-sm text-[var(--color-text-muted)] mb-2 font-medium">Loại công trình</label>
                            <select
                                name="type" value={formData.type} onChange={handleChange}
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] px-4 py-3.5 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                            >
                                <option value="">Chọn loại công trình</option>
                                <option value="nha-pho">Nhà phố</option>
                                <option value="biet-thu">Biệt thự</option>
                                <option value="noi-that">Nội thất</option>
                                <option value="thuong-mai">Công trình thương mại</option>
                                <option value="cai-tao">Cải tạo / Sửa chữa</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-[var(--color-text-muted)] mb-2 font-medium">Diện tích dự kiến</label>
                            <input
                                type="text" name="area" value={formData.area} onChange={handleChange}
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] px-4 py-3.5 text-[var(--color-text-main)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                placeholder="VD: 100m²"
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="block text-sm text-[var(--color-text-muted)] mb-2 font-medium">Ghi chú thêm</label>
                        <textarea
                            name="note" value={formData.note} onChange={handleChange} rows={4}
                            className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] px-4 py-3.5 text-[var(--color-text-main)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                            placeholder="Mô tả thêm yêu cầu của bạn..."
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
                        {status === 'sending' && <><Loader2 size={18} className="animate-spin" /> Đang gửi...</>}
                        {status === 'success' && <><CheckCircle size={18} /> Đã gửi thành công!</>}
                        {status === 'error' && '❌ Gửi thất bại, thử lại'}
                        {status === 'idle' && <><Send size={18} /> Gửi yêu cầu tư vấn</>}
                    </Button>
                </form>

                {/* Contact Info */}
                <div className="flex flex-col gap-10">
                    <div className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-large)] p-12">
                        <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-10" style={{ fontFamily: 'var(--font-heading)' }}>Thông tin liên hệ</h3>

                        <div className="flex flex-col gap-7">
                            <a href="tel:0858651818" className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                                <div className="w-12 h-12 rounded-[var(--radius-card)] bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-[var(--color-text-main)]">Hotline</div>
                                    <div className="text-base mt-0.5">0912.874.868 – 085.865.1818</div>
                                </div>
                            </a>

                            <a href="mailto:bachngancons@gmail.com" className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                                <div className="w-12 h-12 rounded-[var(--radius-card)] bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-[var(--color-text-main)]">Email</div>
                                    <div className="text-base mt-0.5">bachngancons@gmail.com</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
                                <div className="w-12 h-12 rounded-[var(--radius-card)] bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-[var(--color-text-main)]">Địa chỉ</div>
                                    <div className="text-base mt-0.5">Số 19, tổ 3 Tình Quang, Việt Hưng, Hà Nội</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zalo CTA */}
                    <a
                        href="https://zalo.me/0858651818"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 transition-colors rounded-[var(--radius-large)] p-6"
                    >
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <MessageCircle size={28} className="text-white" />
                        </div>
                        <div>
                            <div className="text-white font-semibold text-lg">Chat qua Zalo</div>
                            <div className="text-white/80 text-sm mt-0.5">Tư vấn nhanh 24/7</div>
                        </div>
                    </a>

                    {/* Map */}
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-large)] overflow-hidden h-52">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4738503!2d105.8895!3d21.0535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAzJzEyLjYiTiAxMDXCsDUzJzIyLjIiRQ!5e0!3m2!1svi!2s!4v1"
                            className="w-full h-full border-0 grayscale opacity-70"
                            allowFullScreen=""
                            loading="lazy"
                            title="Bách Ngân Construction location"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
