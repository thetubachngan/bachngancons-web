import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import PortfolioList from './pages/PortfolioList';
import PortfolioPost from './pages/PortfolioPost';

export default function App() {
  return (
    <BrowserRouter>
      <div className="antialiased min-h-screen flex flex-col selection:bg-accent selection:text-primary relative">
        <div className="noise-overlay"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/portfolio/:slug" element={<PortfolioPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
