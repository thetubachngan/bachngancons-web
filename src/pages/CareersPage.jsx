import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, ArrowRight, Briefcase, MapPin, Clock, Users, Heart,
    GraduationCap, Shield, Coffee, TrendingUp, Building2,
    CheckCircle, ChevronDown, ChevronUp, Phone, Mail,
    Ruler, HardHat, PenTool, Calculator
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

const CULTURE_VALUES = [
    { icon: Heart, title: 'Tâm huyết', desc: 'Xây nhà bằng tâm, mỗi viên gạch đặt là lương tâm gửi gắm' },
    { icon: Users, title: 'Đoàn kết', desc: 'Đội ngũ là gia đình, hỗ trợ nhau vượt qua mọi thử thách' },
    { icon: TrendingUp, title: 'Phát triển', desc: 'Luôn học hỏi, nâng cao tay nghề và áp dụng công nghệ mới' },
    { icon: Shield, title: 'Trung thực', desc: 'Minh bạch trong báo giá, vật tư và tiến độ với khách hàng' },
];

const BENEFITS = [
    { icon: Coffee, title: 'Thu nhập cạnh tranh', desc: 'Lương thỏa thuận + thưởng dự án + thưởng cuối năm' },
    { icon: GraduationCap, title: 'Đào tạo chuyên sâu', desc: 'Được mentor 1:1, đào tạo kỹ thuật và quản lý dự án' },
    { icon: Clock, title: 'Giờ làm linh hoạt', desc: 'Thứ 2 – Thứ 7, giờ hành chính, có OT khi cần' },
    { icon: Heart, title: 'Bảo hiểm đầy đủ', desc: 'BHXH, BHYT, BHTN theo quy định + khám sức khỏe định kỳ' },
    { icon: TrendingUp, title: 'Lộ trình thăng tiến', desc: 'Rõ ràng, đánh giá 6 tháng/lần, cơ hội trở thành quản lý' },
    { icon: Building2, title: 'Môi trường thực chiến', desc: 'Tiếp cận dự án thực, công trình đa dạng từ nhà phố đến thương mại' },
];

const JOB_OPENINGS = [
    {
        id: 'job-1',
        title: 'Kỹ sư Giám sát Thi công',
        icon: HardHat,
        department: 'Thi công',
        type: 'Toàn thời gian',
        location: 'Hà Nội & Công trình',
        salary: '12 – 18 triệu',
        description: 'Giám sát tiến độ, chất lượng thi công tại các công trình nhà ở dân dụng. Phối hợp với đội thợ và báo cáo ban quản lý dự án.',
        requirements: [
            'Tốt nghiệp ĐH chuyên ngành Xây dựng dân dụng',
            'Kinh nghiệm tối thiểu 2 năm giám sát công trình',
            'Đọc hiểu bản vẽ kỹ thuật, bản vẽ AutoCAD',
            'Nắm vững quy trình thi công nhà phố, biệt thự',
            'Chịu được áp lực công trường',
        ],
    },
    {
        id: 'job-2',
        title: 'Kiến trúc sư Thiết kế',
        icon: PenTool,
        department: 'Thiết kế',
        type: 'Toàn thời gian',
        location: 'Văn phòng Hà Nội',
        salary: '10 – 15 triệu',
        description: 'Thiết kế kiến trúc nhà ở, nội thất. Trao đổi ý tưởng với khách hàng, triển khai bản vẽ thi công chi tiết.',
        requirements: [
            'Tốt nghiệp ĐH Kiến trúc',
            'Thành thạo AutoCAD, SketchUp, 3DsMax/Revit',
            'Kinh nghiệm 1-3 năm thiết kế nhà ở',
            'Tư duy sáng tạo, am hiểu phong thủy cơ bản',
            'Kỹ năng giao tiếp, trình bày ý tưởng',
        ],
    },
    {
        id: 'job-3',
        title: 'Kỹ sư Dự toán',
        icon: Calculator,
        department: 'Dự toán',
        type: 'Toàn thời gian',
        location: 'Văn phòng Hà Nội',
        salary: '10 – 14 triệu',
        description: 'Lập dự toán, bóc tách khối lượng, nghiệm thu thanh quyết toán cho các dự án xây dựng dân dụng.',
        requirements: [
            'Tốt nghiệp ĐH ngành Xây dựng / Kinh tế xây dựng',
            'Thành thạo Excel, phần mềm dự toán (GXD, Eta)',
            'Kinh nghiệm 1-2 năm lập dự toán',
            'Nắm vững định mức, đơn giá Hà Nội',
            'Cẩn thận, tỉ mỉ, có trách nhiệm',
        ],
    },
    {
        id: 'job-4',
        title: 'Đội trưởng Thi công',
        icon: Ruler,
        department: 'Thi công',
        type: 'Toàn thời gian',
        location: 'Hà Nội & Công trình',
        salary: '15 – 22 triệu',
        description: 'Quản lý, điều phối đội thi công tại công trường. Đảm bảo chất lượng, an toàn và tiến độ từng hạng mục.',
        requirements: [
            'Kinh nghiệm tối thiểu 5 năm trong xây dựng dân dụng',
            'Đã từng quản lý đội từ 10 người trở lên',
            'Am hiểu vật liệu, kỹ thuật thi công nhà phố/biệt thự',
            'Kỹ năng lãnh đạo, quản lý nhân sự',
            'Ưu tiên có chứng chỉ an toàn lao động',
        ],
    },
];

