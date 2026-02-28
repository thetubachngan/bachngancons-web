import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Clock, Home, Mail } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="w-full relative z-50 bg-secondary" id="main-nav">
      {/* Tier 1: Top Bar */}
      <div className="bg-[#020617] text-textmuted text-[10px] md:text-xs border-b border-bordercolor">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center gap-6">
          <Link to="/quy-trinh" className="hover:text-accent transition-colors uppercase">Quy trình</Link>
          <Link to="/cam-ket" className="hover:text-accent transition-colors uppercase">Cam kết</Link>
          <Link to="/phong-thuy" className="hover:text-accent transition-colors uppercase">Thước lỗ ban</Link>
          <Link to="/thi-cong" className="hover:text-accent transition-colors uppercase text-accent font-bold">Thi Công Trọn Gói</Link>
        </div>
      </div>

      {/* Tier 2: Middle Bar (Logo & Contact) */}
      <div className="bg-secondary text-textmain">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer group">
            <img src="/logo_light.png" alt="Bách Ngân Construction" className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-500" />
            <span className="font-heading font-black text-2xl md:text-3xl tracking-wide text-textmain group-hover:text-accent transition-colors duration-500">
              Bách Ngân D&B
            </span>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 text-sm">
            <div className="flex items-center gap-3">
              <div className="text-accent">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-textmain">085.865.1818</p>
                <p className="font-bold text-textmain mt-0.5">0912.874.868</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3 border-l border-bordercolor pl-6">
              <div className="text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-textmain text-xs">19 Tổ 3 Tình Quang, Việt Hưng,</p>
                <p className="text-textmuted text-xs">Long Biên, Hà Nội</p>
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-3 border-l border-bordercolor pl-6">
              <div className="text-accent">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-textmain text-xs">Khách hàng liên hệ</p>
                <p className="text-textmuted text-xs">bachngancons@gmail.com</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3 border-l border-bordercolor pl-6">
              <div className="text-accent">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-textmain text-xs">8H-17H30</p>
                <p className="text-textmuted text-xs">T2-T7 Hàng Tuần</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Navigation */}
      <div className="bg-[#020617] text-textmain overflow-visible border-t border-bordercolor shadow-md relative z-40">
        <div className="max-w-7xl mx-auto pl-6 flex items-center h-14 relative z-50">
          {/* Home Icon */}
          <Link to="/" className="pr-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full">
            <Home size={20} />
          </Link>

          <div className="flex items-center text-sm font-bold uppercase tracking-widest h-full relative z-40">
            {/* Về chúng tôi */}
            <Link to="/about" className="px-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full">
              Về chúng tôi
            </Link>

            {/* Lĩnh vực */}
            <Link to="/services" className="px-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full">
              Lĩnh vực
            </Link>

            {/* Dự án */}
            <Link to="/portfolio" className={`px-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full ${location.pathname.startsWith('/portfolio') ? 'text-accent' : ''}`}>
              Dự án
            </Link>

            {/* Kiến thức */}
            <Link to="/blog" className={`px-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full ${location.pathname.startsWith('/blog') ? 'text-accent' : ''}`}>
              Kiến thức
            </Link>

            {/* Tin tức */}
            <Link to="/news" className="px-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full">
              Tin tức
            </Link>

            {/* Hợp tác */}
            <Link to="/partners" className="px-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full">
              Hợp tác
            </Link>

            {/* Tuyển dụng */}
            <Link to="/careers" className="px-6 border-r border-bordercolor hover:text-accent transition-colors flex items-center h-full">
              Tuyển dụng
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
