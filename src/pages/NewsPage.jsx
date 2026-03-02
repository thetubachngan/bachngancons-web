import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft, ArrowRight, Calendar, Tag, Clock, Megaphone,
    Building2, Users, Award, Newspaper, TrendingUp, Sparkles
} from 'lucide-react';
import { sanityClient, urlFor } from '../lib/sanityClient';
import Navbar from '../components/Navbar';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../sections/Footer';

const NEWS_CATEGORIES = {
    'tin-cong-ty': 'Tin công ty',
    'hoat-dong': 'Hoạt động',
    'nganh-xay-dung': 'Ngành xây dựng',
    'khuyen-mai': 'Khuyến mãi',
};

const CATEGORY_ICONS = {
    'tin-cong-ty': Building2,
    'hoat-dong': Users,
    'nganh-xay-dung': TrendingUp,
    'khuyen-mai': Sparkles,
};

// Query posts with category "tin-tuc-cong-ty" from Sanity
const QUERY_NEWS = `*[_type == "post" && category == "tin-tuc-cong-ty"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  publishedAt,
  gallery
}`;

const FALLBACK_NEWS = [
    {
        _id: 'news-1',
        title: 'Bách Ngân chính thức ra mắt website mới — Nền tảng số hóa cho ngành xây dựng',
        newsCategory: 'tin-cong-ty',
        excerpt: 'Với giao diện hiện đại, tối ưu trải nghiệm người dùng, website mới của Bách Ngân mang đến cái nhìn toàn diện về dịch vụ thiết kế & thi công trọn gói. Khách hàng có thể dễ dàng tra cứu bảng giá, xem công trình thực tế và đặt lịch tư vấn trực tuyến.',
        publishedAt: '2025-03-01T00:00:00Z',
        isFeatured: true,
    },
    {
        _id: 'news-2',
        title: 'Khởi công công trình Nhà Phố Đông Anh — 4 tầng kết hợp văn phòng',
        newsCategory: 'hoat-dong',
        excerpt: 'Đội ngũ kỹ sư Bách Ngân chính thức khởi công dự án nhà phố 4 tầng tại Đông Anh với tổng diện tích 280m². Công trình dự kiến hoàn thành trong 6 tháng với gói thi công trọn gói.',
        publishedAt: '2025-02-15T00:00:00Z',
    },
    {
        _id: 'news-3',
        title: 'Xu hướng xây nhà 2025: Smarthome và vật liệu xanh lên ngôi',
        newsCategory: 'nganh-xay-dung',
        excerpt: 'Năm 2025 chứng kiến sự bùng nổ của công nghệ nhà thông minh và vật liệu thân thiện môi trường. Bách Ngân chia sẻ góc nhìn và giải pháp tích hợp smarthome vào mọi gói thi công trọn gói.',
        publishedAt: '2025-02-01T00:00:00Z',
    },
    {
        _id: 'news-4',
        title: 'Bách Ngân bàn giao thành công Biệt Thự Việt Hưng — 320m² phong cách tân cổ điển',
        newsCategory: 'hoat-dong',
        excerpt: 'Sau 8 tháng thi công, biệt thự song lập 3 tầng tại Long Biên đã được bàn giao cho gia chủ với đầy đủ nội thất và hệ thống smarthome. Chất lượng vượt kỳ vọng, đúng tiến độ cam kết.',
        publishedAt: '2024-12-20T00:00:00Z',
    },
    {
        _id: 'news-5',
        title: 'Ưu đãi cuối năm: Giảm 5% gói thi công trọn gói cho khách hàng ký hợp đồng trước Tết',
        newsCategory: 'khuyen-mai',
        excerpt: 'Nhân dịp cuối năm, Bách Ngân triển khai chương trình ưu đãi đặc biệt dành cho khách hàng ký hợp đồng thiết kế & thi công trọn gói trước ngày 15/01/2025. Miễn phí nâng cấp gói giám sát camera 24/7.',
        publishedAt: '2024-12-01T00:00:00Z',
    },
    {
        _id: 'news-6',
        title: 'Hội thảo "Xây Nhà Thông Minh 2025" — Bách Ngân đồng hành cùng gia chủ',
        newsCategory: 'tin-cong-ty',
        excerpt: 'Bách Ngân tổ chức buổi hội thảo miễn phí chia sẻ kiến thức về quy trình xây nhà minh bạch, lựa chọn vật liệu và tích hợp công nghệ thông minh cho ngôi nhà hiện đại.',
        publishedAt: '2024-11-15T00:00:00Z',
    },
];

