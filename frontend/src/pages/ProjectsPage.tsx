import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { portfolioData } from '../portfolioData';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto min-h-screen min-h-dvh max-w-7xl overflow-x-clip px-4 pb-28 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pb-28 sm:pt-36 md:pb-32">
      <Link
        to="/"
        className="mb-14 inline-flex items-center gap-2 font-semibold text-amber-bright transition-transform hover:-translate-x-1 hover:text-white"
      >
        <ArrowLeft size={20} /> Back to Home
      </Link>

      <h1 className="mb-12 font-display text-4xl font-extrabold tracking-tighter sm:mb-16 sm:text-5xl md:mb-20 md:text-7xl lg:text-8xl">
        <span className="amber-heading">All</span>{' '}
        <span className="text-white">Projects</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
            className="project-card group relative block overflow-hidden rounded-[2.5rem] border border-white/[0.07] bg-white/[0.02] transition-all duration-500 cursor-pointer hover:border-white/[0.12] hover:-translate-y-1"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="space-y-4 p-6 relative z-10 sm:space-y-5 sm:p-8 md:p-10">
              <div className="flex flex-wrap gap-3">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-amber-gold/10 border border-amber-gold/20 text-amber-gold rounded-full font-bold">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                <span className="amber-heading">{project.title}</span>
              </h3>
              <p className="text-white/70 text-base line-clamp-2">{project.description}</p>
            </div>
            
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute right-8 top-8 z-20 flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-bright to-amber-gold text-black opacity-0 shadow-[0_8px_32px_rgba(217,162,14,0.4)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <ArrowUpRight size={28} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
