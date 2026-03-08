import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, ArrowRight, MapPin, Maximize, Calendar, CheckCircle, HardHat } from "lucide-react";
import { sanityClient, urlFor } from "../lib/sanityClient";

const QUERY = `*[_type == "project"] | order(completionYear desc, publishedAt desc) [0...6] {
  _id,
  title,
  slug,
  projectGroup,
  category,
  location,
  area,
  completionYear,
  mainImage,
  status
}`;

const CATEGORIES = {
  'thiet-ke-kien-truc': 'Kiến trúc',
  'thiet-ke-noi-that': 'Nội thất',
  'thi-cong-tron-goi': 'Thi công trọn gói',
  'thi-cong-noi-that': 'TC Nội thất',
  'thi-cong-cai-tao-sua-chua': 'Cải tạo',
};

const FALLBACK_PROJECTS = [
  {
    _id: "f-1",
    title: "Nhà Phố Hiện Đại Cầu Giấy",
    projectGroup: "thiet-ke",
    category: "thiet-ke-kien-truc",
    location: "Cầu Giấy, Hà Nội",
    area: "350m²",
    completionYear: 2024,
    status: "completed",
    description: "Thiết kế kiến trúc nhà phố 4 tầng phong cách hiện đại tối giản, tối ưu thông gió và chiếu sáng tự nhiên.",
  },
  {
    _id: "f-2",
    title: "Nhà Phố Tây Tựu",
    projectGroup: "thi-cong",
    category: "thi-cong-tron-goi",
    location: "Bắc Từ Liêm, Hà Nội",
    area: "400m²",
    completionYear: 2024,
    status: "completed",
    description: "Công trình nhà phố 3 tầng thiết kế hiện đại, tối ưu ánh sáng tự nhiên và không gian sống cho gia đình 3 thế hệ.",
  },
  {
    _id: "f-3",
    title: "Biệt Thự Việt Hưng",
    projectGroup: "thi-cong",
    category: "thi-cong-tron-goi",
    location: "Long Biên, Hà Nội",
    area: "320m²",
    completionYear: 2024,
    status: "completed",
    description: "Biệt thự song lập phong cách tân cổ điển, hệ thống thông minh tích hợp.",
  },
  {
    _id: "f-4",
    title: "Nội Thất Ngô Quyền",
    projectGroup: "thiet-ke",
    category: "thiet-ke-noi-that",
    location: "Hải Phòng",
    area: "180m²",
    completionYear: 2023,
    status: "completed",
  },
  {
    _id: "f-5",
    title: "Cải Tạo Quán Cafe",
    projectGroup: "thi-cong",
    category: "thi-cong-cai-tao-sua-chua",
    location: "Hà Nội",
    area: "150m²",
    completionYear: 2023,
    status: "completed",
  },
  {
    _id: "f-6",
    title: "Nhà Phố Đông Anh",
    projectGroup: "thi-cong",
    category: "thi-cong-tron-goi",
    location: "Đông Anh, Hà Nội",
    area: "280m²",
    completionYear: 2025,
    status: "in-progress",
  },
];

function ProjectCard({ project, usingSanity, isFeatured = false }) {
  const isLink = usingSanity && project.slug?.current;
  const Wrapper = isLink ? Link : "div";
  const wrapperProps = isLink ? { to: `/portfolio/${project.slug.current}` } : {};
  const catLabel = CATEGORIES[project.category] || project.category || '';
  const isCompleted = project.status !== 'in-progress';

  return (
    <Wrapper
      {...wrapperProps}
      className={`group cursor-pointer card-item block relative ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden border border-bordercolor bg-secondary ${isFeatured ? 'aspect-[16/10] md:aspect-[16/9]' : 'aspect-[4/3]'}`}>
        {/* Image or placeholder */}
        {usingSanity && project.mainImage ? (
          <img
            src={urlFor(project.mainImage).width(isFeatured ? 1200 : 600).height(isFeatured ? 675 : 450).url()}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary via-primary to-secondary flex items-center justify-center">
            <div className="text-center">
              <Image className="w-12 h-12 text-bordercolor mx-auto mb-2" />
              {isFeatured && <span className="text-bordercolor text-xs font-light">Hình ảnh công trình</span>}
            </div>
          </div>
        )}

        {/* Category badge (top-left) */}
        {catLabel && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm border border-bordercolor text-accent text-[10px] font-bold uppercase tracking-widest">
              {catLabel}
            </span>
          </div>
        )}

        {/* Status badge (top-right) */}
        <div className="absolute top-3 right-3 z-20">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border ${isCompleted
            ? 'bg-accent/10 border-accent/30 text-accent'
            : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}>
            {isCompleted
              ? <><CheckCircle className="w-3 h-3" /> Hoàn thành</>
              : <><HardHat className="w-3 h-3" /> Đang thi công</>
            }
          </span>
        </div>

        {/* Hover overlay — slide-up info panel */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-5 md:p-6">
          {isFeatured && project.description && (
            <p className="text-textmuted text-sm font-light mb-3 line-clamp-2">{project.description}</p>
          )}
          <div className="flex items-center gap-3 text-xs text-textmuted font-light">
            {project.location && (
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
            )}
            {project.area && (
              <span className="flex items-center gap-1"><Maximize className="w-3 h-3" />{project.area}</span>
            )}
            {project.completionYear && (
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{project.completionYear}</span>
            )}
          </div>
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
            Xem chi tiết <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Default dark overlay (subtle) — fades on hover */}
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-[5] pointer-events-none"></div>
      </div>

      {/* Title below image */}
      <div className="pt-4">
        <h3 className={`font-heading font-bold group-hover:text-accent transition-colors line-clamp-1 ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-textmuted mt-1 font-light">
          {project.location && (
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{project.location}</span>
          )}
          {project.area && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1"><Maximize className="w-3 h-3" />{project.area}</span>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(QUERY)
      .then((data) => {
        setProjects(data && data.length > 0 ? data : []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  const usingSanity = loaded && projects.length > 0;
  const items = usingSanity ? projects : FALLBACK_PROJECTS;
  const featured = items[0];
  const sideProjects = items.slice(1, 3);

  return (
    <section className="py-24 bg-primary px-6 border-b border-bordercolor" id="portfolio">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 section-header">
          <div>
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Dự Án Tiêu Biểu</p>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain">Công Trình Đã Thực Hiện</h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-textmuted hover:text-accent transition-colors shrink-0"
          >
            Xem tất cả dự án <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Grid: Featured (2-col) + 2 side cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 feature-grid">
          {/* Featured project — spans 2 columns */}
          <div className="md:col-span-2 card-item">
            <ProjectCard project={featured} usingSanity={usingSanity} isFeatured={true} />
          </div>

          {/* Side projects — stacked in 1 column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {sideProjects.map((project) => (
              <div key={project._id} className="card-item">
                <ProjectCard project={project} usingSanity={usingSanity} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="bg-transparent border border-bordercolor text-textmain px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300 inline-block"
          >
            Khám phá toàn bộ công trình
          </Link>
        </div>
      </div>
    </section>
  );
}