function JobCard({ job }) {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = job.icon;

    return (
        <div className="bg-secondary border border-bordercolor hover:border-accent/40 transition-colors duration-300">
            {/* Header — always visible */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 md:p-8 text-left flex items-start gap-5 cursor-pointer"
            >
                <div className="w-14 h-14 shrink-0 bg-primary text-accent flex items-center justify-center border border-bordercolor">
                    <Icon className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-textmuted">
                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3 text-accent" />{job.department}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-accent" />{job.type}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" />{job.location}</span>
                    </div>
                    <div className="mt-2">
                        <span className="text-sm font-bold text-accent">{job.salary}</span>
                    </div>
                </div>
                <div className="shrink-0 text-textmuted mt-1">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </button>

            {/* Expandable details */}
            {isOpen && (
                <div className="px-6 md:px-8 pb-8 border-t border-bordercolor pt-6">
                    <div className="pl-[76px]">
                        <p className="text-textmuted text-sm font-light leading-relaxed mb-6">{job.description}</p>

                        <p className="text-xs text-textmuted uppercase tracking-widest font-bold mb-3">Yêu cầu</p>
                        <ul className="space-y-2 mb-8">
                            {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-textmuted font-light">
                                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                    {req}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={`mailto:bachngan.design@gmail.com?subject=Ứng tuyển: ${job.title}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
                        >
                            Ứng tuyển ngay <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function CareersPage() {
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
                                <Briefcase className="w-3.5 h-3.5" /> Gia nhập đội ngũ
                            </div>
                            <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">
                                Tuyển Dụng <span className="text-accent italic">Bách Ngân</span>
                            </h1>
                            <p className="text-textmuted text-base md:text-lg font-light max-w-2xl">
                                Chúng tôi đang tìm kiếm những con người tâm huyết, yêu nghề xây dựng, mong muốn phát triển sự nghiệp
                                trong một môi trường chuyên nghiệp và minh bạch.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 bg-secondary border border-bordercolor text-textmuted text-sm shrink-0">
                            <Briefcase className="w-5 h-5 text-accent" />
                            <span><strong className="text-textmain">{JOB_OPENINGS.length}</strong> vị trí đang tuyển</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture values */}
            <section className="py-16 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Văn Hóa Công Ty</p>
                        <h2 className="font-heading text-3xl md:text-4xl font-black">
                            Không Chỉ Xây Nhà. <span className="text-accent">Xây Đội Ngũ.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CULTURE_VALUES.map((v, i) => (
                            <div key={i} className="bg-primary border border-bordercolor p-8 text-center hover:border-accent/40 transition-colors">
                                <div className="w-14 h-14 bg-secondary text-accent flex items-center justify-center mx-auto mb-5 border border-bordercolor">
                                    <v.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                                <p className="text-textmuted text-sm font-light">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-6 border-b border-bordercolor">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Quyền Lợi</p>
                        <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Bách Ngân Mang Đến Gì Cho Bạn?</h2>
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

            {/* Job openings */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Vị Trí Tuyển Dụng</p>
                        <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Cơ Hội Đang Chờ Bạn</h2>
                        <p className="text-textmuted text-sm font-light">Nhấn vào từng vị trí để xem chi tiết yêu cầu và ứng tuyển</p>
                    </div>
                    <div className="space-y-4">
                        {JOB_OPENINGS.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </section>

            {/* General apply CTA */}
            <section className="py-20 px-6 bg-secondary border-t border-bordercolor">
                <div className="max-w-4xl mx-auto text-center">
                    <Briefcase className="w-16 h-16 text-accent/30 mx-auto mb-6" />
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Không Có Vị Trí Phù Hợp?</h2>
                    <p className="text-textmuted text-base font-light mb-8 max-w-2xl mx-auto">
                        Gửi CV của bạn đến Bách Ngân. Chúng tôi luôn mở cửa cho những ứng viên tài năng và sẽ liên hệ khi có vị trí phù hợp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:bachngan.design@gmail.com?subject=Ứng tuyển chung - Bách Ngân"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
                        >
                            <Mail className="w-4 h-4" /> Gửi CV qua Email
                        </a>
                        <a
                            href="tel:0858651818"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-bordercolor text-textmain font-bold text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                        >
                            <Phone className="w-4 h-4" /> Gọi: 085.865.1818
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