function formatDate(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('vi-VN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

function estimateReadTime(excerpt) {
    if (!excerpt) return '2 phút';
    const words = excerpt.split(' ').length;
    const minutes = Math.max(2, Math.ceil(words / 100));
    return `${minutes} phút đọc`;
}

export default function NewsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        sanityClient.fetch(QUERY_NEWS).then((data) => {
            setPosts(data && data.length > 0 ? data : []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const usingSanity = !loading && posts.length > 0;
    const allItems = usingSanity ? posts : FALLBACK_NEWS;

    const filteredItems = activeCategory
        ? allItems.filter((item) => (item.newsCategory || item.category) === activeCategory)
        : allItems;

    const categoryCounts = Object.keys(NEWS_CATEGORIES).reduce((acc, key) => {
        acc[key] = allItems.filter(p => (p.newsCategory || p.category) === key).length;
        return acc;
    }, {});

    const featured = filteredItems.find(item => item.isFeatured) || filteredItems[0];
    const restItems = filteredItems.filter(item => item._id !== featured?._id);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-secondary to-primary border-b border-bordercolor relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent opacity-5 blur-[100px] rounded-[100%] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" /> Về trang chủ
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold mb-6 uppercase tracking-wider">
                                <Megaphone className="w-3.5 h-3.5" /> Cập nhật mới nhất
                            </div>
                            <h1 className="font-heading text-4xl md:text-6xl font-black mb-4">
                                Tin Tức <span className="text-accent italic">Bách Ngân</span>
                            </h1>
                            <p className="text-textmuted text-base md:text-lg font-light max-w-2xl">
                                Cập nhật hoạt động công ty, tiến độ công trình, xu hướng ngành xây dựng và các chương trình ưu đãi mới nhất.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 bg-secondary border border-bordercolor text-textmuted text-sm shrink-0">
                            <Newspaper className="w-5 h-5 text-accent" />
                            <span><strong className="text-textmain">{allItems.length}</strong> bài viết</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-5 px-6 border-b border-bordercolor sticky top-0 bg-primary/95 backdrop-blur-md z-30">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center md:justify-start">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 flex items-center gap-2 ${!activeCategory
                            ? 'bg-accent text-primary border-accent shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                            : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                            }`}
                    >
                        Tất cả
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${!activeCategory ? 'bg-primary/20' : 'bg-secondary'}`}>
                            {allItems.length}
                        </span>
                    </button>
                    {Object.entries(NEWS_CATEGORIES).map(([value, label]) => {
                        const Icon = CATEGORY_ICONS[value];
                        return (
                            <button
                                key={value}
                                onClick={() => setActiveCategory(value)}
                                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 flex items-center gap-2 ${activeCategory === value
                                    ? 'bg-accent text-primary border-accent shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                                    : 'border-bordercolor text-textmuted hover:border-textmain hover:text-textmain'
                                    }`}
                            >
                                {Icon && <Icon className="w-3.5 h-3.5" />}
                                {label}
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${activeCategory === value ? 'bg-primary/20' : 'bg-secondary'}`}>
                                    {categoryCounts[value] || 0}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* News Content */}
            <section className="py-12 md:py-16 px-6 flex-1">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        /* Loading skeleton */
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 animate-pulse">
                                <div className="md:col-span-3">
                                    <div className="aspect-[16/9] bg-secondary border border-bordercolor" />
                                </div>
                                <div className="md:col-span-2 space-y-4 py-4">
                                    <div className="h-4 bg-secondary w-24" />
                                    <div className="h-8 bg-secondary w-full" />
                                    <div className="h-4 bg-secondary w-full" />
                                    <div className="h-4 bg-secondary w-3/4" />
                                </div>
                            </div>
                        </div>
                    ) : filteredItems.length === 0 ? (
                        /* Empty state */
                        <div className="text-center py-24">
                            <div className="w-20 h-20 bg-secondary border border-bordercolor rounded-full flex items-center justify-center mx-auto mb-6">
                                <Newspaper className="w-8 h-8 text-bordercolor" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-textmain mb-3">Chưa có tin tức nào trong danh mục này</h3>
                            <p className="text-textmuted text-sm font-light mb-6 max-w-md mx-auto">
                                Hãy thử chọn danh mục khác hoặc quay lại sau.
                            </p>
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="px-6 py-3 bg-accent text-primary font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
                            >
                                Xem tất cả tin tức
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {/* Featured Article */}
                            {featured && (
                                <FeaturedNewsCard item={featured} usingSanity={usingSanity} />
                            )}

                            {/* Rest — grid */}
                            {restItems.length > 0 && (
                                <>
                                    <div className="flex items-center gap-4">
                                        <h2 className="text-sm font-bold uppercase tracking-widest text-textmuted shrink-0">Tin mới nhất</h2>
                                        <div className="h-px flex-1 bg-bordercolor"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {restItems.map((item) => (
                                            <NewsCard key={item._id} item={item} usingSanity={usingSanity} />
                                        ))}
                                    </div>
                                </>
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

/* ─── Featured News Card ─── */
function FeaturedNewsCard({ item, usingSanity }) {
    const isLink = usingSanity && item.slug?.current;
    const Wrapper = isLink ? Link : 'div';
    const wrapperProps = isLink ? { to: `/blog/${item.slug.current}` } : {};
    const catKey = item.newsCategory || item.category;
    const catLabel = NEWS_CATEGORIES[catKey] || catKey;
    const CatIcon = CATEGORY_ICONS[catKey] || Newspaper;

    return (
        <Wrapper {...wrapperProps} className="group block">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 bg-secondary border border-bordercolor hover:border-accent/50 transition-colors duration-300 overflow-hidden">
                {/* Image or icon area */}
                <div className="md:col-span-3 relative overflow-hidden aspect-[16/10] md:aspect-auto bg-gradient-to-br from-secondary via-primary to-secondary">
                    {usingSanity && item.gallery && item.gallery.length > 0 ? (
                        <img
                            src={urlFor(item.gallery[0]).width(900).height(500).url()}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full min-h-[280px] flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-bordercolor">
                                    <CatIcon className="w-10 h-10 text-accent/40" />
                                </div>
                                <span className="text-bordercolor text-xs font-light">Bách Ngân News</span>
                            </div>
                        </div>
                    )}

                    {/* Featured badge */}
                    {item.isFeatured && (
                        <div className="absolute top-4 left-4 z-10">
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent text-primary text-[10px] font-bold uppercase tracking-wider">
                                <Award className="w-3 h-3" /> Nổi bật
                            </span>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest">
                            <CatIcon className="w-3.5 h-3.5" /> {catLabel}
                        </span>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-textmain group-hover:text-accent transition-colors mb-4 line-clamp-3">
                        {item.title}
                    </h2>

                    {item.excerpt && (
                        <p className="text-textmuted text-sm font-light leading-relaxed mb-6 line-clamp-3">
                            {item.excerpt}
                        </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-xs text-textmuted mb-6">
                        {item.publishedAt && (
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-accent" /> {formatDate(item.publishedAt)}
                            </span>
                        )}
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-accent" /> {estimateReadTime(item.excerpt)}
                        </span>
                    </div>

                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:gap-3 transition-all">
                        Đọc bài viết <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

/* ─── Standard News Card ─── */
function NewsCard({ item, usingSanity }) {
    const isLink = usingSanity && item.slug?.current;
    const Wrapper = isLink ? Link : 'div';
    const wrapperProps = isLink ? { to: `/blog/${item.slug.current}` } : {};
    const catKey = item.newsCategory || item.category;
    const catLabel = NEWS_CATEGORIES[catKey] || catKey;
    const CatIcon = CATEGORY_ICONS[catKey] || Tag;

    return (
        <Wrapper {...wrapperProps} className="group cursor-pointer block">
            <div className="bg-secondary border border-bordercolor hover:border-accent transition-colors duration-300 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-secondary via-primary to-secondary overflow-hidden relative">
                    {usingSanity && item.gallery && item.gallery.length > 0 ? (
                        <img
                            src={urlFor(item.gallery[0]).width(600).height(340).url()}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <CatIcon className="w-10 h-10 text-bordercolor group-hover:text-accent/30 transition-colors" />
                        </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/80 backdrop-blur-sm border border-bordercolor text-accent text-[10px] font-bold uppercase tracking-widest">
                            <CatIcon className="w-3 h-3" /> {catLabel}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2 flex-grow-0">
                        {item.title}
                    </h3>

                    {item.excerpt && (
                        <p className="text-textmuted text-sm font-light line-clamp-2 mb-4 flex-1">
                            {item.excerpt}
                        </p>
                    )}

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-bordercolor">
                        <div className="flex items-center gap-3 text-xs text-textmuted">
                            {item.publishedAt && (
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {formatDate(item.publishedAt)}
                                </span>
                            )}
                        </div>
                        <span className="flex items-center gap-1 text-xs text-textmuted">
                            <Clock className="w-3 h-3" /> {estimateReadTime(item.excerpt)}
                        </span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
