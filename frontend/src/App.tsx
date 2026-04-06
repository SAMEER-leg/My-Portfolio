import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LiquidFilter from './components/LiquidFilter';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <Router>
      <div className="relative isolate min-h-screen min-h-dvh w-full max-w-[100vw] overflow-x-clip">
        <div className="relative z-10 min-w-0">
          <CustomCursor />
          <LiquidFilter />
          <Header />

          <main className="min-h-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </Router>
  );
}
