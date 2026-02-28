import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/Navbar';
import Process from '../sections/Process';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessPage() {
    useEffect(() => {
        // Section Header Reveals
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.fromTo(header,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: header,
                        start: "top 85%",
                    }
                }
            );
        });

        // Staggered Feature Cards / Items
        gsap.utils.toArray('.feature-grid').forEach(grid => {
            const cards = grid.querySelectorAll('.card-item');
            if (cards.length) {
                gsap.fromTo(cards,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: grid,
                            start: "top 85%",
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-[#334155] relative overflow-hidden">
                {/* Architectural Glowing Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent opacity-10 blur-[120px] rounded-[100%] pointer-events-none"></div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-textmuted hover:text-accent transition-colors mb-8 px-4 py-2 rounded-full border border-bordercolor bg-secondary/80 backdrop-blur-sm">
                        <ArrowLeft className="w-4 h-4" /> Về trang chủ
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight text-textmain drop-shadow-md">
                        Quy Trình <span className="text-accent">Làm Việc</span>
                    </h1>
                    <p className="text-textmuted text-base md:text-lg font-light max-w-2xl leading-relaxed">
                        Thiết kế & thi công chuyên nghiệp chuẩn Kiến trúc ARC. Khám phá hệ thống vận hành minh bạch và câu chuyện xây dựng niềm tin của Bách Ngân.
                    </p>
                </div>
            </section>

            <main className="flex-1">
                <Process />
            </main>

            <Footer />
        </div>
    );
}
