import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Compass, PenTool, Hammer, Sofa,
    ShieldCheck, Users, Target, Heart,
    Eye, Lightbulb, Award, Clock,
    ArrowRight, Quote, Zap,
    ClipboardCheck, FileSignature, HardHat, CheckCircle, Settings
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const pageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Hero elements
            gsap.fromTo('.about-hero-el',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
            );

            // Section headers
            gsap.utils.toArray('.about-section-header').forEach(header => {
                gsap.fromTo(header,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                        scrollTrigger: { trigger: header, start: 'top 85%' }
                    }
                );
            });

            // Staggered cards
            gsap.utils.toArray('.about-grid').forEach(grid => {
                const cards = grid.querySelectorAll('.about-card');
                if (cards.length) {
                    gsap.fromTo(cards,
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power2.out',
                            scrollTrigger: { trigger: grid, start: 'top 85%' }
                        }
                    );
                }
            });

            // Counter animation
            gsap.utils.toArray('.stat-number').forEach(el => {
                const target = parseInt(el.getAttribute('data-target'), 10);
                gsap.fromTo(el.parentElement,
                    { y: 30, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            onEnter: () => {
                                gsap.to(el, {
                                    innerText: target,
                                    duration: 2,
                                    snap: { innerText: 1 },
                                    ease: 'power2.out'
                                });
                            }
                        }
                    }
                );
            });

            // Timeline items
            gsap.utils.toArray('.timeline-item').forEach((item, i) => {
                gsap.fromTo(item,
                    { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                        scrollTrigger: { trigger: item, start: 'top 85%' }
                    }
                );
            });

            // Navbar scroll
            const nav = document.getElementById('main-nav');
            if (nav) {
                ScrollTrigger.create({
                    start: 'top -100',
                    onUpdate: (self) => {
                        if (self.direction === 1) {
                            nav.style.transform = 'translateY(-100%)';
                        } else {
                            nav.style.transform = 'translateY(0%)';
                            nav.style.background = 'rgba(12, 10, 9, 0.95)';
                        }
                    },
                    onLeaveBack: () => {
                        nav.style.background = 'rgba(12, 10, 9, 0.8)';
                    }
                });
            }
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const coreValues = [
        {
            icon: Eye,
            title: 'Tầm Nhìn',
            desc: 'Trở thành đơn vị thiết kế & thi công xây dựng được tin tưởng hàng đầu tại Hà Nội và miền Bắc — nơi mỗi công trình đều là một lời cam kết bằng danh dự nghề nghiệp.'
        },
        {
            icon: Target,
            title: 'Sứ Mệnh',
            desc: 'Kiến tạo những không gian sống bền vững, minh bạch từ bản vẽ đến bàn giao. Mỗi ngôi nhà được dựng lên không chỉ bằng gạch đá, mà bằng sự tận tâm và trách nhiệm tuyệt đối.'
        },
        {
            icon: Heart,
            title: 'Giá Trị Cốt Lõi',
            desc: 'Minh bạch — Chất lượng — Trách nhiệm. Ba trụ cột này xuyên suốt mọi hoạt động của Bách Ngân, từ viên gạch đầu tiên đến lúc trao tay chìa khóa.'
        }
    ];

    const businessAreas = [
        { icon: Compass, title: 'Quy Hoạch', desc: 'Lập phương án quy hoạch tổng thể, tối ưu diện tích và công năng sử dụng cho mọi loại hình công trình.' },
        { icon: PenTool, title: 'Thiết Kế Dân Dụng – Công Nghiệp', desc: 'Thiết kế kiến trúc, kết cấu và hệ thống MEP theo tiêu chuẩn kỹ thuật quốc gia, phù hợp phong thủy và thẩm mỹ.' },
        { icon: Hammer, title: 'Thi Công Xây Lắp', desc: 'Thi công trọn gói từ móng đến hoàn thiện, giám sát chất lượng bằng hệ thống e-logbook và camera livestream 24/7.' },
        { icon: Sofa, title: 'Thi Công Nội Thất', desc: 'Thiết kế và thi công nội thất trọn gói, từ phong cách hiện đại đến tân cổ điển, theo đúng gu thẩm mỹ gia chủ.' }
    ];

    const stats = [
        { value: 10, suffix: '+', label: 'Năm Kinh Nghiệm', sublabel: 'Trong lĩnh vực xây dựng' },
        { value: 50, suffix: '+', label: 'Dự Án Hoàn Thành', sublabel: 'Nhà ở, thương mại, nội thất' },
        { value: 400, suffix: 'm²+', label: 'Diện Tích Thi Công', sublabel: 'Dự án lớn nhất' },
        { value: 5, suffix: ' năm', label: 'Bảo Hành', sublabel: 'Toàn diện mọi hạng mục' }
    ];

    const timeline = [
        { icon: PenTool, step: '01', title: 'Thiết Kế', desc: 'Bản vẽ 2D/3D chuẩn kỹ thuật, tối ưu công năng và phong thủy. Gia chủ duyệt 100% trước thi công.' },
        { icon: FileSignature, step: '02', title: 'Xin Phép Xây Dựng', desc: 'Hỗ trợ toàn bộ hồ sơ pháp lý, giấy phép xây dựng. Gia chủ không phải lo giấy tờ.' },
        { icon: HardHat, step: '03', title: 'Thi Công', desc: 'KS giám sát hiện trường liên tục. Báo cáo tiến độ hàng ngày qua ảnh/video. Camera livestream 24/7.' },
        { icon: ClipboardCheck, step: '04', title: 'Nghiệm Thu', desc: 'Nghiệm thu từng giai đoạn nghiêm ngặt. Checklist chi tiết, gia chủ ký xác nhận từng hạng mục.' },
        { icon: ShieldCheck, step: '05', title: 'Bảo Hành', desc: 'Bảo hành 5 năm toàn diện. Gói "Thăm Khám Định Kỳ" 6 tháng/lần trong 2 năm đầu hoàn toàn miễn phí.' }
    ];

    const teamHighlights = [
        { icon: Award, title: 'Đội Ngũ Kỹ Sư Chuyên Nghiệp', desc: 'Tất cả kỹ sư tại Bách Ngân đều có bằng cấp chuyên ngành và tối thiểu 5 năm kinh nghiệm thực chiến tại công trường. Chúng tôi không thuê thợ thời vụ — mỗi nhân sự đều là thành viên cố định, gắn bó và chịu trách nhiệm.' },
        { icon: Settings, title: 'Quy Trình ISO Hóa', desc: 'Mọi hoạt động từ khảo sát, thiết kế, thi công đến nghiệm thu đều được chuẩn hóa theo quy trình rõ ràng. Mỗi bước đều có checklist, biên bản, chữ ký xác nhận — không có chỗ cho sự tùy tiện.' },
        { icon: Lightbulb, title: 'Tư Duy "Design & Build"', desc: 'Khác với mô hình truyền thống (thiết kế một nơi, thi công một nơi), Bách Ngân vận hành theo mô hình "Design & Build" — thiết kế và thi công đồng bộ bởi cùng một đội ngũ, loại bỏ hoàn toàn xung đột kỹ thuật.' }
    ];

    return (
        <div ref={pageRef} className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* ========== 1. HERO ========== */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary to-primary border-b border-bordercolor relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent opacity-10 blur-[120px] rounded-[100%] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="about-hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-bold mb-8 uppercase tracking-wider">
                        <Zap className="w-4 h-4" /> Bách Ngân Construction
                    </div>
                    <h1 className="about-hero-el font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight text-textmain drop-shadow-md leading-tight">
                        Không Chỉ Xây Nhà. <br />
                        <span className="text-accent italic">Xây Niềm Tin.</span>
                    </h1>
                    <p className="about-hero-el text-textmuted text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Công ty Cổ phần Giải pháp Cơ điện và Xây dựng Bách Ngân — Kiến tạo không gian sống bền vững
                        bằng sự minh bạch, trách nhiệm và tâm huyết nghề xây dựng.
                    </p>
                </div>
            </section>

            <main className="flex-1">

                {/* ========== 2. CÂU CHUYỆN THƯƠNG HIỆU ========== */}
                <section className="py-24 px-6 bg-primary border-b border-bordercolor">
                    <div className="max-w-5xl mx-auto">
                        <div className="about-section-header mb-16">
                            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Câu Chuyện Của Chúng Tôi</p>
                            <h2 className="font-heading text-3xl md:text-4xl font-black text-textmain">Từ Công Trường Đến Tổ Ấm</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                            <div className="lg:col-span-3 space-y-6">
                                <p className="text-textmuted text-base font-light leading-relaxed">
                                    Bách Ngân được sinh ra từ chính những trăn trở thực tế trên công trường. Trước khi trở thành một công ty, người sáng lập đã dành hơn một thập kỷ lăn lộn trên những công trình từ nhỏ đến lớn — chứng kiến những giọt nước mắt của gia chủ khi ngôi nhà mơ ước trở thành nỗi ám ảnh.
                                </p>
                                <p className="text-textmuted text-base font-light leading-relaxed">
                                    Thợ thi công cẩu thả. Vật tư bị đánh tráo. Chi phí phát sinh không kiểm soát. Tiến độ trễ hàng tháng. Bàn giao xong thì "mất hút". Đó là bức tranh chung mà quá nhiều gia đình Việt phải gánh chịu khi quyết định xây nhà.
                                </p>
                                <p className="text-textmuted text-base font-light leading-relaxed">
                                    <strong className="text-textmain">Bách Ngân ra đời để thay đổi điều đó.</strong> Chúng tôi không hứa hẹn giá rẻ nhất — chúng tôi cam kết sự <span className="text-accent font-medium">minh bạch tuyệt đối</span> trong từng hạng mục, từng đồng chi phí, và từng ngày thi công. Bởi vì xây nhà phải là hành trình hưởng thụ, không phải một canh bạc căng thẳng.
                                </p>
                                <p className="text-textmuted text-base font-light leading-relaxed">
                                    Với triết lý <strong className="text-textmain italic">"Design & Build — Thiết kế và Thi công đồng bộ"</strong>, Bách Ngân đảm nhận toàn bộ chuỗi giá trị từ bản vẽ đến bàn giao, loại bỏ hoàn toàn tình trạng "cha chung không ai khóc" — khi thiết kế một nơi, thi công một nẻo.
                                </p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-secondary border-l-4 border-accent p-8 relative">
                                    <Quote className="w-10 h-10 text-accent/20 absolute top-4 right-4" />
                                    <p className="text-textmain text-lg font-heading italic leading-relaxed mb-6">
                                        "Mỗi ngôi nhà đều chứa đựng câu chuyện của một gia đình. Bách Ngân không chỉ xây tường, đổ mái — chúng tôi giữ gìn giấc mơ của bạn bằng sự tỉ mỉ trong từng chi tiết."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                            <Zap className="w-5 h-5 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-textmain text-sm font-bold">Ban Lãnh Đạo</p>
                                            <p className="text-textmuted text-xs">Bách Ngân Construction</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 bg-primary border border-bordercolor p-6">
                                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Thông tin pháp nhân</p>
                                    <ul className="space-y-3 text-sm text-textmuted font-light">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                            <span><strong className="text-textmain">Tên:</strong> Công ty CP Giải pháp Cơ điện và Xây dựng Bách Ngân</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                            <span><strong className="text-textmain">Trụ sở:</strong> Số 19, tổ 3 Tình Quang, phường Giang Biên, Hà Nội</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                            <span><strong className="text-textmain">Hotline:</strong> 0912.874.868 – 085.865.1818</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                                            <span><strong className="text-textmain">Email:</strong> bachngan.design@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 3. TẦM NHÌN — SỨ MỆNH — GIÁ TRỊ ========== */}
                <section className="py-24 px-6 bg-secondary">
                    <div className="max-w-7xl mx-auto">
                        <div className="about-section-header mb-16 text-center">
                            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Nền Tảng Vững Chắc</p>
                            <h2 className="font-heading text-3xl md:text-4xl font-black text-textmain">Tầm Nhìn — Sứ Mệnh — Giá Trị</h2>
                            <div className="h-px w-24 bg-bordercolor mx-auto mt-6"></div>
                        </div>

                        <div className="about-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                            {coreValues.map((item, i) => (
                                <div key={i} className="about-card bg-primary p-8 border border-bordercolor hover:border-accent transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:w-48 group-hover:h-48"></div>
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 bg-secondary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                            <item.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="font-heading text-xl font-bold mb-4 text-textmain">{item.title}</h3>
                                        <p className="text-textmuted text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== 4. LĨNH VỰC HOẠT ĐỘNG ========== */}
                <section className="py-24 px-6 bg-primary border-b border-bordercolor">
                    <div className="max-w-7xl mx-auto">
                        <div className="about-section-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Năng Lực Chuyên Môn</p>
                                <h2 className="font-heading text-3xl md:text-4xl font-black text-textmain">Lĩnh Vực Hoạt Động</h2>
                            </div>
                            <p className="text-textmuted max-w-sm text-sm font-light leading-relaxed border-l border-accent pl-6">
                                Từ quy hoạch tổng thể đến hoàn thiện nội thất — Bách Ngân cung cấp giải pháp toàn diện cho mọi nhu cầu xây dựng.
                            </p>
                        </div>

                        <div className="about-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {businessAreas.map((area, i) => (
                                <div key={i} className="about-card bg-secondary p-8 border border-bordercolor hover:border-accent group transition-colors duration-300">
                                    <div className="w-12 h-12 bg-primary text-accent flex items-center justify-center mb-6 border border-bordercolor group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                        <area.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-heading text-lg font-bold mb-3 text-textmain">{area.title}</h3>
                                    <p className="text-textmuted text-sm font-light leading-relaxed">{area.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== 5. CON SỐ NỔI BẬT ========== */}
                <section className="py-20 px-6 bg-secondary border-b border-bordercolor relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(234,179,8,0.03)_0%,transparent_50%)] pointer-events-none"></div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="font-heading text-4xl md:text-5xl font-black text-accent mb-2">
                                        <span className="stat-number" data-target={stat.value}>0</span>{stat.suffix}
                                    </div>
                                    <p className="text-textmain text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                                    <p className="text-textmuted text-xs font-light">{stat.sublabel}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== 6. ĐỘI NGŨ CHUYÊN GIA ========== */}
                <section className="py-24 px-6 bg-primary border-b border-bordercolor">
                    <div className="max-w-7xl mx-auto">
                        <div className="about-section-header mb-16 text-center max-w-2xl mx-auto">
                            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Con Người Bách Ngân</p>
                            <h2 className="font-heading text-3xl md:text-4xl font-black text-textmain mb-4">Đội Ngũ Chuyên Gia</h2>
                            <p className="text-textmuted text-sm font-light leading-relaxed">
                                Chất lượng công trình phản ánh chất lượng con người. Tại Bách Ngân, mỗi thành viên đều là chuyên gia có tâm và có tầm.
                            </p>
                        </div>

                        <div className="about-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamHighlights.map((item, i) => (
                                <div key={i} className="about-card group">
                                    <div className="bg-secondary p-8 border border-bordercolor hover:border-accent transition-all duration-300 h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/30 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-heading text-lg font-bold text-textmain flex-1">{item.title}</h3>
                                        </div>
                                        <p className="text-textmuted text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Team CTA */}
                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center gap-3 px-8 py-4 bg-secondary border border-bordercolor text-textmuted text-sm">
                                <Users className="w-5 h-5 text-accent" />
                                <span>Đội ngũ <strong className="text-textmain">15+ kỹ sư & kiến trúc sư</strong> cố định, không thuê thời vụ</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 7. TRIẾT LÝ VẬN HÀNH ========== */}
                <section className="py-24 px-6 bg-secondary border-b border-bordercolor">
                    <div className="max-w-4xl mx-auto">
                        <div className="about-section-header mb-16 text-center">
                            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Hệ Thống Vận Hành Khép Kín</p>
                            <h2 className="font-heading text-3xl md:text-4xl font-black text-textmain mb-4">5 Mắt Xích Tạo Nên Chất Lượng</h2>
                            <p className="text-textmuted text-sm font-light leading-relaxed max-w-xl mx-auto">
                                Từ nét vẽ đầu tiên đến ngày bàn giao chìa khóa — mỗi giai đoạn đều được kiểm soát chặt chẽ bởi đội ngũ chuyên gia.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-[23px] md:left-[27px] top-6 bottom-6 w-[2px] bg-bordercolor"></div>

                            <div className="space-y-8">
                                {timeline.map((item, i) => (
                                    <div key={i} className="timeline-item flex gap-6 relative">
                                        <div className="flex flex-col items-center shrink-0">
                                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 z-10 border-2 transition-colors ${i === 0
                                                ? 'bg-accent text-primary border-accent'
                                                : 'bg-primary text-accent border-bordercolor'
                                                }`}>
                                                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                        </div>
                                        <div className="pt-2 pb-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-accent text-xs font-bold uppercase tracking-widest">{item.step}</span>
                                                <div className="h-px w-8 bg-accent/30"></div>
                                            </div>
                                            <h3 className="font-heading text-xl font-bold text-textmain mb-2">{item.title}</h3>
                                            <p className="text-textmuted text-sm font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom highlight */}
                        <div className="mt-12 bg-primary border border-bordercolor p-6 flex flex-col md:flex-row items-center gap-4">
                            <CheckCircle className="w-8 h-8 text-accent shrink-0" />
                            <p className="text-textmuted text-sm font-light leading-relaxed text-center md:text-left">
                                <strong className="text-textmain">"Làm tới đâu, trả tiền tới đó"</strong> — Thanh toán theo giai đoạn, mọi phát sinh phải có biên bản ký duyệt. Không có chuyện "đội giá" bất ngờ.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== 8. CTA ========== */}
                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
