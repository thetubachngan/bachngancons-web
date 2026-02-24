import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import PainPoints from './sections/PainPoints'
import Solutions from './sections/Solutions'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import KnowledgeHub from './sections/KnowledgeHub'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-[var(--color-primary)]">
            <Navbar />
            <main>
                <Hero />
                <TrustBar />
                <PainPoints />
                <Solutions />
                <Portfolio />
                <Process />
                <KnowledgeHub />
                <Testimonials />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    )
}
