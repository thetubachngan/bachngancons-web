import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Layers, Home, Calendar } from "lucide-react";
import { sanityClient, urlFor } from "../lib/sanityClient";

const CATEGORIES = {
  'ky-thuat-thi-cong': 'Kỹ thuật thi công',
  'vat-lieu-xay-dung': 'Vật liệu xây dựng',
  'kien-thuc-nen-mong': 'Kiến thức nền móng',
  'thiet-ke-noi-that': 'Thiết kế nội thất',
  'phong-thuy': 'Phong thủy',
  'tin-tuc-cong-ty': 'Tin tức công ty',
};

const ICONS = [Wrench, Layers, Home];

const QUERY = `*[_type == "post"] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  category,
  excerpt,
  publishedAt,
  gallery
}`;

// Fallback static articles when no Sanity posts exist
const FALLBACK_ARTICLES = [
  {
    _id: 'static-1',
    icon: Wrench,
    category: 'ky-thuat-thi-cong',
    title: 'Hướng dẫn cắt đầu cọc bê tông 150×150',
    excerpt: 'Đảm bảo chất lượng móng cọc với kỹ thuật cắt đầu cọc đúng chuẩn, không gây nứt vỡ cọc bê tông cốt thép.',
  },
  {
    _id: 'static-2',
    icon: Layers,
    category: 'vat-lieu-xay-dung',
    title: 'Sỏi tự nhiên vs Đá nghiền: Chọn đúng cho bê tông',
    excerpt: 'Phân tích ưu nhược điểm của sỏi và đá dăm trong cấp phối bê tông để bạn đưa ra lựa chọn vật liệu tốt nhất.',
  },
  {
    _id: 'static-3',
    icon: Home,
    category: 'kien-thuc-nen-mong',
    title: '4 loại móng phổ biến: Chọn đúng cho đất nhà bạn',
    excerpt: 'Móng đơn, móng băng, móng bè hay móng cọc? Hướng dẫn chọn loại móng phù hợp với địa chất để tiết kiệm chi phí.',
  },
];

export default function KnowledgeHub() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    sanityClient.fetch(QUERY).then((data) => {
      setPosts(data && data.length > 0 ? data : []);
      setLoaded(true);
    }).catch(() => setLoaded(true));
  }, []);

  const articles = loaded && posts.length > 0 ? posts : FALLBACK_ARTICLES;
  const usingSanity = loaded && posts.length > 0;

  return (
    <section className="py-24 bg-secondary px-6" id="knowledge">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 section-header">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-2">Kiến Thức Xây Dựng</h2>
            <p className="text-textmuted text-sm font-light">Trang bị kiến thức để xây nhà không còn là nỗi lo.</p>
          </div>
          <Link
            to="/blog"
            className="text-sm font-bold uppercase tracking-widest text-accent hover:text-yellow-400 transition-colors flex items-center gap-2"
          >
            Xem thêm bài viết <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 feature-grid">
          {articles.map((article, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            const isLink = usingSanity && article.slug?.current;
            const Wrapper = isLink ? Link : 'div';
            const wrapperProps = isLink ? { to: `/blog/${article.slug.current}` } : {};

            return (
              <Wrapper
                key={article._id}
                {...wrapperProps}
                className="bg-primary border border-bordercolor hover:border-accent group transition-colors duration-300 card-item block"
              >
                <div className="aspect-video bg-secondary border-b border-bordercolor flex items-center justify-center overflow-hidden relative">
                  {usingSanity && article.gallery && article.gallery.length > 0 ? (
                    <img
                      src={urlFor(article.gallery[0]).width(600).height(340).url()}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <IconComponent className="w-10 h-10 text-bordercolor group-hover:scale-110 transition-transform duration-700" />
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xs text-accent uppercase tracking-widest font-bold mb-3">
                    {CATEGORIES[article.category] || article.category}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-textmuted text-sm font-light line-clamp-3 mb-6">{article.excerpt}</p>
                  )}
                  {usingSanity && article.publishedAt ? (
                    <div className="flex items-center gap-2 text-xs text-textmuted">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.publishedAt).toLocaleDateString('vi-VN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                  ) : (
                    <span className="text-xs uppercase tracking-widest font-bold text-textmain pb-1 border-b border-textmain cursor-pointer">
                      Đọc thêm
                    </span>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
