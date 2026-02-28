import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PainPoints from '../sections/PainPoints';
import Solutions from '../sections/Solutions';
import Footer from '../sections/Footer';

export default function CommitmentPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className="pt-24 bg-primary min-h-screen">
                <div className="max-w-7xl mx-auto px-6 py-12 text-center border-b border-bordercolor mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-black text-textmain mb-4">Cam kết của Bách Ngân</h1>
                    <p className="text-textmuted max-w-2xl mx-auto">
                        Khẳng định uy tín và chất lượng qua từng công trình.
                    </p>
                </div>
                <PainPoints />
                <Solutions />
            </main>
            <Footer />
        </>
    );
}
