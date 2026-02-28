import React, { useEffect } from 'react';
import { Ruler, Palette, Factory, ShieldCheck, Truck, Hammer } from 'lucide-react';
import Navbar from '../components/Navbar';
import ServiceNav from '../components/ServiceNav';
import Footer from '../sections/Footer';
import FinalCTA from '../sections/FinalCTA';

export default function InteriorPage() {
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
                        <Palette className="w-4 h-4" /> Nội Thất May Đo Theo Yêu Cầu
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-md">
                        Nội Thất <span className="text-accent italic">Đo Ni Đóng Giày,</span><br />
                        Vừa Vặn Từng Centimet.
                    </h1>
                    <p className="text-textmuted text-lg md:text-xl font-light mb-12 leading-relaxed">
                        Sản xuất trực tiếp tại xưởng — cắt bỏ trung gian. Thiết kế 3D trước khi thi công,
                        vật liệu rõ nguồn gốc, <span className="text-white font-bold border-b border-accent">lắp đặt tận nơi — bảo hành rõ ràng theo từng hạng mục.</span>
                    </p>
                    <button className="px-8 py-4 bg-accent text-primary font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                        Nhận Tư Vấn Miễn Phí
                    </button>
                </div>
            </section>

            <main className="flex-1">
                {/* Pain Point */}
                <section className="py-24 px-6 bg-primary border-b border-bordercolor">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-textmain mb-6">
                                Tại sao đồ nội thất "mua sẵn" luôn khiến bạn thất vọng?
                            </h2>
                            <p className="text-textmuted text-lg font-light leading-relaxed mb-6">
                                Không gian mỗi ngôi nhà là <strong className="text-white">duy nhất</strong> — khác nhau từ diện tích, cao độ trần, vị trí cột, đến thói quen sinh hoạt của gia chủ. Vậy mà nhiều người vẫn cố "nhồi" những bộ nội thất kích thước đại trà vào không gian riêng của mình.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">01</span>
                                    Kích thước "gần đúng" = Lãng phí
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Tủ bếp mua sẵn rộng 2m4 mà bếp nhà bạn chỉ 2m2 — thừa 20cm vừa xấu vừa vướng. Hoặc hẹp hơn 10cm thì để hở khe chứa bụi. Kết quả: mất tiền mua rồi lại mất tiền sửa, hoặc chấp nhận "sống chung với lũ".
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">02</span>
                                    Chất liệu "ảo" trên mạng
                                </h3>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Ảnh trên sàn thương mại điện tử rất đẹp. Nhưng khi hàng về: ván ép mỏng manh, bản lề cọt kẹt sau 3 tháng, lớp phủ bong tróc khi tiếp xúc nước. Đổi trả thì mất phí ship, bảo hành thì "hết hàng mẫu cũ".
                                </p>
                            </div>
                        </div>

                        <div className="bg-secondary p-8 border-l-4 border-accent relative">
                            <h3 className="text-2xl font-heading font-black text-white mb-4">
                                Nội thất May Đo tại Bách Ngân: Vừa khít — Đúng chất — Có bảo hành
                            </h3>
                            <p className="text-textmuted text-base font-light leading-relaxed mb-4">
                                Chúng tôi sản xuất trực tiếp tại xưởng riêng. Từ khâu đo đạc thực tế, thiết kế phối cảnh 3D chi tiết, chọn vật liệu có mẫu thật, đến sản xuất và lắp đặt — <strong className="text-accent">tất cả do một đội ngũ đảm nhận</strong>, không qua trung gian hay đại lý.
                            </p>
                            <p className="text-textmuted text-base font-light leading-relaxed">
                                Bạn được xem bản vẽ 3D, sờ mẫu gỗ thật, duyệt màu sắc cụ thể <strong className="text-white">trước khi</strong> bắt đầu sản xuất. Không có chuyện "nhận hàng mới biết xấu đẹp".
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quy trình May Đo */}
                <section className="py-24 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Quy Trình 5 Bước</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Từ Ý Tưởng Đến Lắp Đặt Hoàn Thiện</h3>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {[
                                { step: '01', title: 'Khảo Sát & Đo Đạc', desc: 'Đội ngũ kỹ thuật đến tận nhà đo kích thước chính xác đến mm, ghi nhận hiện trạng điện nước, ánh sáng.' },
                                { step: '02', title: 'Thiết Kế 3D', desc: 'Xuất bản vẽ phối cảnh 3D chi tiết. Gia chủ duyệt kiểu dáng, màu sắc, chất liệu trước khi sản xuất.' },
                                { step: '03', title: 'Chọn Vật Liệu Thật', desc: 'Gửi mẫu gỗ, mẫu phụ kiện thật để gia chủ so sánh và chốt. Không "mô tả bằng miệng".' },
                                { step: '04', title: 'Sản Xuất Tại Xưởng', desc: 'Gia công bằng máy CNC chính xác. Kiểm tra chất lượng từng module trước khi xuất xưởng.' },
                                { step: '05', title: 'Vận Chuyển & Lắp Đặt', desc: 'Lắp đặt tận nơi, vệ sinh sạch sẽ. Bàn giao kèm phiếu bảo hành rõ ràng theo từng hạng mục.' },
                            ].map((item) => (
                                <div key={item.step} className="bg-secondary p-6 border border-bordercolor hover:border-accent transition-colors duration-300 group text-center">
                                    <div className="w-12 h-12 mx-auto bg-primary text-accent flex items-center justify-center mb-4 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors font-heading font-black text-lg">
                                        {item.step}
                                    </div>
                                    <h4 className="text-base font-heading font-bold text-white mb-3">{item.title}</h4>
                                    <p className="text-textmuted text-xs font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sản phẩm chủ lực */}
                <section className="py-24 px-6 bg-[#0B0F19] border-t border-b border-bordercolor">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Sản Phẩm Chủ Lực</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Những Gì Chúng Tôi Sản Xuất</h3>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: 'Tủ Bếp', desc: 'Tủ bếp chữ I, chữ L, chữ U hoặc đảo bếp. Thiết kế tối ưu động tác nấu nướng, tích hợp phụ kiện thông minh.', material: 'MDF An Cường / Gỗ tự nhiên' },
                                { title: 'Tủ Áo & Tủ Âm Tường', desc: 'Tận dụng tối đa không gian lưu trữ. Tùy chỉnh ngăn treo, ngăn kéo, ngăn gấp theo thói quen sử dụng.', material: 'MDF phủ Melamine / Laminate' },
                                { title: 'Giường Ngủ & Bàn Trang Điểm', desc: 'Giường có hộc kéo chứa đồ, đầu giường bọc nỉ/da. Bàn trang điểm tích hợp gương và đèn LED.', material: 'Gỗ công nghiệp / Gỗ tự nhiên' },
                                { title: 'Kệ Tivi & Kệ Trang Trí', desc: 'Kệ treo tường hoặc đặt sàn. Thiết kế phù hợp với phong cách nội thất tổng thể của ngôi nhà.', material: 'MDF sơn PU / Vân gỗ Laminate' },
                                { title: 'Bàn Làm Việc & Kệ Sách', desc: 'Thiết kế ergonomic, tối ưu cho không gian làm việc tại nhà. Tích hợp ổ cắm, đi dây gọn gàng.', material: 'MDF / Plywood phủ Melamine' },
                                { title: 'Cầu Thang Gỗ & Ốp Tường', desc: 'Cầu thang gỗ tự nhiên hoặc gỗ công nghiệp. Ốp tường trang trí tạo điểm nhấn cho phòng khách, phòng ngủ.', material: 'Gỗ Óc Chó / Sồi / Tần Bì' },
                            ].map((item, index) => (
                                <div key={index} className="bg-primary p-8 border border-bordercolor hover:border-accent/50 transition-colors duration-300 group">
                                    <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors">{item.title}</h4>
                                    <p className="text-textmuted text-sm font-light leading-relaxed mb-4">{item.desc}</p>
                                    <div className="pt-4 border-t border-bordercolor">
                                        <span className="text-xs text-accent font-bold uppercase tracking-wider">Vật liệu: </span>
                                        <span className="text-xs text-textmuted">{item.material}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cam kết & Bảo hành thực tế */}
                <section className="py-24 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Cam Kết Rõ Ràng</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-textmain">Bảo Hành Theo Từng Hạng Mục — Không Hứa Suông</h3>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Ruler className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Đo Đạc Miễn Phí</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Khảo sát và đo đạc thực tế tận nhà hoàn toàn miễn phí. Không phát sinh chi phí cho đến khi bạn chốt thiết kế.
                                </p>
                            </div>

                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Factory className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Xưởng Sản Xuất Riêng</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Gia công tại xưởng của Bách Ngân — không qua trung gian, không đội giá. Máy CNC cắt chính xác, kiểm tra từng module.
                                </p>
                            </div>

                            <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-colors duration-300 group">
                                <Truck className="w-12 h-12 text-accent mb-6 bg-primary p-3 rounded-lg border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-heading font-bold text-white mb-3">Vận Chuyển & Lắp Đặt</h4>
                                <p className="text-textmuted text-sm font-light leading-relaxed">
                                    Vận chuyển miễn phí nội thành. Đội thợ lắp đặt chuyên nghiệp, dọn dẹp sạch sẽ sau khi hoàn tất.
                                </p>
                            </div>
                        </div>

                        {/* Bảng bảo hành chi tiết */}
                        <div className="bg-secondary border border-bordercolor p-8 md:p-12 max-w-4xl mx-auto">
                            <div className="flex items-center gap-3 mb-8">
                                <ShieldCheck className="w-8 h-8 text-accent" />
                                <h4 className="text-2xl font-heading font-bold text-white">Chính Sách Bảo Hành Chi Tiết</h4>
                            </div>
                            <div className="space-y-0 divide-y divide-bordercolor">
                                {[
                                    { item: 'Kết cấu khung gỗ tự nhiên (Sồi, Óc Chó, Tần Bì)', warranty: '3 – 5 năm' },
                                    { item: 'Gỗ công nghiệp MDF/HDF phủ Melamine', warranty: '2 – 3 năm' },
                                    { item: 'Phụ kiện bản lề, ray trượt (Hafele, Blum, Grass)', warranty: 'Theo chính sách hãng (3 – 5 năm)' },
                                    { item: 'Bề mặt sơn PU / Laminate', warranty: '1 – 2 năm (tùy điều kiện sử dụng)' },
                                    { item: 'Mặt đá bếp (Granite, thạch anh nhân tạo)', warranty: '2 – 3 năm' },
                                ].map((row, index) => (
                                    <div key={index} className="flex flex-col md:flex-row md:justify-between py-4 gap-2">
                                        <span className="text-textmuted text-sm font-light">{row.item}</span>
                                        <span className="text-accent text-sm font-bold whitespace-nowrap">{row.warranty}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-bordercolor">
                                <p className="text-textmuted text-sm font-light leading-relaxed italic">
                                    <strong className="text-white not-italic">Lưu ý:</strong> Sau thời gian bảo hành, Bách Ngân vẫn hỗ trợ bảo trì, sửa chữa với chi phí ưu đãi dành riêng cho khách hàng cũ. Liên hệ hotline để được tư vấn.
                                </p>
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
