import React, { useEffect } from 'react';
import { Check, Star, TriangleAlert } from 'lucide-react';
import Navbar from '../components/Navbar';
import ServiceNav from '../components/ServiceNav';
import Footer from '../sections/Footer';

export default function ServicesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />
            <ServiceNav />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-[#334155] relative overflow-hidden">
                {/* Architectural Glowing Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent opacity-10 blur-[120px] rounded-[100%] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight text-textmain drop-shadow-md">
                        Báo Giá <span className="text-accent">Thiết Kế Kiến Trúc</span>
                    </h1>
                    <p className="text-textmuted text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Các gói thiết kế kiến trúc và nội thất được may đo chuẩn xác theo từng nhu cầu.
                    </p>
                </div>
            </section>

            <main className="flex-1 py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">I. Thiết Kế Kiến Trúc</h2>
                        <h3 className="text-3xl font-heading font-black text-textmain">Các Gói Hồ Sơ Thiết Kế</h3>
                        <p className="text-textmuted mt-4 max-w-2xl mx-auto font-light">
                            Hồ sơ thiết kế là bản lề cốt lõi để hiện thực hóa ngôi nhà trong mơ. Bách Ngân cung cấp 3 gói thiết kế với độ chi tiết nâng dần để đáp ứng mọi ngân sách.
                        </p>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Package 1: Cơ bản */}
                        <div className="bg-secondary p-8 border border-bordercolor flex flex-col hover:border-accent/50 transition-colors duration-300">
                            <h4 className="text-xl font-heading font-bold text-textmain mb-2">GÓI CƠ BẢN</h4>
                            <p className="text-sm text-textmuted mb-6">Thiết kế Kiến trúc sơ bộ</p>

                            <div className="mb-6 pb-6 border-b border-bordercolor">
                                <span className="text-4xl font-black font-heading text-textmain">80k</span>
                                <span className="text-textmuted text-sm border-l border-bordercolor ml-2 pl-2">/ m²</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1 text-sm text-textmuted font-light">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Bản vẽ mặt bằng bố trí công năng nội thất</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Phối cảnh 3D ngoại thất (mặt tiền)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Bản vẽ chi tiết triển khai kiến trúc (cửa, cầu thang, lát sàn...)</span>
                                </li>
                                <li className="flex items-start gap-3 opacity-30">
                                    <TriangleAlert className="w-5 h-5 shrink-0" />
                                    <span>Không bao gồm kết cấu, ME</span>
                                </li>
                            </ul>

                            <button className="w-full py-4 bg-primary border-2 border-bordercolor hover:border-accent text-textmain font-bold uppercase tracking-wider text-sm transition-colors duration-300">
                                Nhận Tư Vấn
                            </button>
                        </div>

                        {/* Package 2: Tiêu chuẩn (Highlight) */}
                        <div className="bg-primary p-8 border-2 border-accent relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(52,211,153,0.1)] flex flex-col">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] font-black uppercase py-1 px-4 rounded-b-lg">
                                Phổ Biến Nhất
                            </div>

                            <h4 className="text-xl font-heading font-bold text-textmain mb-2 mt-2">GÓI TIÊU CHUẨN</h4>
                            <p className="text-sm text-textmuted mb-6">Kiến Trúc + Kết Cấu + Điện Nước</p>

                            <div className="mb-6 pb-6 border-b border-bordercolor">
                                <span className="text-4xl font-black font-heading text-accent">100k</span>
                                <span className="text-textmuted text-sm border-l border-bordercolor ml-2 pl-2">/ m²</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1 text-sm text-textmuted font-light">
                                <li className="flex items-start gap-3 font-bold text-white">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Bao gồm toàn bộ GÓI CƠ BẢN</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Bản vẽ tính toán kết cấu (Móng, cột, dầm, sàn...)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Bản vẽ hệ thống M.E.P (Điện, nước, internet, ĐHKK)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Giám sát tác giả (3-5 lần tại công trình)</span>
                                </li>
                            </ul>

                            <button className="w-full py-4 bg-accent text-primary font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300">
                                Đăng Ký Gói Này
                            </button>
                        </div>

                        {/* Package 3: Cao cấp */}
                        <div className="bg-secondary p-8 border border-bordercolor flex flex-col hover:border-accent/50 transition-colors duration-300">
                            <h4 className="text-xl font-heading font-bold text-textmain mb-2">GÓI CAO CẤP</h4>
                            <p className="text-sm text-textmuted mb-6">Kiến Trúc + Nội Thất + Dự Toán</p>

                            <div className="mb-6 pb-6 border-b border-bordercolor">
                                <span className="text-4xl font-black font-heading text-textmain">250k</span>
                                <span className="text-textmuted text-sm border-l border-bordercolor ml-2 pl-2">/ m²</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1 text-sm text-textmuted font-light">
                                <li className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-accent shrink-0 fill-accent" />
                                    <span>Bao gồm toàn bộ GÓI TIÊU CHUẨN</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Phối cảnh 3D thiết kế Nội thất toàn bộ công trình</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Bản vẽ bổ kỹ thuật đồ gỗ nội thất (tủ, bếp, giường...)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent shrink-0" />
                                    <span>Lập bảng dự toán thi công (Bóc tách khối lượng chi tiết)</span>
                                </li>
                            </ul>

                            <button className="w-full py-4 bg-primary border-2 border-bordercolor hover:border-accent text-textmain font-bold uppercase tracking-wider text-sm transition-colors duration-300">
                                Nhận Tư Vấn VIP
                            </button>
                        </div>

                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
