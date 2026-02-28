import React, { useEffect } from 'react';
import { ShieldCheck, HardHat, FileSignature, Wallet, Clock, Scale } from 'lucide-react';
import Navbar from '../components/Navbar';
import ServiceNav from '../components/ServiceNav';
import Footer from '../sections/Footer';
import FinalCTA from '../sections/FinalCTA';

export default function ConstructionPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />
            <ServiceNav />

            {/* Hero Section - Đánh thẳng vào Pain Point & Lời Hứa */}
            <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-[#334155] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent opacity-10 blur-[120px] rounded-[100%] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-bold mb-8 uppercase tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                        <ShieldCheck className="w-4 h-4" /> Tuyệt Phẩm Chìa Khóa Trao Tay
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-md">
                        Xây Nhà Là Hưởng Thụ, <br />
                        <span className="text-accent italic">Không Phải Áp Lực.</span>
                    </h1>
                    <p className="text-textmuted text-lg md:text-xl font-light mb-12 leading-relaxed">
                        Bạn lo sợ chi phí phát sinh? Vật tư bị đánh tráo? Hay tiến độ rùa bò? <br />
                        Tại Bách Ngân, chúng tôi ký kết một <span className="text-white font-bold border-b border-accent">Hợp Đồng Chịu Trách Nhiệm Tuyệt Đối</span> để bạn chỉ việc nhận nhà và mỉm cười.
                    </p>
                    <button className="px-8 py-4 bg-accent text-primary font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                        Xem Báo Giá Ngay
                    </button>
                </div>
            </section>

            <main className="flex-1">
                {/* Article Content / Philosophy */}
                <section className="py-24 px-6 bg-primary border-b border-bordercolor">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-textmain mb-6">
                                Tại sao 80% gia chủ hối hận vì tự gọi thợ lẻ thi công?
                            </h2>
                            <p className="text-textmuted text-lg font-light leading-relaxed mb-6">
                                Xây nhà là việc trọng đại của cả một đời người, đòi hỏi một số tiền cực kỳ lớn. Theo tâm lý truyền thống, nhiều người cho rằng <strong className="text-white">"tự đi mua vật liệu, tự gọi từng tốp thợ"</strong> sẽ tiết kiệm được nhiều tiền hơn. Nhưng thực tế cay đắng tại công trường đã chứng minh điều ngược lại.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">01</span>
                                    Cái bẫy "Giá Rẻ" mệt mỏi
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Thợ làm theo cảm tính, không đọc được bản vẽ kỹ thuật. Bạn vừa đi làm vừa phải trực điện thoại xử lý sự cố. Mua thừa vật tư thì lãng phí, mua thiếu thì công trình đình trệ. Cuối cùng, chi phí sắm sửa lặt vặt cộng dồn lại <strong className="text-red-400">thậm chí còn cao hơn 15 - 20%</strong> so với giao trọn gói.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">02</span>
                                    Không ai chịu trách nhiệm
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Thợ nề đổ lỗi cho thợ điện nước làm sai cao độ. Thợ mộc chê thợ nề trát tường không phẳng. Khi tường nứt, trần thấm, không một tổ đội nào đứng ra bảo hành. Khách hàng chính là người duy nhất phải gánh chịu những sai sót đó cả về tiền bạc lẫn sự bực dọc.
                                </p>
                            </div>
                        </div>

                        <div className="bg-secondary p-8 border-l-4 border-accent relative">
                            <h3 className="text-2xl font-heading font-black text-white mb-4">
                                Dịch vụ Thi Công Trọn Gói của Bách Ngân: Lời giải hoàn hảo
                            </h3>
                            <p className="text-textmuted text-base font-light leading-relaxed mb-4">
                                Khác với cách làm "chắp vá", Bách Ngân vận hành theo triết lý <strong className="text-white italic">"Design & Build - Thiết kế và Thi công đồng bộ"</strong>. Từ viên gạch đầu tiên đến lúc trao tay chìa khóa, chỉ có duy nhất <strong className="text-accent underline">một đầu mối trách nhiệm</strong> là chúng tôi.
                            </p>
                            <p className="text-textmuted text-base font-light leading-relaxed">
                                Đội ngũ Kỹ sư, Kiến trúc sư của chúng tôi sẽ giám sát chéo lẫn nhau. Mọi xung đột kỹ thuật được giải quyết ngay trên bản vẽ trước khi ra công trường. Bạn không cần xin nghỉ phép để coi thợ, không lo tính toán từng bao xi măng. Thay vào đó, hãy dùng thời gian đó để kiếm tiền và tận hưởng cuộc sống, còn ngôi nhà của bạn cứ để Bách Ngân lo!
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6 Điểm Khác Biệt Độc Lạ (USP) */}
                <section className="py-24 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Lời Giải Cho Mọi Áp Lực</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Sự Khác Biệt Của Đặc Quyền "Trọn Gói"</h3>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Khóa rủi ro phát sinh */}
                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Wallet className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">#1. Khóa Chặt Chi Phí Phát Sinh</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Bóc tách dự toán bằng phần mềm BIM chính xác đến 99%. Cam kết <strong className="text-white">chịu phạt 100%</strong> giá trị nếu có bất kỳ khoản phí nào phát sinh ngoài hợp đồng đã ký.
                                </p>
                            </div>

                            {/* Showroom vật liệu tại công trình */}
                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Scale className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">#2. "ShowroomThu Nhỏ" Tại Site</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Không nói suông. Chúng tôi đóng tủ trưng bày Mẫu Vật Tư (sắt, xi măng, cáp điện...) ngay tại công trình, đính kèm chữ ký xác nhận của gia chủ để đối chiếu hàng ngày.
                                </p>
                            </div>

                            {/* Camera Giám Sát 24/7 */}
                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <FileSignature className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">#3. Công Trường Sống Động 24/7</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Cài đặt hệ thống Camera Livestream trực tuyến và Nhật ký thi công E-Logbook. Bạn có thể nằm nhà uống trà và xem thợ xây nhà mình trên Smartphone.
                                </p>
                            </div>

                            {/* Kỹ sư Giám sát độc lập */}
                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <HardHat className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">#4. Kỹ Sư Hiện Trường Trực Chiến</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Có ít nhất 01 Kỹ sư Chỉ huy trưởng túc trực tại công trình liên tục từ lúc khởi công đến ngày bàn giao. Giải quyết ngay mọi vướng mắc kỹ thuật.
                                </p>
                            </div>

                            {/* Bảo lãnh tiến độ */}
                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Clock className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">#5. Bảo Hành Thời Gian Bằng Tiền</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Bảng timeline công việc chi tiết từng tuần. Cam kết phạt trễ hẹn <strong className="text-red-400">2.000.000đ/ngày</strong>. Tốc độ đi đôi với an toàn và chất lượng.
                                </p>
                            </div>

                            {/* Bảo hành kết cấu 10 năm */}
                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group relative overflow-hidden">
                                <div className="absolute top-4 right-[-35px] bg-accent text-primary text-[10px] font-black uppercase py-1 px-10 rotate-45 transform origin-center shadow-md">
                                    VIP
                                </div>
                                <ShieldCheck className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">#6. Kế Hoạch Chăm Sóc Ngôi Nhà</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Bảo hành kết cấu 10 năm. Đặc biệt: Gói <span className="text-accent italic">"Thăm Khám Định Kỳ"</span> 6 tháng/lần trong vòng 2 năm đầu tiên để chống thấm, test điện nước hoàn toàn miễn phí.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bảng Giá Các Gói Thi Công */}
                <section className="py-24 px-6 bg-[#0B0F19] border-t border-b border-bordercolor">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Đầu Tư Xứng Đáng</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Các Gói Thi Công Trọn Gói</h3>
                            <p className="text-textmuted mt-4 font-light max-w-2xl mx-auto">
                                Báo giá khái toán dựa trên m² sàn. Đơn giá sẽ được điều chỉnh sát nhất qua bảng Dự toán bóc tách sau khi chốt phối cảnh 3D.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Gói Tối Ưu */}
                            <div className="bg-primary p-8 border border-bordercolor flex flex-col hover:border-accent/50 transition-colors duration-300 rounded-lg">
                                <h4 className="text-xl font-heading font-bold text-textmain mb-2">GÓI TỐI ƯU</h4>
                                <p className="text-sm text-textmuted mb-6">Combo Vật tư cơ bản chuẩn Quốc Gia</p>

                                <div className="mb-6 pb-6 border-b border-bordercolor">
                                    <span className="text-4xl font-black font-heading text-textmain">4.5 - 5.0</span>
                                    <span className="text-textmuted text-sm border-l border-bordercolor ml-2 pl-2">Tr / m²</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1 text-sm text-textmuted font-light">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Thép:</strong> Pomina/Việt Nhật</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Xi măng:</strong> Insee/Hà Tiên 1</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Gạch/Đá:</strong> Granite 60x60 (Taicera/Đồng Tâm)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Cửa:</strong> Nhôm kính Xingfa Quảng Đông</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Sơn:</strong> Maxilite/Jotaplast</span>
                                    </li>
                                </ul>
                                <button className="w-full py-3 bg-secondary border border-bordercolor hover:border-accent text-white uppercase text-sm font-bold transition-colors">Tư Vấn Gói Này</button>
                            </div>

                            {/* Gói Cao Cấp */}
                            <div className="bg-[#1e293b] p-8 border-2 border-accent flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(52,211,153,0.15)] rounded-lg relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] font-black uppercase py-1 px-6 rounded-b-lg">
                                    Được Chọn Nhiều Nhất
                                </div>
                                <h4 className="text-xl font-heading font-bold text-white mb-2 mt-2">GÓI CAO CẤP</h4>
                                <p className="text-sm text-accent mb-6">Nâng tầm không gian sống</p>

                                <div className="mb-6 pb-6 border-b border-bordercolor/50">
                                    <span className="text-4xl font-black font-heading text-accent">5.5 - 6.2</span>
                                    <span className="text-textmuted text-sm border-l border-bordercolor/50 ml-2 pl-2">Tr / m²</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1 text-sm text-[#cbd5e1] font-light">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                        <span><strong>Tất cả vật tư thô:</strong> Đều là hàng Hãng Top 1.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Gạch/Đá:</strong> Bóng kính cao cấp 80x80 / Sàn gỗ công nghiệp An Cường.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Thiết bị vệ sinh:</strong> TOTO / INAX Cao cấp.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Sơn:</strong> DULUX Lau chùi hiệu quả / JOTUN Majestic.</span>
                                    </li>
                                </ul>
                                <button className="w-full py-4 bg-accent hover:bg-white text-primary uppercase text-sm font-bold transition-colors">Xem Form Vật Tư Chi Tiết</button>
                            </div>

                            {/* Gói Luxury */}
                            <div className="bg-primary p-8 border border-bordercolor flex flex-col hover:border-accent/50 transition-colors duration-300 rounded-lg">
                                <h4 className="text-xl font-heading font-bold text-textmain mb-2">GÓI LUXURY</h4>
                                <p className="text-sm text-textmuted mb-6">Thương hiệu quốc tế & Giải pháp thông minh</p>

                                <div className="mb-6 pb-6 border-b border-bordercolor">
                                    <span className="text-4xl font-black font-heading text-textmain">7.0+</span>
                                    <span className="text-textmuted text-sm border-l border-bordercolor ml-2 pl-2">Tr / m²</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1 text-sm text-textmuted font-light">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Gói Giải Pháp Độc Quyền:</strong> Smarthome, Cửa từ vân tay cao cấp.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Thiết bị:</strong> GROHE, HAFELE nhập khẩu.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Đá ốp:</strong> Marble / Granite tự nhiên cao cấp.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span><strong>Sơn:</strong> DULUX WeatherShield / Sơn hiệu ứng.</span>
                                    </li>
                                </ul>
                                <button className="w-full py-3 bg-secondary border border-bordercolor hover:border-accent text-white uppercase text-sm font-bold transition-colors">Tư Vấn Giải Pháp VIP</button>
                            </div>
                        </div>
                    </div>
                </section>

                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
