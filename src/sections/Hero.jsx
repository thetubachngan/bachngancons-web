import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <header
      className="relative min-h-[100vh] flex flex-col justify-center px-6 overflow-hidden pt-24"
      id="hero"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          className="bg-secondary border border-bordercolor overflow-hidden relative hero-el"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,10,9,0.85), rgba(12,10,9,0.95)), linear-gradient(#292524 1px, transparent 1px), linear-gradient(90deg, #292524 1px, transparent 1px)",
            backgroundSize: "cover, 80px 80px, 80px 80px",
          }}
        >
          {/* SVG Background Container */}
          <div
            id="hero-svg-container"
            className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center"
          >
            <img src="/trust-foundation.svg" className="w-full h-full object-cover opacity-30" alt="Trust Foundation Animation" />
          </div>

          <div className="p-8 md:p-16 relative z-10">
            <p className="uppercase tracking-[0.3em] font-bold text-accent text-xs md:text-sm border-l-2 border-accent pl-4 mb-8 animate-slide-left">
              Thiết kế & Thi công trọn gói
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-textmain leading-[1.1] md:leading-[0.95] mb-3">
              Kiến Tạo Tổ Ấm
            </h1>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-textmuted leading-[1.1] md:leading-[0.95] mb-8">
              Chìa Khóa <span className="text-accent">Trao Tay</span>
            </h1>
            <p className="text-textmuted max-w-lg text-sm md:text-base font-light leading-relaxed mb-10 border-t border-bordercolor pt-6">
              Thiết kế & thi công trọn gói nhà ở, nội thất với sự minh bạch
              tuyệt đối. Bảo hành 5 năm, kỹ sư giám sát trực tiếp, báo cáo tiến
              độ hàng ngày.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-accent text-primary px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-3 group"
              >
                Nhận báo giá miễn phí{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="#portfolio"
                className="bg-transparent border border-bordercolor text-textmain px-8 py-4 text-center text-sm font-bold uppercase tracking-widest hover:border-textmain transition-colors duration-300 flex items-center justify-center"
              >
                Xem công trình →
              </a>
            </div>
            {/* Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-bordercolor pt-8">
              <div
                className="text-center animate-count"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-2xl md:text-3xl font-black text-accent font-heading">
                  400m²+
                </div>
                <div className="text-[10px] md:text-xs text-textmuted uppercase tracking-wider mt-1">
                  Diện tích thi công
                </div>
              </div>
              <div
                className="text-center animate-count"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-2xl md:text-3xl font-black text-accent font-heading">
                  50+
                </div>
                <div className="text-[10px] md:text-xs text-textmuted uppercase tracking-wider mt-1">
                  Công trình hoàn thành
                </div>
              </div>
              <div
                className="text-center animate-count"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-2xl md:text-3xl font-black text-accent font-heading">
                  5 năm
                </div>
                <div className="text-[10px] md:text-xs text-textmuted uppercase tracking-wider mt-1">
                  Bảo hành
                </div>
              </div>
              <div
                className="text-center animate-count"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="text-2xl md:text-3xl font-black text-accent font-heading">
                  10+
                </div>
                <div className="text-[10px] md:text-xs text-textmuted uppercase tracking-wider mt-1">
                  Năm kinh nghiệm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
