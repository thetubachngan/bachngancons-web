import { Image, ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="py-24 bg-primary px-6 border-b border-bordercolor" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto section-header">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Các Dự Án Tiêu Biểu</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Công Trình Đã Thực Hiện</h2>
          <div className="h-px w-24 bg-bordercolor mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 feature-grid">
          {/* Project 1 */}
          <div className="group cursor-pointer card-item">
            <div className="relative overflow-hidden border border-bordercolor aspect-[4/3] bg-secondary mb-4">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Placeholder div for image */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-bordercolor group-hover:scale-105 transition-transform duration-700">
                <Image className="w-12 h-12" />
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-1">
              Nhà phố Tây Tựu
            </h3>
            <p className="text-textmuted text-sm mb-4">Hà Nội • 400m² • Xây mới trọn gói</p>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textmain group-hover:text-accent transition-colors">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer card-item">
            <div className="relative overflow-hidden border border-bordercolor aspect-[4/3] bg-secondary mb-4">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <div className="w-full h-full bg-secondary flex items-center justify-center text-bordercolor group-hover:scale-105 transition-transform duration-700">
                <Image className="w-12 h-12" />
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-1">
              Nội thất Ngô Quyền
            </h3>
            <p className="text-textmuted text-sm mb-4">Hải Phòng • Nội thất toàn bộ</p>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textmain group-hover:text-accent transition-colors">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer card-item">
            <div className="relative overflow-hidden border border-bordercolor aspect-[4/3] bg-secondary mb-4">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <div className="w-full h-full bg-secondary flex items-center justify-center text-bordercolor group-hover:scale-105 transition-transform duration-700">
                <Image className="w-12 h-12" />
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-1">
              Cafe Phúc
            </h3>
            <p className="text-textmuted text-sm mb-4">Thi công thương mại</p>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textmain group-hover:text-accent transition-colors">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border border-bordercolor text-textmain px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-textmain transition-colors duration-300 inline-block">
            Xem toàn bộ dự án
          </button>
        </div>
      </div>
    </section>
  );
}
