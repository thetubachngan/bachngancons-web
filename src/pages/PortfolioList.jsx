import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Maximize, Calendar } from 'lucide-react';
import { sanityClient, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const CATEGORIES = {
    'xay-moi-tron-goi': 'Xây mới trọn gói',
    'thiet-ke-noi-that': 'Thiết kế nội thất',
    'thi-cong-thuong-mai': 'Thi công thương mại',
    'cai-tao-sua-chua': 'Cải tạo & Sửa chữa',
};

const QUERY_ALL = `*[_type == "project"] | order(completionYear desc, publishedAt desc) {
  _id,
  title,
  slug,
  category,
  location,
  area,
  completionYear,
  mainImage
}`;

export default function PortfolioList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        sanityClient.fetch(QUERY_ALL).then((data) => {
            setProjects(data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const filteredProjects = activeCategory
        ? projects.filter((p) => p.category === activeCategory)
        : projects;

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" /> Về trang chủ
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">
                        Dự Án <span className="text-accent">Tiêu Biểu</span>
                    </h1>
                    <p className="text-textmuted text-base md:text-lg font-light max-w-2xl mx-auto md:mx-0">
                        Khám phá các công trình kiến trúc, thi công xây dựng và nội thất do đội ngũ Bách Ngân thực hiện.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 px-6 border-b border-bordercolor">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center md:justify-start">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${!activeCategory
                            ? 'bg-accent text-primary border-accent'
                            : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                            }`}
                    >
                        Tất cả
                    </button>
                    {Object.entries(CATEGORIES).map(([value, label]) => (
                        <button
                            key={value}
                            onClick={() => setActiveCategory(value)}
                            className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${activeCategory === value
                                ? 'bg-accent text-primary border-accent'
                                : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid Formatted for Visual Showcase */}
            <section className="py-16 px-6 flex-1">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="aspect-[4/3] bg-secondary border border-bordercolor mb-4" />
                                    <div className="h-6 bg-secondary w-3/4 mb-2" />
                                    <div className="h-4 bg-secondary w-1/2" />
                                </div>
                            ))}
                        </div>
                    ) : filteredProjects.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-textmuted text-lg mb-2">Chưa có dự án nào.</p>
                            <p className="text-textmuted text-sm">Hãy đăng dự án đầu tiên qua Sanity Studio!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {filteredProjects.map((project) => (
                                <Link
                                    to={`/portfolio/${project.slug?.current}`}
                                    key={project._id}
                                    className="group block"
                                >
                                    <div className="relative overflow-hidden border border-bordercolor aspect-[4/3] bg-secondary mb-6">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full pointer-events-none"></div>
                                        {project.mainImage ? (
                                            <img
                                                src={urlFor(project.mainImage).width(800).height(600).url()}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-bordercolor group-hover:scale-105 transition-transform duration-700">
                                                Sanity Image Missing
                                            </div>
                                        )}

                                        {/* Hover text overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                                                Xem chi tiết công trình
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div>
                                            <div className="text-xs text-textmuted uppercase tracking-widest font-bold mb-2">
                                                {CATEGORIES[project.category] || project.category}
                                            </div>
                                            <h3 className="font-heading text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-wrap md:flex-col gap-3 md:gap-1 text-sm text-textmuted text-left md:text-right font-light">
                                            {project.location && (
                                                <div className="flex items-center md:justify-end gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5" /> {project.location}
                                                </div>
                                            )}
                                            {project.area && (
                                                <div className="flex items-center md:justify-end gap-1.5">
                                                    <Maximize className="w-3.5 h-3.5" /> {project.area}
                                                </div>
                                            )}
                                            {project.completionYear && (
                                                <div className="flex items-center md:justify-end gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" /> Năm {project.completionYear}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
