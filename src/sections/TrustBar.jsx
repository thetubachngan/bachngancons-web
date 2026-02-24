import { CheckCircle, Shield, HardHat } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="py-8 bg-primary border-b border-bordercolor overflow-hidden" id="trustbar">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs text-textmuted uppercase tracking-widest font-bold">
          Đối tác & Chứng nhận tiêu biểu
        </p>
      </div>
      <div className="relative w-full overflow-hidden flex whitespace-nowrap bg-secondary/50 py-4 opacity-70 hover:opacity-100 transition-opacity">
        <div className="animate-marquee flex items-center gap-16 px-8 text-textmuted font-heading text-xl font-bold uppercase">
          <span className="flex items-center">
            <CheckCircle className="inline w-6 h-6 mr-2 text-accent" /> ISO 9001:2015
          </span>
          <span>⭐ Top 10 Nhà thầu uy tín Hà Nội</span>
          <span className="flex items-center">
            <Shield className="inline w-6 h-6 mr-2 text-accent" /> Cam kết 100% vật tư chính hãng
          </span>
          <span className="flex items-center">
            <HardHat className="inline w-6 h-6 mr-2 text-accent" /> Giám sát 24/7
          </span>
          {/* Duplicate for seamless loop */}
          <span className="flex items-center">
            <CheckCircle className="inline w-6 h-6 mr-2 text-accent" /> ISO 9001:2015
          </span>
          <span>⭐ Top 10 Nhà thầu uy tín Hà Nội</span>
          <span className="flex items-center">
            <Shield className="inline w-6 h-6 mr-2 text-accent" /> Cam kết 100% vật tư chính hãng
          </span>
          <span className="flex items-center">
            <HardHat className="inline w-6 h-6 mr-2 text-accent" /> Giám sát 24/7
          </span>
        </div>
      </div>
    </section>
  );
}
