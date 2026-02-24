import { ArrowRight, Wrench, Layers, Home } from "lucide-react";

export default function KnowledgeHub() {
  return (
    <section className="py-24 bg-secondary px-6" id="knowledge">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 section-header">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-2">Kiến Thức Xây Dựng</h2>
            <p className="text-textmuted text-sm font-light">Trang bị kiến thức để xây nhà không còn là nỗi lo.</p>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest text-accent hover:text-yellow-400 transition-colors flex items-center gap-2">
            Xem thêm bài viết <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 feature-grid">
          {/* Article 1 */}
          <article className="bg-primary border border-bordercolor hover:border-accent group transition-colors duration-300 card-item">
            <div className="aspect-video bg-secondary border-b border-bordercolor flex items-center justify-center overflow-hidden relative">
              <Wrench className="w-10 h-10 text-bordercolor group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="text-xs text-accent uppercase tracking-widest font-bold mb-3">Kỹ thuật thi công</div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                Hướng dẫn cắt đầu cọc bê tông 150×150
              </h3>
              <p className="text-textmuted text-sm font-light line-clamp-3 mb-6">Đảm bảo chất lượng móng cọc với kỹ thuật cắt đầu cọc đúng chuẩn, không gây nứt vỡ cọc bê tông cốt thép.</p>
              <span className="text-xs uppercase tracking-widest font-bold text-textmain pb-1 border-b border-textmain cursor-pointer">
                Đọc thêm
              </span>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-primary border border-bordercolor hover:border-accent group transition-colors duration-300 card-item">
            <div className="aspect-video bg-secondary border-b border-bordercolor flex items-center justify-center overflow-hidden relative">
              <Layers className="w-10 h-10 text-bordercolor group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="text-xs text-accent uppercase tracking-widest font-bold mb-3">Vật liệu xây dựng</div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                Sỏi tự nhiên vs Đá nghiền: Chọn đúng cho bê tông
              </h3>
              <p className="text-textmuted text-sm font-light line-clamp-3 mb-6">Phân tích ưu nhược điểm của sỏi và đá dăm trong cấp phối bê tông để bạn đưa ra lựa chọn vật liệu tốt nhất.</p>
              <span className="text-xs uppercase tracking-widest font-bold text-textmain pb-1 border-b border-textmain cursor-pointer">
                Đọc thêm
              </span>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-primary border border-bordercolor hover:border-accent group transition-colors duration-300 card-item">
            <div className="aspect-video bg-secondary border-b border-bordercolor flex items-center justify-center overflow-hidden relative">
              <Home className="w-10 h-10 text-bordercolor group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="text-xs text-accent uppercase tracking-widest font-bold mb-3">Kiến thức nền móng</div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                4 loại móng phổ biến: Chọn đúng cho đất nhà bạn
              </h3>
              <p className="text-textmuted text-sm font-light line-clamp-3 mb-6">Móng đơn, móng băng, móng bè hay móng cọc? Hướng dẫn chọn loại móng phù hợp với địa chất để tiết kiệm chi phí.</p>
              <span className="text-xs uppercase tracking-widest font-bold text-textmain pb-1 border-b border-textmain cursor-pointer">
                Đọc thêm
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
