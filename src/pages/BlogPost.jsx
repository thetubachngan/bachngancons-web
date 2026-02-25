import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ChevronLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { sanityClient, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const CATEGORIES = {
    'ky-thuat-thi-cong': 'Kỹ thuật thi công',
    'vat-lieu-xay-dung': 'Vật liệu xây dựng',
    'kien-thuc-nen-mong': 'Kiến thức nền móng',
    'thiet-ke-noi-that': 'Thiết kế nội thất',
    'phong-thuy': 'Phong thủy',
    'tin-tuc-cong-ty': 'Tin tức công ty',
};

const QUERY_POST = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  excerpt,
  publishedAt,
  mainImage,
  body
}`;

const QUERY_RELATED = `*[_type == "post" && category == $category && slug.current != $slug] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  category,
  mainImage,
  publishedAt
}`;

// Portable Text components styled for the design system
const ptComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="font-heading text-3xl md:text-4xl font-black mb-6 mt-10 text-textmain">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-8 text-textmain">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 mt-6 text-textmain">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="font-heading text-lg font-bold mb-2 mt-4 text-textmain">{children}</h4>
        ),
        normal: ({ children }) => (
            <p className="text-textmuted text-base font-light leading-relaxed mb-4">{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-6 py-2 mb-6 bg-secondary/50 text-textmuted italic">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2 text-textmuted font-light">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-textmuted font-light">{children}</ol>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-textmain">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:text-yellow-400 transition-colors"
            >
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }) => (
            <figure className="my-8">
                <img
                    src={urlFor(value).width(900).url()}
                    alt={value.alt || ''}
                    className="w-full border border-bordercolor"
                />
                {value.alt && (
                    <figcaption className="text-xs text-textmuted mt-2 text-center italic">{value.alt}</figcaption>
                )}
            </figure>
        ),
    },
};

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        sanityClient
            .fetch(QUERY_POST, { slug })
            .then((data) => {
                setPost(data);
                setLoading(false);
                if (data?.category) {
                    sanityClient
                        .fetch(QUERY_RELATED, { category: data.category, slug })
                        .then(setRelated);
                }
            })
            .catch(() => setLoading(false));
    }, [slug]);

    if (loading) {
        return (
            <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain">
                <div className="noise-overlay"></div>
                <Navbar />
                <div className="flex-1 flex items-center justify-center pt-24">
                    <div className="animate-pulse space-y-4 max-w-3xl w-full px-6">
                        <div className="h-4 bg-bordercolor w-32 rounded" />
                        <div className="h-10 bg-bordercolor w-3/4 rounded" />
                        <div className="h-64 bg-bordercolor rounded" />
                        <div className="h-4 bg-bordercolor w-full rounded" />
                        <div className="h-4 bg-bordercolor w-5/6 rounded" />
                        <div className="h-4 bg-bordercolor w-2/3 rounded" />
                    </div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain">
                <div className="noise-overlay"></div>
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center pt-24 px-6">
                    <h2 className="font-heading text-3xl font-black mb-4">Không tìm thấy bài viết</h2>
                    <p className="text-textmuted mb-8">Bài viết này không tồn tại hoặc đã bị xóa.</p>
                    <Link
                        to="/blog"
                        className="bg-accent text-primary px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-colors"
                    >
                        Quay lại danh sách
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-12 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-3xl mx-auto">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8"
                    >
                        <ChevronLeft className="w-4 h-4" /> Tất cả bài viết
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs text-accent uppercase tracking-widest font-bold">
                            {CATEGORIES[post.category] || post.category}
                        </span>
                        {post.publishedAt && (
                            <>
                                <span className="text-bordercolor">•</span>
                                <span className="flex items-center gap-1 text-xs text-textmuted">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </>
                        )}
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl font-black leading-tight">
                        {post.title}
                    </h1>
                    {post.excerpt && (
                        <p className="text-textmuted text-base md:text-lg font-light mt-4 leading-relaxed">
                            {post.excerpt}
                        </p>
                    )}
                </div>
            </section>

            {/* Featured Image */}
            {post.mainImage && (
                <section className="px-6">
                    <div className="max-w-4xl mx-auto -mt-0">
                        <img
                            src={urlFor(post.mainImage).width(1200).height(600).url()}
                            alt={post.title}
                            className="w-full border border-bordercolor"
                        />
                    </div>
                </section>
            )}

            {/* Body */}
            <article className="py-12 px-6 flex-1">
                <div className="max-w-3xl mx-auto prose-custom">
                    {post.body && <PortableText value={post.body} components={ptComponents} />}
                </div>
            </article>

            {/* Related posts */}
            {related.length > 0 && (
                <section className="py-16 px-6 bg-secondary border-t border-bordercolor">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-heading text-2xl font-bold mb-8">Bài viết liên quan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map((r) => (
                                <Link
                                    to={`/blog/${r.slug?.current}`}
                                    key={r._id}
                                    className="bg-primary border border-bordercolor hover:border-accent group transition-colors duration-300 block"
                                >
                                    <div className="aspect-video bg-secondary border-b border-bordercolor overflow-hidden">
                                        {r.mainImage ? (
                                            <img
                                                src={urlFor(r.mainImage).width(400).height(225).url()}
                                                alt={r.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Tag className="w-8 h-8 text-bordercolor" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <div className="text-xs text-accent uppercase tracking-widest font-bold mb-2">
                                            {CATEGORIES[r.category] || r.category}
                                        </div>
                                        <h3 className="font-heading text-lg font-bold group-hover:text-accent transition-colors line-clamp-2">
                                            {r.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-12 px-6 bg-primary border-t border-bordercolor">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-textmuted text-sm mb-4">Bạn có câu hỏi về xây dựng?</p>
                    <Link
                        to="/#contact"
                        className="inline-block bg-accent text-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-colors duration-300"
                    >
                        Nhận tư vấn miễn phí
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
