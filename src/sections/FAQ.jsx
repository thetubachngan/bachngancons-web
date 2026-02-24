import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Chi phí xây nhà trọn gói được tính như thế nào?",
      a: "Chi phí được tính theo m² xây dựng, bao gồm nhân công, vật tư, giám sát. Báo giá chi tiết từng hạng mục, không phát sinh ẩn."
    },
    {
      q: "Thời gian thi công trung bình là bao lâu?",
      a: "Tùy quy mô, nhà 3-4 tầng phần thô từ 3-4 tháng, hoàn thiện trọn gói 5-7 tháng. Cam kết đúng tiến độ hợp đồng."
    },
    {
      q: "Bách Ngân thi công ở khu vực nào?",
      a: "Chúng tôi nhận thiết kế và thi công trọn gói chủ yếu tại Hà Nội và các tỉnh lân cận miền Bắc."
    },
    {
      q: "Bảo hành công trình bao gồm những gì?",
      a: "Bảo hành 5 năm toàn diện: kết cấu, chống thấm, hệ thống điện nước. Hỗ trợ sửa chữa nhanh trong 24h."
    }
  ];

  return (
    <section className="py-24 bg-primary px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center section-header">
          <h2 className="font-heading text-4xl font-black text-textmain mb-4">Câu Hỏi Thường Gặp</h2>
          <div className="h-px w-24 bg-accent mx-auto"></div>
        </div>

        <div className="space-y-px bg-bordercolor border border-bordercolor feature-grid">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item bg-primary cursor-pointer hover:bg-secondary/50 transition-colors ${openIndex === idx ? 'open' : ''}`}
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex justify-between items-center p-6">
                <h3 className="font-heading text-lg font-bold pr-8">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-accent faq-chevron shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </div>
              <div className={`faq-answer ${openIndex === idx ? 'max-h-[200px]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-300 ease-out`}>
                <p className="px-6 pb-6 text-textmuted text-sm font-light leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
