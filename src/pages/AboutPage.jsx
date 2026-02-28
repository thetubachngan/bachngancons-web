import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Animations from '../sections/Animations';
import Footer from '../sections/Footer';

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="antialiased min-h-screen flex flex-col bg-primary text-textmain selection:bg-accent selection:text-primary">
            <div className="noise-overlay"></div>
            <Navbar />

            {/* Hero header */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-secondary to-primary border-b border-bordercolor relative overflow-hidden">
                {/* Architectural Glowing Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent opacity-10 blur-[120px] rounded-[100%] pointer-events-none"></div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight text-textmain drop-shadow-md">
                        Về <span className="text-accent">Chúng Tôi</span>
                    </h1>
                    <p className="text-textmuted text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Câu chuyện về triết lý kinh doanh và cách Bách Ngân xây dựng niềm tin bền vững thông qua sự minh bạch.
                    </p>
                </div>
            </section>

            <main className="flex-1">
                <Animations />
            </main>

            <Footer />
        </div>
    );
}
