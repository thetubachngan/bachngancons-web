import { ShieldCheck, PencilRuler, FileText, Landmark, PackageCheck, Eye } from "lucide-react";

export default function Solutions() {
  return (
    <section className="py-24 bg-secondary px-6 relative" id="services">
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center">
        <img src="/space-harmony.svg" alt="Space Harmony Animation" className="w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] object-contain opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 section-header">
          <div>
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Giải Pháp Của Chúng Tôi</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain">6 Cam Kết Của Bách Ngân</h2>
          </div>
          <p className="text-textmuted max-w-sm text-sm font-light leading-relaxed border-l border-accent pl-6">
            Chúng tôi giải quyết mọi nỗi lo của bạn bằng sự minh bạch và chuyên nghiệp tuyệt đối.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 feature-grid">
          <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group card-item">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-bold">Bảo hành 5 năm</h3>
            </div>
            <p className="text-textmuted text-sm font-light leading-relaxed">Hệ thống bảo hành toàn diện, hỗ trợ sửa chữa nhanh chóng sau bàn giao.</p>
          </div>
          <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group card-item">
            <div className="flex items-center gap-3 mb-4">
              <PencilRuler className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-bold">Miễn phí tư vấn thiết kế</h3>
            </div>
            <p className="text-textmuted text-sm font-light leading-relaxed">Tư vấn công năng, phong thủy, thẩm mỹ hoàn toàn miễn phí.</p>
          </div>
          <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group card-item">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-bold">Hồ sơ thủ tục đầy đủ</h3>
            </div>
            <p className="text-textmuted text-sm font-light leading-relaxed">Đăng ký thi công, hồ sơ nghiệm thu, thủ tục pháp lý trọn gói.</p>
          </div>
          <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group card-item">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-bold">Hỗ trợ vay vốn</h3>
            </div>
            <p className="text-textmuted text-sm font-light leading-relaxed">Hướng dẫn thủ tục vay ngân hàng, hỗ trợ giấy tờ cần thiết.</p>
          </div>
          <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group card-item">
            <div className="flex items-center gap-3 mb-4">
              <PackageCheck className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-bold">Cam kết vật tư</h3>
            </div>
            <p className="text-textmuted text-sm font-light leading-relaxed">Đúng chủng loại đã thỏa thuận trong hợp đồng, kiểm tra trước mắt gia chủ.</p>
          </div>
          <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group card-item">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-accent" />
              <h3 className="font-heading text-lg font-bold">Giám sát hàng ngày</h3>
            </div>
            <p className="text-textmuted text-sm font-light leading-relaxed">Kỹ sư giám sát trực tiếp tại công trường, báo cáo tiến độ online.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
