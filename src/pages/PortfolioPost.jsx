import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Maximize, Calendar } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { sanityClient, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const CATEGORIES = {
    'xay-moi-tron-goi': 'Xây mới trọn gói',
    'thiet-ke-noi-that': 'Thiết kế nội thất',
    'thi-cong-thuong-mai': 'Thi công thương mại',
    'cai-tao-sua-chua': 'Cải tạo & Sửa chữa',
};

const QUERY_PROJECT = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  location,
  area,
  completionYear,
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
                            <ChevronLeft className="w-4 h-4" /> Toàn bộ công trình
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
                                    <Maximize className="w-3.5 h-3.5" /> Quy mô
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
                    </div>
                </div>
            </section>

            {/* Main Image */}
            {project.mainImage && (
                <section className="px-6 py-12">
                    <div className="max-w-7xl mx-auto">
                        <img
                            src={urlFor(project.mainImage).width(1600).height(900).url()}
                            alt={project.title}
                            className="w-full border border-bordercolor"
                        />
                    </div>
                </section>
            )}

            {/* Description */}
            {project.body && (
                <article className="py-8 px-6">
                    <div className="max-w-3xl mx-auto prose-custom">
                        <PortableText value={project.body} components={ptComponents} />
                    </div>
                </article>
            )}

            {/* Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="py-16 px-6 bg-secondary border-t border-bordercolor">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-heading text-3xl font-bold mb-12 text-center">Thư Viện Ảnh Thực Tế</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.gallery.map((img, idx) => (
                                <div key={idx} className="aspect-[4/3] border border-bordercolor bg-primary overflow-hidden">
                                    <img
                                        src={urlFor(img).width(800).height(600).url()}
                                        alt={`${project.title} - Ảnh ${idx + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-24 px-6 bg-primary border-t border-bordercolor">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Bắt Đầu Dự Án Mới</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-8">
                        Bạn cần tư vấn thiết kế thi công?
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
