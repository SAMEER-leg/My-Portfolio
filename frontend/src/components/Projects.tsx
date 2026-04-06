import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { portfolioData } from '../portfolioData';
import { ArrowUpRight } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';

export default function Projects() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<string | undefined>();

  const handleLivePreview = (e: React.MouseEvent, project: any) => {
    e.stopPropagation();
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      setCurrentProject(project.title);
      setIsModalOpen(true);
    }
  };
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="mb-12 flex flex-col justify-between gap-8 sm:mb-16 md:mb-20 md:flex-row md:items-end md:gap-10">
        <div className="min-w-0">
          <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tighter sm:mb-6 sm:text-5xl md:text-7xl">
            <span className="amber-heading">Selected</span>{' '}
            <span className="text-white">Works</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            A collection of projects that push the boundaries of digital design and development.
          </p>
        </div>
        <Link
          to="/projects"
          className="group inline-flex shrink-0 items-center gap-2 text-base font-bold text-amber-bright transition-colors hover:text-white sm:gap-3 sm:text-lg md:self-end"
        >
          View All Projects{' '}
          <ArrowUpRight
            size={24}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            
            <button
              onClick={(e) => handleLivePreview(e, project)}
              className="absolute right-8 top-8 z-20 flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-bright to-amber-gold text-black opacity-0 shadow-[0_8px_32px_rgba(217,162,14,0.4)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <ArrowUpRight size={28} />
            </button>
          </div>
        ))}
      </div>

      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectName={currentProject} 
      />
    </section>
  );
}
