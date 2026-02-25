import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, ArrowRight, MapPin, Maximize } from "lucide-react";
import { sanityClient, urlFor } from "../lib/sanityClient";

const QUERY = `*[_type == "project"] | order(completionYear desc, publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  location,
  area,
  mainImage
}`;

// Fallback static projects
const FALLBACK_PROJECTS = [
  {
    _id: "static-1",
    title: "Nhà phố Tây Tựu",
    location: "Hà Nội",
    area: "400m²",
  },
  {
    _id: "static-2",
    title: "Nội thất Ngô Quyền",
    location: "Hải Phòng",
  },
  {
    _id: "static-3",
    title: "Cafe Phúc",
    location: "Thi công thương mại",
  },
];

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

  const items = loaded && projects.length > 0 ? projects : FALLBACK_PROJECTS;
  const usingSanity = loaded && projects.length > 0;

  return (
    <section className="py-24 bg-primary px-6 border-b border-bordercolor" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto section-header">
          <h2 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-6">Công Trình Đã Thực Hiện</h2>
          <div className="h-px w-24 bg-bordercolor mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 feature-grid">
          {items.map((project) => {
            const isLink = usingSanity && project.slug?.current;
            const Wrapper = isLink ? Link : "div";
            const wrapperProps = isLink ? { to: `/portfolio/${project.slug.current}` } : {};

            return (
              <Wrapper
                key={project._id}
                {...wrapperProps}
                className="group cursor-pointer card-item block"
              >
                <div className="relative overflow-hidden border border-bordercolor aspect-[4/3] bg-secondary mb-4">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full pointer-events-none"></div>

                  {usingSanity && project.mainImage ? (
                    <img
                      src={urlFor(project.mainImage).width(600).height(450).url()}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center text-bordercolor group-hover:scale-105 transition-transform duration-700">
                      <Image className="w-12 h-12" />
                    </div>
                  )}
                </div>

                <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <div className="flex items-center gap-3 text-sm text-textmuted mb-4 font-light">
                  {project.location && (
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{project.location}</span>
                  )}
                  {project.location && project.area && <span>•</span>}
                  {project.area && (
                    <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" />{project.area}</span>
                  )}
                </div>

                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textmain group-hover:text-accent transition-colors">
                  Xem dự án <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Wrapper>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="bg-transparent border border-bordercolor text-textmain px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-textmain transition-colors duration-300 inline-block"
          >
            Khám phá toàn bộ {loaded && projects.length > 0 ? "công trình" : "dự án"}
          </Link>
        </div>
      </div>
    </section>
  );
}
