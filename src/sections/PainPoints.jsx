import { Banknote, Box, TrendingUp, Clock, ShieldOff, AlertTriangle } from "lucide-react";

export default function PainPoints() {
  return (
    <section className="py-24 bg-primary px-6 relative" id="pain-points">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto section-header">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Thực trạng ngành xây dựng</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Nỗi Lo Khi Xây Nhà</h2>
          <div className="h-px w-24 bg-bordercolor mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bordercolor border border-bordercolor feature-grid">
          {/* Pain Point Cards */}
          <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item">
            <div className="w-12 h-12 bg-secondary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
              <Banknote className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Báo giá mập mờ</h3>
            <p className="text-textmuted text-sm font-light leading-relaxed">Chi phí ẩn, không rõ ràng. Khách hàng không biết khoản nào phát sinh.</p>
          </div>

          <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item">
            <div className="w-12 h-12 bg-secondary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Vật tư kém chất lượng</h3>
            <p className="text-textmuted text-sm font-light leading-relaxed">Tráo đổi vật liệu, sử dụng hàng kém so với cam kết ban đầu.</p>
          </div>

          <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item">
            <div className="w-12 h-12 bg-secondary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Phát sinh không kiểm soát</h3>
            <p className="text-textmuted text-sm font-light leading-relaxed">Chi phí tăng liên tục, không được thông báo hay ký duyệt trước.</p>
          </div>

          <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item">
            <div className="w-12 h-12 bg-secondary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Tiến độ trễ</h3>
            <p className="text-textmuted text-sm font-light leading-relaxed">Không ai giám sát, chậm tiến độ, ảnh hưởng kế hoạch gia đình.</p>
          </div>

          <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item">
            <div className="w-12 h-12 bg-secondary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
              <ShieldOff className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Không bảo hành</h3>
            <p className="text-textmuted text-sm font-light leading-relaxed">Sau bàn giao "mất hút", không hỗ trợ khi phát sinh sự cố.</p>
          </div>

          <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item">
            <div className="w-12 h-12 bg-secondary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Thiếu chuyên nghiệp</h3>
            <p className="text-textmuted text-sm font-light leading-relaxed">Thi công cẩu thả, không có quy trình, không báo cáo cho gia chủ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
