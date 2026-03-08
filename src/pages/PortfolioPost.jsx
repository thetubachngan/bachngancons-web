import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Maximize, Calendar } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { sanityClient, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const CATEGORIES = {
    'thiet-ke-kien-truc': 'Thiết kế kiến trúc',
    'thiet-ke-noi-that': 'Thiết kế nội thất',
    'xay-moi-tron-goi': 'Xây mới trọn gói',
    'cai-tao-sua-chua': 'Cải tạo & Sửa chữa',
};

const QUERY_PROJECT = `*[_type in ["project", "design"] && slug.current == $slug][0] {
  _id,
  _type,
  title,
  slug,
  category,
  location,
  area,
  completionYear,
  clientName,
  designStyle,
  architecturalType,
  mainImage,
  gallery,
  body
}`;

const ptComponents = {
    block: {
        h1: ({ children }) => <h1 className="font-heading text-3xl font-black mb-6 mt-10">{children}</h1>,
        h2: ({ children }) => <h2 className="font-heading text-2xl font-bold mb-4 mt-8">{children}</h2>,
        h3: ({ children }) => <h3 className="font-heading text-xl font-bold mb-3 mt-6">{children}</h3>,
        normal: ({ children }) => <p className="text-textmuted text-base font-light leading-relaxed mb-4">{children}</p>,
    },
    types: {
        image: ({ value }) => (
            <figure className="my-8">
                <img
                    src={urlFor(value).width(900).url()}
                    alt={value.alt || ''}
                    className="w-full border border-bordercolor"
                />
            </figure>
        ),
    },
};

/* ─── Image Carousel with auto-slide ─── */
function ImageCarousel({ images, title }) {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const total = images.length;

    const goTo = useCallback((idx) => {
        if (isTransitioning || idx === current) return;
        setIsTransitioning(true);
        setCurrent(idx);
        setTimeout(() => setIsTransitioning(false), 700);
    }, [current, isTransitioning]);

    const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
    const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

    // Auto-slide every 4s
    useEffect(() => {
        if (total <= 1) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next, total]);

    if (total === 0) return null;

    return (
        <div className="relative group">
            {/* Main image area */}
            <div className="relative aspect-[16/9] overflow-hidden border border-bordercolor bg-secondary">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={urlFor(img).width(1600).height(900).url()}
                        alt={`${title} - Ảnh ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                        loading={idx < 2 ? 'eager' : 'lazy'}
                    />
                ))}

                {/* Counter badge */}
                <div className="absolute top-4 right-4 z-20 bg-primary/70 backdrop-blur-sm border border-bordercolor px-3 py-1.5 text-xs font-bold text-textmain tracking-wider">
                    {current + 1} / {total}
                </div>

                {/* Prev / Next arrows */}
                {total > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-primary/60 backdrop-blur-sm border border-bordercolor text-textmain flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent hover:text-primary hover:border-accent"
                            aria-label="Ảnh trước"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-primary/60 backdrop-blur-sm border border-bordercolor text-textmain flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent hover:text-primary hover:border-accent"
                            aria-label="Ảnh tiếp"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </>
                )}

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Dot indicators */}
            {total > 1 && (
                <div className="flex justify-center gap-2 mt-4 flex-wrap">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`transition-all duration-300 rounded-full ${idx === current
                                    ? 'w-8 h-2 bg-accent'
                                    : 'w-2 h-2 bg-bordercolor hover:bg-textmuted'
                                }`}
                            aria-label={`Xem ảnh ${idx + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Thumbnail strip */}
            {total > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`shrink-0 w-20 h-14 md:w-24 md:h-16 overflow-hidden border-2 transition-all duration-300 ${idx === current
                                    ? 'border-accent opacity-100 scale-105'
                                    : 'border-bordercolor opacity-50 hover:opacity-80'
                                }`}
                        >
                            <img
                                src={urlFor(img).width(200).height(140).url()}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function PortfolioPost() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        sanityClient
            .fetch(QUERY_PROJECT, { slug })
            .then((data) => {
                setProject(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain">
                <Navbar />
                <div className="flex-1 flex items-center justify-center pt-24">
                    <div className="animate-pulse space-y-4 max-w-5xl w-full px-6">
                        <div className="h-12 bg-secondary w-1/2 mb-8" />
                        <div className="h-96 bg-secondary w-full mb-8" />
                    </div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center pt-24 px-6">
                    <h2 className="font-heading text-3xl font-black mb-4">Không tìm thấy dự án</h2>
                    <Link
                        to="/portfolio"
                        className="bg-accent text-primary px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400"
                    >
                        Quay lại danh sách
                    </Link>
                </div>
            </div>
        );
    }

    // Merge mainImage + gallery into one array
    const allImages = [];
    if (project.mainImage) allImages.push(project.mainImage);
    if (project.gallery && project.gallery.length > 0) {
        project.gallery.forEach((img) => {
            // Avoid duplicate if mainImage is already the first gallery item
            if (!project.mainImage || img._key !== project.mainImage._key) {
                allImages.push(img);
            }
        });
    }

    const isDesign = project._type === 'design';

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
                    <div className="max-w-3xl">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-6"
                        >
                            <ChevronLeft className="w-4 h-4" /> Toàn bộ dự án
                        </Link>
                        <div className="text-xs text-accent uppercase tracking-widest font-bold mb-3">
                            {CATEGORIES[project.category] || project.category}
                        </div>
                        <h1 className="font-heading text-4xl md:text-6xl font-black leading-tight">
                            {project.title}
                        </h1>
                    </div>

                    {/* Project Meta Info */}
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 bg-primary p-6 md:p-8 border border-bordercolor md:min-w-[300px]">
                        {project.clientName && (
                            <div>
                                <div className="text-xs text-textmuted uppercase tracking-widest font-bold mb-1">
                                    Chủ đầu tư
                                </div>
                                <div className="font-medium text-lg">{project.clientName}</div>
                            </div>
                        )}
                        {project.location && (
                            <div>
                                <div className="text-xs text-textmuted uppercase tracking-widest font-bold mb-1 flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5" /> Địa điểm
                                </div>
                                <div className="font-medium text-lg">{project.location}</div>
                            </div>
                        )}
                        {project.area && (
                            <div>
                                <div className="text-xs text-textmuted uppercase tracking-widest font-bold mb-1 flex items-center gap-1.5">
                                    <Maximize className="w-3.5 h-3.5" /> Diện tích
                                </div>
                                <div className="font-medium text-lg">{project.area}</div>
                            </div>
                        )}
                        {project.completionYear && (
                            <div>
                                <div className="text-xs text-textmuted uppercase tracking-widest font-bold mb-1 flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" /> Năm hoàn thành
                                </div>
                                <div className="font-medium text-lg">{project.completionYear}</div>
                            </div>
                        )}
                        {project.designStyle && (
                            <div>
                                <div className="text-xs text-textmuted uppercase tracking-widest font-bold mb-1">
                                    Phong cách
                                </div>
                                <div className="font-medium text-lg">{project.designStyle}</div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Image Carousel — all images in one auto-sliding carousel */}
            {allImages.length > 0 && (
                <section className="px-6 py-12">
                    <div className="max-w-7xl mx-auto">
                        <ImageCarousel images={allImages} title={project.title} />
                    </div>
                </section>
            )}

            {/* Description / Body */}
            {project.body && (
                <article className="py-8 px-6">
                    <div className="max-w-3xl mx-auto prose-custom">
                        <PortableText value={project.body} components={ptComponents} />
                    </div>
                </article>
            )}

            {/* CTA */}
            <section className="py-24 px-6 bg-primary border-t border-bordercolor">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Bắt Đầu Dự Án Mới</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-8">
                        {isDesign ? 'Bạn cần tư vấn thiết kế?' : 'Bạn cần tư vấn thiết kế thi công?'}
                    </h2>
                    <Link
                        to="/#contact"
                        className="inline-block bg-accent text-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-colors duration-300"
                    >
                        Nhận báo giá chi tiết
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
