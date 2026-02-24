import { Zap, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed w-full top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-bordercolor transition-all duration-500"
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group">
          <img src="/logo_light.png" alt="Bách Ngân Construction" className="h-14 md:h-16 w-auto group-hover:scale-105 transition-transform duration-500" />
          <span className="font-heading font-black text-2xl md:text-3xl tracking-wide text-textmain group-hover:text-accent transition-colors duration-500">Cty Bách Ngân</span>
        </div>
        <div className="hidden md:flex items-center gap-10 font-bold text-xs tracking-widest uppercase">
          <a
            href="#services"
            className="text-textmuted hover:text-textmain transition-colors duration-300"
          >
            Dịch vụ
          </a>
          <a
            href="#portfolio"
            className="text-textmuted hover:text-textmain transition-colors duration-300"
          >
            Công trình
          </a>
          <a
            href="#knowledge"
            className="text-textmuted hover:text-textmain transition-colors duration-300"
          >
            Kiến thức
          </a>
        </div>
        <button className="bg-accent border border-accent text-primary px-4 md:px-8 py-2 md:py-3 font-bold text-xs tracking-widest uppercase hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2">
          Báo giá <ArrowRight className="w-4 h-4 hidden md:block" />
        </button>
      </div>
    </nav>
  );
}
