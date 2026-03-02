import { Link } from 'react-router-dom';
import {
    ArrowLeft, ArrowRight, Handshake, Building2, Truck, Palette,
    ShieldCheck, Clock, Award, Users, CheckCircle, Target,
    Gem, Zap, Phone, Mail
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

const PARTNER_TYPES = [
    {
        icon: Truck,
        title: 'Nhà Cung Cấp Vật Liệu',
        description: 'Đối tác cung cấp vật liệu xây dựng chất lượng: xi măng, thép, gạch, sơn, thiết bị vệ sinh, gỗ công nghiệp và các vật tư đặc thù.',
        needs: ['Chứng nhận xuất xứ, chất lượng', 'Giá cạnh tranh, chiết khấu tốt', 'Giao hàng đúng tiến độ', 'Hỗ trợ bảo hành sản phẩm'],
    },
    {
        icon: Building2,
        title: 'Nhà Thầu Phụ Chuyên Môn',
        description: 'Đội ngũ thi công chuyên biệt trong các lĩnh vực: điện, nước, điều hòa, PCCC, sơn bả, ốp lát, chống thấm, làm trần thạch cao.',
        needs: ['Kinh nghiệm tối thiểu 3 năm', 'Đội ngũ thợ lành nghề', 'Tuân thủ an toàn lao động', 'Cam kết tiến độ bàn giao'],
    },
    {
        icon: Palette,
        title: 'Kiến Trúc Sư & Thiết Kế',
        description: 'Cộng tác viên thiết kế kiến trúc, nội thất, cảnh quan. Cơ hội hợp tác lâu dài với các dự án nhà ở, thương mại đa dạng.',
        needs: ['Portfolio ấn tượng', 'Thành thạo AutoCAD, Revit, 3DsMax', 'Tư duy sáng tạo và thực tế', 'Khả năng phối hợp đa nhóm'],
    },
    {
        icon: Target,
        title: 'Đối Tác Bất Động Sản',
        description: 'Sàn giao dịch BĐS, môi giới, chủ đầu tư muốn hợp tác giới thiệu khách hàng có nhu cầu xây dựng, thiết kế hoặc cải tạo.',
        needs: ['Mạng lưới khách hàng mục tiêu', 'Hiểu biết thị trường BĐS Hà Nội', 'Cơ chế hoa hồng minh bạch', 'Hợp đồng hợp tác rõ ràng'],
    },
];

const BENEFITS = [
    { icon: ShieldCheck, title: 'Uy tín 10+ năm', desc: 'Thương hiệu đã xây dựng qua hàng trăm công trình' },
    { icon: Award, title: 'Thanh toán đúng hạn', desc: 'Cam kết luôn thanh toán đầy đủ, đúng hạn theo hợp đồng' },
    { icon: Users, title: 'Hợp tác lâu dài', desc: 'Ưu tiên đối tác đồng hành xuyên suốt, không "một lần rồi thôi"' },
    { icon: Zap, title: 'Quy trình chuyên nghiệp', desc: 'Mọi hợp tác đều có quy trình, hợp đồng và KPI rõ ràng' },
    { icon: Gem, title: 'Phát triển đôi bên', desc: 'Cùng phát triển qua từng dự án, hỗ trợ mở rộng thị trường' },
    { icon: Clock, title: 'Đối soát minh bạch', desc: 'Báo cáo, nghiệm thu, đối soát công khai và minh bạch' },
];

const PROCESS_STEPS = [
    { step: '01', title: 'Gửi thông tin', desc: 'Điền form hoặc liên hệ trực tiếp để giới thiệu đơn vị của bạn.' },
    { step: '02', title: 'Đánh giá & Gặp gỡ', desc: 'Bách Ngân xem xét hồ sơ, sắp xếp gặp gỡ trao đổi trực tiếp.' },
    { step: '03', title: 'Thử nghiệm', desc: 'Hợp tác thử với 1-2 dự án nhỏ để đánh giá chất lượng hai bên.' },
    { step: '04', title: 'Ký hợp đồng', desc: 'Ký hợp đồng khung hợp tác dài hạn, thống nhất cơ chế và quyền lợi.' },
];

export default function PartnersPage() {
    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary to-primary border-b border-bordercolor relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent opacity-5 blur-[100px] rounded-[100%] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Về trang chủ
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold mb-6 uppercase tracking-wider">
                                <Handshake className="w-3.5 h-3.5" /> Cùng nhau phát triển
                            </div>
                            <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">
                                Hợp Tác Với <span className="text-accent italic">Bách Ngân</span>
                            </h1>
                            <p className="text-textmuted text-base md:text-lg font-light max-w-2xl">
                                Chúng tôi luôn tìm kiếm những đối tác uy tín, chuyên nghiệp để cùng kiến tạo giá trị bền vững
                                trong ngành xây dựng và thiết kế tại Hà Nội.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 bg-secondary border border-bordercolor text-textmuted text-sm shrink-0">
                            <Handshake className="w-5 h-5 text-accent" />
                            <span><strong className="text-textmain">4</strong> hình thức hợp tác</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why partner section */}
            <section className="py-16 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Lý Do Hợp Tác</p>
                        <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Vì Sao Nên Đồng Hành Cùng Bách Ngân?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bordercolor border border-bordercolor">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="bg-primary p-8 hover:bg-secondary transition-colors duration-300 group">
                                <div className="w-12 h-12 bg-secondary text-accent flex items-center justify-center mb-5 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
                                    <b.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-lg font-bold mb-2">{b.title}</h3>
                                <p className="text-textmuted text-sm font-light">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Types */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Hình Thức Hợp Tác</p>
                        <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Bách Ngân Đang Tìm Kiếm</h2>
                        <p className="text-textmuted text-sm font-light max-w-2xl mx-auto">
                            Dù bạn là nhà cung cấp, nhà thầu phụ, kiến trúc sư hay đối tác BĐS — chúng tôi đều có cơ chế hợp tác phù hợp.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {PARTNER_TYPES.map((pt, i) => (
                            <div key={i} className="bg-secondary border border-bordercolor p-8 hover:border-accent/40 transition-colors duration-300 group">
                                <div className="flex items-start gap-5 mb-6">
                                    <div className="w-14 h-14 shrink-0 bg-primary text-accent flex items-center justify-center border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors">
                                        <pt.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">{pt.title}</h3>
                                        <p className="text-textmuted text-sm font-light leading-relaxed">{pt.description}</p>
                                    </div>
                                </div>
                                <div className="pl-[76px]">
                                    <p className="text-xs text-textmuted uppercase tracking-widest font-bold mb-3">Yêu cầu</p>
                                    <ul className="space-y-2">
                                        {pt.needs.map((need, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-textmuted font-light">
                                                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                                {need}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-6 bg-secondary border-t border-bordercolor">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Quy Trình</p>
                        <h2 className="font-heading text-3xl md:text-4xl font-black">Bắt Đầu Hợp Tác Như Thế Nào?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {PROCESS_STEPS.map((s, i) => (
                            <div key={i} className="relative">
                                <div className="bg-primary border border-bordercolor p-8 text-center hover:border-accent/40 transition-colors h-full">
                                    <span className="font-heading text-5xl font-black text-accent/20 mb-4 block">{s.step}</span>
                                    <h3 className="font-heading text-lg font-bold mb-3">{s.title}</h3>
                                    <p className="text-textmuted text-sm font-light">{s.desc}</p>
                                </div>
                                {i < PROCESS_STEPS.length - 1 && (
                                    <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-accent/40 z-10" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA — Contact for partnership */}
            <section className="py-20 px-6 border-t border-bordercolor">
                <div className="max-w-4xl mx-auto text-center">
                    <Handshake className="w-16 h-16 text-accent/30 mx-auto mb-6" />
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-6">Sẵn Sàng Hợp Tác?</h2>
                    <p className="text-textmuted text-base font-light mb-8 max-w-2xl mx-auto">
                        Liên hệ ngay với Bách Ngân để trao đổi cơ hội hợp tác. Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:0858651818"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
                        >
                            <Phone className="w-4 h-4" /> Gọi ngay: 085.865.1818
                        </a>
                        <a
                            href="mailto:bachngan.design@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-bordercolor text-textmain font-bold text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                        >
                            <Mail className="w-4 h-4" /> bachngan.design@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
