import React, { useEffect } from 'react';
import { Wrench, AlertTriangle, Clock, Banknote, HardHat, ClipboardCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import ServiceNav from '../components/ServiceNav';
import Footer from '../sections/Footer';
import FinalCTA from '../sections/FinalCTA';

export default function RenovationPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />
            <ServiceNav />

            {/* Hero Section */}
            <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-[#334155] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent opacity-10 blur-[120px] rounded-[100%] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-bold mb-8 uppercase tracking-wider shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                        <Wrench className="w-4 h-4" /> Cải Tạo & Sửa Chữa Nhà Ở
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-md">
                        Làm Mới Ngôi Nhà,<br />
                        <span className="text-accent italic">Không Cần Xây Lại Từ Đầu.</span>
                    </h1>
                    <p className="text-textmuted text-lg md:text-xl font-light mb-12 leading-relaxed">
                        Nhà cũ xuống cấp, nứt tường, thấm dột, hay đơn giản là muốn thay đổi công năng?
                        Bách Ngân giúp bạn <span className="text-white font-bold border-b border-accent">cải tạo nhanh gọn, đúng tiến độ, không ảnh hưởng sinh hoạt.</span>
                    </p>
                    <button className="px-8 py-4 bg-accent text-primary font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                        Gửi Yêu Cầu Khảo Sát
                    </button>
                </div>
            </section>

            <main className="flex-1">
                {/* Khi nào cần cải tạo */}
                <section className="py-24 px-6 bg-primary border-b border-bordercolor">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-textmain mb-6">
                                Khi nào ngôi nhà của bạn cần được "chăm sóc"?
                            </h2>
                            <p className="text-textmuted text-lg font-light leading-relaxed mb-6">
                                Nhà ở sau <strong className="text-white">5 – 10 năm sử dụng</strong> sẽ bắt đầu xuất hiện các dấu hiệu lão hóa. Nếu không xử lý kịp thời, các vấn đề nhỏ sẽ lan rộng và tốn kém gấp nhiều lần.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">01</span>
                                    Hư hỏng kết cấu
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Tường nứt, trần thấm dột, nền lún, cốt thép bị ăn mòn. Đây là những vấn đề nghiêm trọng nếu không khắc phục sớm sẽ ảnh hưởng đến an toàn cả ngôi nhà.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">02</span>
                                    Thay đổi công năng
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Gia đình thêm thành viên, cần thêm phòng ngủ. Con cái trưởng thành, muốn chia lại không gian. Hoặc đơn giản là muốn nâng cấp phòng bếp, phòng tắm cho hiện đại hơn.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">03</span>
                                    Lão hóa hệ thống
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Đường điện cũ quá tải, ống nước bị rỉ sét rò rỉ âm thầm, hệ thống thoát nước kém. Những vấn đề "không thấy bằng mắt" nhưng tiềm ẩn nguy hiểm rất lớn.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">04</span>
                                    Nâng cấp thẩm mỹ
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Sơn tường bong tróc, gạch ốp lỗi thời, cửa sổ hở gió. Một lần cải tạo thẩm mỹ có thể làm ngôi nhà "trẻ lại" 10 tuổi mà chi phí chỉ bằng 20-30% xây mới.
                                </p>
                            </div>
                        </div>

                        <div className="bg-secondary p-8 border-l-4 border-accent relative">
                            <h3 className="text-2xl font-heading font-black text-white mb-4">
                                Bách Ngân làm cải tạo khác gì so với thợ lẻ?
                            </h3>
                            <p className="text-textmuted text-base font-light leading-relaxed mb-4">
                                Cải tạo nhà phức tạp hơn xây mới ở chỗ: <strong className="text-white">phải hiểu được kết cấu cũ</strong> trước khi đục phá hay thay đổi bất cứ điều gì. Thợ lẻ thường "đoán" là chính — đập tường xong mới biết bên trong có dầm chịu lực, lúc đó thì đã muộn.
                            </p>
                            <p className="text-textmuted text-base font-light leading-relaxed">
                                Tại Bách Ngân, đội ngũ kỹ sư sẽ <strong className="text-accent">khảo sát kết cấu hiện trạng</strong> trước, xác định rõ đâu là tường chịu lực, đâu là tường ngăn, hệ thống điện nước đi thế nào — rồi mới lên phương án cải tạo. Đảm bảo an toàn kết cấu là ưu tiên số 1.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Dịch vụ cải tạo cụ thể */}
                <section className="py-24 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Dịch Vụ Cải Tạo</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Chúng Tôi Nhận Những Gì?</h3>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: 'Sửa Chữa Kết Cấu', desc: 'Xử lý nứt tường, thấm trần, lún nền, gia cố dầm cột. Khảo sát bằng thiết bị chuyên dụng trước khi thi công.', note: 'Có bảo hành kết cấu' },
                                { title: 'Chống Thấm Toàn Diện', desc: 'Chống thấm sàn vệ sinh, sân thượng, tường ngoài, tầng hầm. Sử dụng vật liệu chuyên dụng (Sika, Kova, Dr.Fixit).', note: 'Bảo hành 3 – 5 năm' },
                                { title: 'Cải Tạo Phòng Bếp', desc: 'Thay đổi layout bếp, nâng cấp hệ thống thoát nước, lắp đặt tủ bếp mới, ốp lát lại gạch.', note: 'Thi công 7 – 15 ngày' },
                                { title: 'Cải Tạo Phòng Tắm', desc: 'Thay mới thiết bị vệ sinh, ốp đá/gạch, chống thấm lại sàn, thay đường ống cũ. Nâng cấp từ cơ bản lên hiện đại.', note: 'Thi công 5 – 10 ngày' },
                                { title: 'Nâng Tầng / Cơi Nới', desc: 'Đổ thêm tầng, mở rộng diện tích sử dụng. Kiểm tra tải trọng móng cũ trước khi thi công để đảm bảo an toàn kết cấu.', note: 'Cần khảo sát kỹ' },
                                { title: 'Sơn Lại & Ốp Mặt Tiền', desc: 'Sơn ngoại thất chống nóng, ốp đá/gạch mặt tiền, thay cửa sổ, lan can. Làm mới diện mạo ngôi nhà.', note: 'Thi công 3 – 7 ngày' },
                            ].map((item, index) => (
                                <div key={index} className="bg-secondary p-8 border border-bordercolor hover:border-accent/50 transition-colors duration-300 group">
                                    <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors">{item.title}</h4>
                                    <p className="text-textmuted text-sm font-light leading-relaxed mb-4">{item.desc}</p>
                                    <div className="pt-4 border-t border-bordercolor">
                                        <span className="text-xs text-accent font-bold uppercase tracking-wider">{item.note}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tại sao chọn Bách Ngân */}
                <section className="py-24 px-6 bg-[#0B0F19] border-t border-b border-bordercolor">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Vì Sao Chọn Bách Ngân</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Cải Tạo Có Trách Nhiệm</h3>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <ClipboardCheck className="w-12 h-12 text-accent mb-6 bg-[#0B0F19] p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Khảo Sát Trước — Báo Giá Sau</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Không báo giá qua điện thoại kiểu "đoán mò". Kỹ sư đến tận nơi khảo sát hiện trạng, chụp ảnh, đo đạc rồi mới lên phương án và báo giá cụ thể từng hạng mục.
                                </p>
                            </div>

                            <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <AlertTriangle className="w-12 h-12 text-accent mb-6 bg-[#0B0F19] p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Tôn Trọng Kết Cấu Cũ</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Xác định rõ tường chịu lực, vị trí dầm cột trước khi đập phá. Tuyệt đối không "đập bừa" gây nguy hiểm cho kết cấu tổng thể ngôi nhà.
                                </p>
                            </div>

                            <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Clock className="w-12 h-12 text-accent mb-6 bg-[#0B0F19] p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Thi Công Nhanh — Gọn — Sạch</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Hiểu rằng gia đình bạn vẫn đang sinh hoạt, chúng tôi cam kết thu dọn cuối ngày, che chắn khu vực thi công, hạn chế tối đa bụi bẩn và tiếng ồn.
                                </p>
                            </div>

                            <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Banknote className="w-12 h-12 text-accent mb-6 bg-[#0B0F19] p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Báo Giá Minh Bạch</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Bóc tách chi phí rõ ràng: nhân công bao nhiêu, vật tư bao nhiêu, hạng mục nào phát sinh thêm. Không "gói chung" để rồi phát sinh không kiểm soát.
                                </p>
                            </div>

                            <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <HardHat className="w-12 h-12 text-accent mb-6 bg-[#0B0F19] p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Đội Thợ Chuyên Trách</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Không thuê thợ ngoài theo từng công trình. Đội ngũ thợ cải tạo của Bách Ngân được đào tạo bài bản, có kinh nghiệm xử lý nhà cũ, biết đọc bản vẽ.
                                </p>
                            </div>

                            <div className="bg-primary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Wrench className="w-12 h-12 text-accent mb-6 bg-[#0B0F19] p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Bảo Hành Theo Hạng Mục</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Chống thấm bảo hành 3-5 năm. Kết cấu gia cố bảo hành 5 năm. Điện nước bảo hành 2 năm. Mỗi hạng mục có phiếu bảo hành riêng, rõ ràng.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quy trình cải tạo */}
                <section className="py-24 px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Quy Trình 4 Bước</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Cải Tạo Bài Bản, Không "Làm Đại"</h3>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="space-y-0 divide-y divide-bordercolor border border-bordercolor">
                            {[
                                { step: 'Bước 1', title: 'Khảo Sát Hiện Trạng', desc: 'Kỹ sư đến tận nơi, kiểm tra kết cấu, chụp ảnh hiện trạng, ghi nhận các vấn đề cần xử lý. Hoàn toàn miễn phí trong phạm vi nội thành.' },
                                { step: 'Bước 2', title: 'Lên Phương Án & Báo Giá', desc: 'Đề xuất 2-3 phương án cải tạo (tiết kiệm / cân đối / cao cấp) kèm bảng dự toán chi tiết. Gia chủ chọn phương án phù hợp ngân sách.' },
                                { step: 'Bước 3', title: 'Thi Công & Giám Sát', desc: 'Thi công theo đúng bản vẽ đã duyệt. Có giám sát kỹ thuật tại công trình. Cập nhật tiến độ hàng ngày cho gia chủ qua Zalo/điện thoại.' },
                                { step: 'Bước 4', title: 'Nghiệm Thu & Bàn Giao', desc: 'Nghiệm thu từng hạng mục cùng gia chủ. Vệ sinh sạch sẽ toàn bộ công trình. Bàn giao kèm phiếu bảo hành chi tiết.' },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-6 p-8 hover:bg-secondary/50 transition-colors">
                                    <div className="shrink-0">
                                        <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider border border-accent/30">
                                            {item.step}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-textmuted text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
