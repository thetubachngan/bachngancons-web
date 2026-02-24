import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        q: 'Chi phí xây nhà trọn gói được tính như thế nào?',
        a: 'Chi phí được tính dựa trên diện tích xây dựng, số tầng, vật liệu sử dụng và các hạng mục hoàn thiện. Bách Ngân báo giá chi tiết từng hạng mục, không có chi phí ẩn. Bạn sẽ nhận được bảng dự toán minh bạch trước khi ký hợp đồng.',
    },
    {
        q: 'Thời gian thi công trung bình là bao lâu?',
        a: 'Tùy quy mô công trình, thông thường nhà phố 3-4 tầng mất khoảng 4-6 tháng thi công phần thô và 2-3 tháng hoàn thiện. Bách Ngân cam kết tiến độ cụ thể trong hợp đồng.',
    },
    {
        q: 'Bách Ngân thi công ở khu vực nào?',
        a: 'Chúng tôi chủ yếu thi công tại Hà Nội và các tỉnh miền Bắc. Đối với các dự án lớn, chúng tôi có thể triển khai toàn quốc.',
    },
    {
        q: 'Quy trình thanh toán như thế nào?',
        a: 'Thanh toán theo giai đoạn: đặt cọc 10%, phần móng 20%, tầng thô 30%, hoàn thiện 30%, nghiệm thu 10%. Làm tới đâu, trả tiền tới đó.',
    },
    {
        q: 'Bảo hành công trình bao gồm những gì?',
        a: 'Bảo hành 5 năm cho kết cấu, chống thấm, hệ thống điện nước. Cam kết xử lý các vấn đề phát sinh trong thời gian bảo hành trong vòng 48 giờ.',
    },
    {
        q: 'Nếu muốn thay đổi thiết kế giữa chừng thì sao?',
        a: 'Bách Ngân linh hoạt trong việc điều chỉnh thiết kế. Mọi thay đổi sẽ được thống nhất bằng văn bản, dự toán lại chi phí phát sinh (nếu có) và phải được gia chủ ký duyệt trước khi thực hiện.',
    },
]

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div className="border border-[var(--color-border)] rounded-[var(--radius-large)] overflow-hidden bg-[var(--color-surface)]/50">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
            >
                <span className="text-[var(--color-text-main)] font-medium pr-6 text-base">{faq.q}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-[var(--color-accent)]"
                >
                    <ChevronDown size={20} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-base text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-5">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <SectionWrapper id="faq">
            <div className="text-center mb-12">
                <span className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider">FAQ</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    Câu hỏi thường gặp
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
                    Giải đáp những thắc mắc phổ biến nhất về dịch vụ xây dựng của Bách Ngân.
                </p>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-6">
                {faqs.map((faq, i) => (
                    <FAQItem
                        key={i}
                        faq={faq}
                        isOpen={openIndex === i}
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                ))}
            </div>
        </SectionWrapper>
    )
}
