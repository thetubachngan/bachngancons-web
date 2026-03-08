import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Maximize, Calendar, Image, ArrowRight, CheckCircle, HardHat, Award, Clock, ShieldCheck } from 'lucide-react';
import { sanityClient, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

const PROJECT_GROUPS = [
    { id: 'thiet-ke', label: 'Thiết kế' },
    { id: 'thi-cong', label: 'Thi công' }
];

const CATEGORIES = {
    'thiet-ke-kien-truc': { group: 'thiet-ke', label: 'Thiết kế kiến trúc' },
    'thiet-ke-noi-that': { group: 'thiet-ke', label: 'Thiết kế nội thất' },
    'xay-moi-tron-goi': { group: 'thi-cong', label: 'Xây mới trọn gói' },
    'cai-tao-sua-chua': { group: 'thi-cong', label: 'Cải tạo & Sửa chữa' },
};

const QUERY_ALL = `*[_type in ["project", "design"]] | order(completionYear desc, publishedAt desc) {
  _id,
  _type,
  title,
  slug,
  category,
  location,
  area,
  completionYear,
  mainImage,
  "galleryCover": gallery[0],
  status
}`;

const FALLBACK_PROJECTS = [
    {
        _id: "f-1",
        title: "Nhà Phố Hiện Đại Cầu Giấy",
        slug: null,
        _type: "design",
        category: "thiet-ke-kien-truc",
        location: "Cầu Giấy, Hà Nội",
        area: "350m²",
        completionYear: 2024,
        status: "completed",
        description: "Thiết kế kiến trúc nhà phố 4 tầng phong cách hiện đại tối giản, tối ưu thông gió và chiếu sáng tự nhiên.",
    },
    {
        _id: "f-2",
        title: "Biệt Thự Vườn Ecopark",
        slug: null,
        _type: "design",
        category: "thiet-ke-kien-truc",
        location: "Ecopark, Hưng Yên",
        area: "500m²",
        completionYear: 2025,
        status: "in-progress",
        description: "Thiết kế kiến trúc biệt thự vườn phong cách nhiệt đới, hài hòa cảnh quan xanh và không gian sống.",
    },
    {
        _id: "f-3",
        title: "Nhà Phố Tây Tựu",
        slug: null,
        _type: "project",
        category: "xay-moi-tron-goi",
        location: "Bắc Từ Liêm, Hà Nội",
        area: "400m²",
        completionYear: 2024,
        status: "completed",
        description: "Công trình nhà phố 3 tầng thiết kế hiện đại, tối ưu ánh sáng tự nhiên và không gian sống cho gia đình 3 thế hệ.",
    },
    {
        _id: "f-4",
        title: "Biệt Thự Việt Hưng",
        slug: null,
        _type: "project",
        category: "xay-moi-tron-goi",
        location: "Long Biên, Hà Nội",
        area: "320m²",
        completionYear: 2024,
        status: "completed",
        description: "Biệt thự song lập phong cách tân cổ điển, hệ thống smarthome tích hợp toàn bộ.",
    },
    {
        _id: "f-5",
        title: "Nhà Phố Đông Anh",
        slug: null,
        _type: "project",
        category: "xay-moi-tron-goi",
        location: "Đông Anh, Hà Nội",
        area: "280m²",
        completionYear: 2025,
        status: "in-progress",
        description: "Nhà phố 4 tầng kết hợp văn phòng cho thuê tầng 1, tối ưu thu nhập thụ động.",
    },
    {
        _id: "f-6",
        title: "Nội Thất Ngô Quyền",
        slug: null,
        _type: "design",
        category: "thiet-ke-noi-that",
        location: "Hải Phòng",
        area: "180m²",
        completionYear: 2023,
        status: "completed",
        description: "Thiết kế và thi công nội thất trọn gói căn hộ phong cách Scandinavian hiện đại.",
    },
    {
        _id: "f-7",
        title: "Nội Thất Căn Hộ Vinhomes",
        slug: null,
        _type: "design",
        category: "thiet-ke-noi-that",
        location: "Ocean Park, Hà Nội",
        area: "95m²",
        completionYear: 2024,
        status: "completed",
        description: "Nội thất căn hộ 3 phòng ngủ phong cách tối giản Nhật Bản, tận dụng tối đa diện tích.",
    },
    {
        _id: "f-8",
        title: "Cải Tạo Nhà Cũ Thanh Xuân",
        slug: null,
        _type: "project",
        category: "cai-tao-sua-chua",
        location: "Thanh Xuân, Hà Nội",
        area: "120m²",
        completionYear: 2025,
        status: "in-progress",
        description: "Cải tạo toàn bộ nhà cấp 4 thành 3 tầng hiện đại, giữ nguyên phần móng kết cấu.",
    },
];

const stats = [
    { icon: Award, value: '50+', label: 'Dự án hoàn thành' },
    { icon: Clock, value: '10+', label: 'Năm kinh nghiệm' },
    { icon: ShieldCheck, value: '5 năm', label: 'Bảo hành' },
];

export default function PortfolioList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeGroup, setActiveGroup] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        sanityClient.fetch(QUERY_ALL).then((data) => {
            setProjects(data && data.length > 0 ? data : []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const usingSanity = !loading && projects.length > 0;
    const allItems = usingSanity ? projects : FALLBACK_PROJECTS;

    const filteredProjects = allItems.filter((p) => {
        if (activeCategory) return p.category === activeCategory;
        if (activeGroup) return CATEGORIES[p.category]?.group === activeGroup;
        return true;
    });

    const groupCounts = PROJECT_GROUPS.reduce((acc, group) => {
        acc[group.id] = allItems.filter(p => CATEGORIES[p.category]?.group === group.id).length;
        return acc;
    }, {});

    const categoryCounts = Object.keys(CATEGORIES).reduce((acc, key) => {
        acc[key] = allItems.filter(p => p.category === key).length;
        return acc;
    }, {});

    const featured = filteredProjects[0];
    const restProjects = filteredProjects.slice(1);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-secondary to-primary border-b border-bordercolor relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent opacity-5 blur-[100px] rounded-[100%] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center md:text-left relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" /> Về trang chủ
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">
                        Công Trình <span className="text-accent italic">Tiêu Biểu</span>
                    </h1>
                    <p className="text-textmuted text-base md:text-lg font-light max-w-2xl mx-auto md:mx-0">
                        Mỗi công trình là một câu chuyện — từ bản vẽ ý tưởng đến ngày bàn giao chìa khóa.
                        Khám phá hành trình chúng tôi kiến tạo không gian sống cho hàng trăm gia đình.
                    </p>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-6 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-start gap-8 md:gap-16">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="font-heading text-xl font-black text-accent">{stat.value}</span>
                                <p className="text-textmuted text-xs font-light">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tab Filters with counts */}
            <section className="py-6 px-6 border-b border-bordercolor sticky top-0 bg-primary/95 backdrop-blur-md z-30">
                <div className="max-w-7xl mx-auto flex flex-col gap-4">
                    {/* Primary Groups */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <button
                            onClick={() => { setActiveGroup(null); setActiveCategory(null); }}
                            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 flex items-center gap-2 ${!activeGroup
                                ? 'bg-accent text-primary border-accent shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                                : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                                }`}
                        >
                            Tất cả
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${!activeGroup ? 'bg-primary/20' : 'bg-secondary'}`}>
                                {allItems.length}
                            </span>
                        </button>
                        {PROJECT_GROUPS.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => { setActiveGroup(group.id); setActiveCategory(null); }}
                                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 flex items-center gap-2 ${activeGroup === group.id
                                    ? 'bg-accent text-primary border-accent shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                                    : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                                    }`}
                            >
                                {group.label}
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${activeGroup === group.id ? 'bg-primary/20' : 'bg-secondary'}`}>
                                    {groupCounts[group.id] || 0}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Secondary Categories (only show when a group is active) */}
                    {activeGroup && (
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4 border-t border-bordercolor/50">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 rounded-full ${!activeCategory
                                    ? 'bg-textmain text-primary'
                                    : 'bg-secondary text-textmuted hover:text-textmain hover:bg-bordercolor'
                                    }`}
                            >
                                Tất cả {PROJECT_GROUPS.find(g => g.id === activeGroup)?.label}
                            </button>
                            {Object.entries(CATEGORIES)
                                .filter(([_, cat]) => cat.group === activeGroup)
                                .map(([value, cat]) => (
                                    <button
                                        key={value}
                                        onClick={() => setActiveCategory(value)}
                                        className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 rounded-full ${activeCategory === value
                                            ? 'bg-textmain text-primary'
                                            : 'bg-secondary text-textmuted hover:text-textmain hover:bg-bordercolor'
                                            }`}
                                    >
                                        {cat.label}
                                        <span className={`text-[10px] opacity-70`}>({categoryCounts[value] || 0})</span>
                                    </button>
                                ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 md:py-16 px-6 flex-1">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        /* Loading skeleton */
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 animate-pulse">
                                    <div className="aspect-[16/9] bg-secondary border border-bordercolor mb-4" />
                                    <div className="h-6 bg-secondary w-3/4 mb-2" />
                                    <div className="h-4 bg-secondary w-1/2" />
                                </div>
                                <div className="animate-pulse">
                                    <div className="aspect-[4/3] bg-secondary border border-bordercolor mb-4" />
                                    <div className="h-6 bg-secondary w-3/4 mb-2" />
                                    <div className="h-4 bg-secondary w-1/2" />
                                </div>
                            </div>
                        </div>
                    ) : filteredProjects.length === 0 ? (
                        /* Empty state — professional */
                        <div className="text-center py-24">
                            <div className="w-20 h-20 bg-secondary border border-bordercolor rounded-full flex items-center justify-center mx-auto mb-6">
                                <Image className="w-8 h-8 text-bordercolor" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-textmain mb-3">Chưa có dự án nào trong danh mục này</h3>
                            <p className="text-textmuted text-sm font-light mb-8 max-w-md mx-auto">
                                Chúng tôi đang cập nhật thêm công trình. Liên hệ ngay để được tư vấn về các dự án tương tự.
                            </p>
                            <Link
                                to="/#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
                            >
                                Liên hệ tư vấn <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-8 md:space-y-12">
                            {/* Featured project — full width on top */}
                            {featured && (
                                <ProjectCardLarge project={featured} usingSanity={usingSanity} />
                            )}

                            {/* Rest of projects — 3-column grid */}
                            {restProjects.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {restProjects.map((project) => (
                                        <ProjectCardSmall key={project._id} project={project} usingSanity={usingSanity} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <FinalCTA />
            <Footer />
        </div>
    );
}

/* ─── Featured Project Card (Large) ─── */
function ProjectCardLarge({ project, usingSanity }) {
    const isLink = usingSanity && project.slug?.current;
    const Wrapper = isLink ? Link : "div";
    const wrapperProps = isLink ? { to: `/portfolio/${project.slug.current}` } : {};
    const catLabel = CATEGORIES[project.category]?.label || project.category;
    const isCompleted = project.status !== 'in-progress';
    const imageSource = project.mainImage || project.galleryCover;

    return (
        <Wrapper {...wrapperProps} className="group block">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 bg-secondary border border-bordercolor hover:border-accent/50 transition-colors duration-300 overflow-hidden">
                {/* Image — 3 cols */}
                <div className="md:col-span-3 relative overflow-hidden aspect-[16/10] md:aspect-auto">
                    {usingSanity && imageSource ? (
                        <img
                            src={urlFor(imageSource).width(900).height(600).url()}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-secondary via-primary to-secondary flex items-center justify-center">
                            <Image className="w-16 h-16 text-bordercolor" />
                        </div>
                    )}

                    {/* Status badge */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center gap-1 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border ${isCompleted
                            ? 'bg-accent/10 border-accent/30 text-accent'
                            : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                            }`}>
                            {isCompleted
                                ? <><CheckCircle className="w-3 h-3" /> Hoàn thành</>
                                : <><HardHat className="w-3 h-3" /> Đang thi công</>
                            }
                        </span>
                    </div>
                </div>

                {/* Info — 2 cols */}
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    {catLabel && (
                        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{catLabel}</span>
                    )}
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-textmain group-hover:text-accent transition-colors mb-4">
                        {project.title}
                    </h2>
                    {project.description && (
                        <p className="text-textmuted text-sm font-light leading-relaxed mb-6 line-clamp-3">
                            {project.description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-textmuted font-light mb-6">
                        {project.location && (
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-accent" /> {project.location}
                            </div>
                        )}
                        {project.area && (
                            <div className="flex items-center gap-1.5">
                                <Maximize className="w-3.5 h-3.5 text-accent" /> {project.area}
                            </div>
                        )}
                        {project.completionYear && (
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-accent" /> {project.completionYear}
                            </div>
                        )}
                    </div>

                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:gap-3 transition-all">
                        Xem chi tiết công trình <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

/* ─── Standard Project Card (Small) ─── */
function ProjectCardSmall({ project, usingSanity }) {
    const isLink = usingSanity && project.slug?.current;
    const Wrapper = isLink ? Link : "div";
    const wrapperProps = isLink ? { to: `/portfolio/${project.slug.current}` } : {};
    const catLabel = CATEGORIES[project.category]?.label || project.category;
    const isCompleted = project.status !== 'in-progress';
    const imageSource = project.mainImage || project.galleryCover;

    return (
        <Wrapper {...wrapperProps} className="group cursor-pointer block">
            <div className="relative overflow-hidden border border-bordercolor aspect-[4/3] bg-secondary mb-5">
                {/* Image */}
                {usingSanity && imageSource ? (
                    <img
                        src={urlFor(imageSource).width(600).height(450).url()}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary via-primary to-secondary flex items-center justify-center">
                        <Image className="w-12 h-12 text-bordercolor" />
                    </div>
                )}

                {/* Category badge */}
                {catLabel && (
                    <div className="absolute top-3 left-3 z-20">
                        <span className="px-2.5 py-1 bg-primary/80 backdrop-blur-sm border border-bordercolor text-accent text-[10px] font-bold uppercase tracking-widest">
                            {catLabel}
                        </span>
                    </div>
                )}

                {/* Status badge */}
                <div className="absolute top-3 right-3 z-20">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border ${isCompleted
                        ? 'bg-accent/10 border-accent/30 text-accent'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        }`}>
                        {isCompleted ? <CheckCircle className="w-3 h-3" /> : <HardHat className="w-3 h-3" />}
                        {isCompleted ? 'Xong' : 'Đang TC'}
                    </span>
                </div>

                {/* Hover overlay — slide-up info */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-5">
                    {project.description && (
                        <p className="text-textmuted text-xs font-light mb-2 line-clamp-2">{project.description}</p>
                    )}
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                        Xem chi tiết <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>

                {/* Default overlay */}
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-[5] pointer-events-none"></div>
            </div>

            {/* Info below */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div>
                    <h3 className="font-heading text-xl font-bold group-hover:text-accent transition-colors line-clamp-1">
                        {project.title}
                    </h3>
                </div>
                <div className="flex flex-wrap md:flex-col gap-2 md:gap-1 text-xs text-textmuted text-left md:text-right font-light shrink-0">
                    {project.location && (
                        <div className="flex items-center md:justify-end gap-1">
                            <MapPin className="w-3 h-3" /> {project.location}
                        </div>
                    )}
                    {project.area && (
                        <div className="flex items-center md:justify-end gap-1">
                            <Maximize className="w-3 h-3" /> {project.area}
                        </div>
                    )}
                    {project.completionYear && (
                        <div className="flex items-center md:justify-end gap-1">
                            <Calendar className="w-3 h-3" /> {project.completionYear}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
}
