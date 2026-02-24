import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary px-6 border-b border-bordercolor">
      <div className="max-w-4xl mx-auto text-center section-header">
        <Quote className="w-12 h-12 text-accent/20 mx-auto mb-8" />
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-textmain leading-tight mb-8">
          "Mỗi không gian sống là một câu chuyện. Và chúng tôi đã cùng gia chủ viết nên câu chuyện ấy bằng sự tỉ
          mỉ trong từng chi tiết."
        </h2>
        <div className="h-px w-24 bg-bordercolor mx-auto mb-8"></div>
        <p className="text-sm uppercase tracking-widest font-bold text-textmuted">Phản hồi từ khách hàng dự án Tây Tựu</p>
      </div>
    </section>
  );
}
