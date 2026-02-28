import { ArrowRight } from "lucide-react";

export default function Hero() {
  const v = Date.now();
  return (
    <header className="bg-primary relative overflow-hidden text-textmain" id="hero">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      {/* 2-Column Banner Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Quote & Titles */}
        <div className="flex flex-col">
          <div className="mb-6 relative pl-12">
            <span className="absolute top-0 left-0 text-7xl text-bordercolor font-serif leading-none">“</span>
            <p className="uppercase tracking-[0.2em] font-bold text-textmuted text-sm md:text-base mb-2">
              Chìa Khóa Trao Tay
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-textmain leading-tight mb-4">
              Kiến tạo tổ ấm <br /> <span className="text-[#eb6115]">chìa khóa trao tay</span>
            </h1>
          </div>
          <p className="text-textmuted max-w-lg text-base md:text-lg font-light leading-relaxed mb-10 pl-12">
            Thiết kế & thi công trọn gói nhà ở, nội thất với sự minh bạch
            tuyệt đối. Bảo hành 5 năm, kỹ sư giám sát trực tiếp, báo cáo tiến
            độ hàng ngày.
          </p>
          <div className="pl-12 flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="#contact"
              className="bg-[#eb6115] text-white px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-colors duration-300 flex items-center justify-center gap-3 group"
            >
              Nhận báo giá miễn phí{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Right: Animation instead of LACO image */}
        <div className="w-full relative bg-secondary p-4 md:p-8 rounded-lg shadow-xl border border-bordercolor overflow-hidden">
          {/* Using the animation from Animations.jsx */}
          <object
            type="image/svg+xml"
            data={`/operation-system.svg?v=${v}`}
            aria-label="Xây Dựng Phễu Niềm Tin - Animation"
            className="w-full h-auto mx-auto mask-image-bottom"
            style={{ minHeight: '300px', maxHeight: '500px' }}
          >
            Trình duyệt không hỗ trợ SVG
          </object>
        </div>
      </div>

      {/* Metrics Bar below hero */}
      <div className="bg-secondary border-t border-bordercolor py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              className="text-center animate-count"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl md:text-4xl font-black text-[#eb6115] font-heading drop-shadow-md">
                400m²+
              </div>
              <div className="text-[11px] md:text-sm text-textmuted font-bold uppercase tracking-wider mt-2">
                Diện tích thi công
              </div>
            </div>
            <div
              className="text-center animate-count"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl md:text-4xl font-black text-[#eb6115] font-heading drop-shadow-md">
                50+
              </div>
              <div className="text-[11px] md:text-sm text-textmuted font-bold uppercase tracking-wider mt-2">
                Công trình hoàn thành
              </div>
            </div>
            <div
              className="text-center animate-count"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-3xl md:text-4xl font-black text-[#eb6115] font-heading drop-shadow-md">
                5 năm
              </div>
              <div className="text-[11px] md:text-sm text-textmuted font-bold uppercase tracking-wider mt-2">
                Bảo hành
              </div>
            </div>
            <div
              className="text-center animate-count"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-3xl md:text-4xl font-black text-[#eb6115] font-heading drop-shadow-md">
                10+
              </div>
              <div className="text-[11px] md:text-sm text-textmuted font-bold uppercase tracking-wider mt-2">
                Năm kinh nghiệm
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
