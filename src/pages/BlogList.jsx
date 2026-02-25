import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Search } from 'lucide-react';
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

const QUERY_ALL = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  publishedAt,
  mainImage
}`;

export default function BlogList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        sanityClient.fetch(QUERY_ALL).then((data) => {
            setPosts(data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const filteredPosts = posts.filter((post) => {
        const matchCategory = !activeCategory || post.category === activeCategory;
        const matchSearch = !searchTerm || post.title?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-secondary border-b border-bordercolor">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" /> Về trang chủ
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">
                        Kiến Thức <span className="text-accent">Xây Dựng</span>
                    </h1>
                    <p className="text-textmuted text-base md:text-lg font-light max-w-2xl">
                        Chia sẻ kinh nghiệm, kiến thức chuyên môn về xây dựng, thiết kế và
                        thi công từ đội ngũ kỹ sư Bách Ngân.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 px-6 border-b border-bordercolor">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${!activeCategory
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
                                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors duration-300 ${activeCategory === value
                                    ? 'bg-accent text-primary border-accent'
                                    : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textmuted" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm bài viết..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-secondary border border-bordercolor pl-10 pr-4 py-2.5 text-sm text-textmain placeholder:text-textmuted focus:border-accent focus:outline-none transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* Posts grid */}
            <section className="py-16 px-6 flex-1">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-secondary border border-bordercolor animate-pulse">
                                    <div className="aspect-video bg-bordercolor" />
                                    <div className="p-6 space-y-3">
                                        <div className="h-3 bg-bordercolor w-24 rounded" />
                                        <div className="h-5 bg-bordercolor w-3/4 rounded" />
                                        <div className="h-4 bg-bordercolor w-full rounded" />
                                        <div className="h-4 bg-bordercolor w-2/3 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-24">
                            <p className="text-textmuted text-lg mb-2">
                                {posts.length === 0
                                    ? 'Chưa có bài viết nào.'
                                    : 'Không tìm thấy bài viết phù hợp.'}
                            </p>
                            <p className="text-textmuted text-sm">
                                {posts.length === 0
                                    ? 'Hãy đăng bài viết đầu tiên qua Sanity Studio!'
                                    : 'Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.'}
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post) => (
                                <Link
                                    to={`/blog/${post.slug?.current}`}
                                    key={post._id}
                                    className="bg-secondary border border-bordercolor hover:border-accent group transition-colors duration-300 block"
                                >
                                    <div className="aspect-video bg-primary border-b border-bordercolor overflow-hidden">
                                        {post.mainImage ? (
                                            <img
                                                src={urlFor(post.mainImage).width(600).height(340).url()}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Tag className="w-10 h-10 text-bordercolor" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs text-accent uppercase tracking-widest font-bold mb-3">
                                            {CATEGORIES[post.category] || post.category}
                                        </div>
                                        <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        {post.excerpt && (
                                            <p className="text-textmuted text-sm font-light line-clamp-3 mb-4">
                                                {post.excerpt}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-2 text-xs text-textmuted">
                                            <Calendar className="w-3 h-3" />
                                            {post.publishedAt
                                                ? new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })
                                                : 'Chưa có ngày'}
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
