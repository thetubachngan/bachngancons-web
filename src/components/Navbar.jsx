import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav
      className="fixed w-full top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-bordercolor transition-all duration-500"
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src="/logo_light.png" alt="Bách Ngân Construction" className="h-14 md:h-16 w-auto group-hover:scale-105 transition-transform duration-500" />
          <span className="font-heading font-black text-2xl md:text-3xl tracking-wide text-textmain group-hover:text-accent transition-colors duration-500">Cty Bách Ngân</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 font-bold text-xs tracking-widest uppercase">
          {isHome ? (
            <>
              <a
                href="#services"
                className="text-textmuted hover:text-textmain transition-colors duration-300"
              >
                Dịch vụ
              </a>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="text-textmuted hover:text-textmain transition-colors duration-300"
              >
                Trang chủ
              </Link>
            </>
          )}
          <Link
            to="/portfolio"
            className={`transition-colors duration-300 ${location.pathname.startsWith('/portfolio') ? 'text-accent' : 'text-textmuted hover:text-textmain'}`}
          >
            Công trình
          </Link>
          <Link
            to="/blog"
            className={`transition-colors duration-300 ${location.pathname.startsWith('/blog') ? 'text-accent' : 'text-textmuted hover:text-textmain'}`}
          >
            Kiến thức
          </Link>
        </div>
        <Link
          to={isHome ? "#contact" : "/"}
          className="bg-accent border border-accent text-primary px-4 md:px-8 py-2 md:py-3 font-bold text-xs tracking-widest uppercase hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2"
        >
          Báo giá <ArrowRight className="w-4 h-4 hidden md:block" />
        </Link>
      </div>
    </nav>
  );
}
