import { Building2, Hammer, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <section className="py-24 bg-primary px-6 relative border-t border-bordercolor" id="services-preview">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center max-w-2xl mx-auto section-header">
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Lĩnh Vực Hoạt Động</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Dịch Vụ Nổi Bật</h2>
                    <div className="h-px w-24 bg-bordercolor mx-auto mb-6"></div>
                    <p className="text-textmuted text-sm md:text-base font-light leading-relaxed">
                        Giải pháp toàn diện cho mọi công trình. Từ thiết kế kiến trúc, thi công trọn gói đến hoàn thiện nội thất chuyên nghiệp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bordercolor border border-bordercolor feature-grid">
                    {/* Service 1 */}
                    <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item flex flex-col h-full">
                        <div className="w-14 h-14 bg-primary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
                            <Building2 className="w-7 h-7" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3 text-textmain">Thiết Kế Kiến Trúc</h3>
                        <p className="text-textmuted text-sm font-light leading-relaxed flex-grow mb-6">
                            Bản vẽ sáng tạo, tối ưu công năng, chuẩn phong thủy. Không gian sống cá nhân hóa, đậm chất riêng.
                        </p>
                        <Link to="/services" className="text-accent text-sm font-bold tracking-wider hover:text-white transition-colors uppercase inline-flex items-center gap-2 mt-auto">
                            Tìm Hiểu Thêm &rarr;
                        </Link>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item flex flex-col h-full relative overflow-hidden">
                        {/* Highlight Banner */}
                        <div className="absolute top-4 right-[-35px] bg-accent text-primary text-[10px] font-black uppercase py-1 px-10 rotate-45 transform origin-center shadow-md">
                            Mũi Nhọn
                        </div>
                        <div className="w-14 h-14 bg-primary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
                            <Hammer className="w-7 h-7" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3 text-textmain">Thi Công Trọn Gói</h3>
                        <p className="text-textmuted text-sm font-light leading-relaxed flex-grow mb-6">
                            Chìa khóa trao tay - An tâm tuyệt đối. Cam kết vật tư, tiến độ chuẩn xác, bảo hành 5 năm.
                        </p>
                        <Link to="/thi-cong" className="text-accent text-sm font-bold tracking-wider hover:text-white transition-colors uppercase inline-flex items-center gap-2 mt-auto">
                            Tìm Hiểu Thêm &rarr;
                        </Link>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item flex flex-col h-full">
                        <div className="w-14 h-14 bg-primary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
                            <Home className="w-7 h-7" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3 text-textmain">Nội Thất May Đo</h3>
                        <p className="text-textmuted text-sm font-light leading-relaxed flex-grow mb-6">
                            Sản xuất trực tiếp tại xưởng. Thi công tinh xảo, vật liệu rõ nguồn gốc, bảo hành rõ ràng theo từng hạng mục.
                        </p>
                        <Link to="/noi-that" className="text-accent text-sm font-bold tracking-wider hover:text-white transition-colors uppercase inline-flex items-center gap-2 mt-auto">
                            Tìm Hiểu Thêm &rarr;
                        </Link>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-secondary p-8 hover:bg-primary transition-colors duration-300 group card-item flex flex-col h-full">
                        <div className="w-14 h-14 bg-primary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
                            <Wrench className="w-7 h-7" />
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3 text-textmain">Cải Tạo & Sửa Chữa</h3>
                        <p className="text-textmuted text-sm font-light leading-relaxed flex-grow mb-6">
                            Nâng cấp không gian sống, thay đổi công năng. Thi công nhanh gọn, sạch sẽ, không ảnh hưởng kết cấu.
                        </p>
                        <Link to="/cai-tao" className="text-accent text-sm font-bold tracking-wider hover:text-white transition-colors uppercase inline-flex items-center gap-2 mt-auto">
                            Tìm Hiểu Thêm &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
