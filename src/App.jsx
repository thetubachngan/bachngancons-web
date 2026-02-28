import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import PortfolioList from './pages/PortfolioList';
import PortfolioPost from './pages/PortfolioPost';
import FengShuiCompass from './pages/FengShuiCompass';
import FloatingContact from './components/FloatingContact';
import ProcessPage from './pages/ProcessPage';
import CommitmentPage from './pages/CommitmentPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConstructionPage from './pages/ConstructionPage';
import InteriorPage from './pages/InteriorPage';
import RenovationPage from './pages/RenovationPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen flex flex-col selection:bg-accent selection:text-primary relative">
        <div className="noise-overlay"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/thi-cong" element={<ConstructionPage />} />
          <Route path="/noi-that" element={<InteriorPage />} />
          <Route path="/cai-tao" element={<RenovationPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/portfolio/:slug" element={<PortfolioPost />} />
          <Route path="/phong-thuy" element={<FengShuiCompass />} />
          <Route path="/quy-trinh" element={<ProcessPage />} />
          <Route path="/cam-ket" element={<CommitmentPage />} />
        </Routes>
        <FloatingContact />
      </div>
    </BrowserRouter>
  );
}
