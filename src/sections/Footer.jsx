import { Zap, Facebook, Youtube, Map } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-12 border-t border-bordercolor">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo_light.png" alt="Bách Ngân Construction" className="h-14 md:h-16 w-auto" />
              <span className="font-heading font-black text-2xl md:text-3xl tracking-wide text-textmain">Cty Bách Ngân</span>
            </div>
            <p className="text-textmuted text-sm font-light leading-relaxed mb-6">
              Công ty Cổ phần Giải pháp Cơ điện và Xây dựng Bách Ngân. <br />
              Kiến tạo không gian, dựng xây niềm tin bền vững.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-bordercolor flex items-center justify-center text-textmuted hover:text-accent hover:border-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-bordercolor flex items-center justify-center text-textmuted hover:text-accent hover:border-accent transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-textmain mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-textmuted text-sm hover:text-accent transition-colors">Trang chủ</a></li>
              <li><a href="#services" className="text-textmuted text-sm hover:text-accent transition-colors">Dịch vụ</a></li>
              <li><a href="#portfolio" className="text-textmuted text-sm hover:text-accent transition-colors">Công trình</a></li>
              <li><a href="#knowledge" className="text-textmuted text-sm hover:text-accent transition-colors">Kiến thức</a></li>
              <li><a href="#contact" className="text-textmuted text-sm hover:text-accent transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-textmain mb-6">Dịch vụ</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-textmuted text-sm hover:text-accent transition-colors">Xây nhà trọn gói</a></li>
              <li><a href="#" className="text-textmuted text-sm hover:text-accent transition-colors">Thiết kế kiến trúc</a></li>
              <li><a href="#" className="text-textmuted text-sm hover:text-accent transition-colors">Thi công nội thất</a></li>
              <li><a href="#" className="text-textmuted text-sm hover:text-accent transition-colors">Thi công nhà xưởng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-textmain mb-6">Bản đồ</h4>
            <div className="w-full h-48 bg-secondary border border-bordercolor overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.360155685718!2d105.92200831533224!3d21.058273985982054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9ccf702758f%3A0xc07ce9a4fba7ba2c!2zMTkgdOG7lSAzIFTDrG5oIFF1YW5nLCBWaeG7h3QgSMawbmcsIExvbmcgQmnDqm4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1703222046830!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bách Ngân Construction Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-bordercolor flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-textmuted font-bold tracking-widest uppercase">
          <p>&copy; 2026 Bách Ngân Construction. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-textmain transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-textmain transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
