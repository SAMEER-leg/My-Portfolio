import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { portfolioData } from '../portfolioData';
import { ArrowLeft, ExternalLink, ChevronRight, CheckCircle2, Target, Cpu } from 'lucide-react';
import ComingSoonModal from '../components/ComingSoonModal';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find((p) => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleLivePreview = (e: React.MouseEvent) => {
    e.preventDefault();
    if (project?.link) {
      window.open(project.link, '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
        <div className="glass-panel shine-border max-w-md rounded-[2rem] p-8 text-center sm:p-12">
          <h1 className="font-display text-3xl font-extrabold text-white md:text-4xl">Project not found</h1>
          <p className="mt-3 text-white/50">This work might have moved or doesn&apos;t exist.</p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-amber-bright via-amber-gold to-amber-dark px-8 py-3 font-bold text-black shadow-[0_8px_28px_rgba(217,162,14,0.3)]"
          >
            Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 pb-28 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pb-28 sm:pt-36 md:pb-32">
      <Link
        to="/"
        className="mb-12 inline-flex items-center gap-2 font-semibold text-amber-bright transition-transform hover:-translate-x-1 hover:text-white"
      >
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h1 className="mb-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              <span className="amber-heading">{project.title}</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl">
              {project.longDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-amber-gold/25 bg-amber-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-bright"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              onClick={handleLivePreview}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-bright via-amber-gold to-amber-dark px-8 py-4 text-base font-extrabold text-black shadow-[0_8px_32px_rgba(217,162,14,0.35)]"
            >
              Live Preview <ExternalLink size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          <div className="aspect-[3/2] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Milestone Badge / Quote Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative z-10 mt-6 w-full max-w-[280px] space-y-3 rounded-[2rem] border border-white/[0.08] bg-black/85 p-5 shadow-2xl backdrop-blur-xl sm:rounded-[2.25rem] sm:p-6 lg:absolute lg:-bottom-6 lg:-left-6 lg:mt-0 amber-glow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-bright to-amber-dark p-0.5 shadow-[0_6px_16px_rgba(217,162,14,0.3)]">
              <img
                src={portfolioData.profilePic}
                alt=""
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="text-sm italic leading-snug text-white/70">
              &ldquo;{project.whyMade}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-4 bg-amber-gold" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-gold">
                {portfolioData.name}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Purpose & Vision */}
      {project.purpose && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3rem] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12 md:p-16"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-amber-gold/20 text-amber-gold">
              <Target size={32} />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="amber-heading">Purpose</span> & Vision
              </h2>
              <p className="max-w-4xl text-lg leading-relaxed text-white/60 sm:text-xl">
                {project.purpose}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Key Features */}
      {project.features && (
        <section className="mt-24 space-y-12 sm:mt-32">
          <div className="text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              Key <span className="amber-heading">Features</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-amber-gold/30 hover:bg-white/[0.05]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-gold/10 text-amber-gold group-hover:bg-amber-gold group-hover:text-black transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-amber-bright transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack Details */}
      <section className="mt-24 sm:mt-32">
        <div className="rounded-[3rem] border border-white/[0.08] bg-black/40 p-8 sm:p-12 md:p-16 backdrop-blur-xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-gold font-bold tracking-widest uppercase text-xs">
                <Cpu size={16} /> Technical Architecture
              </div>
              <h2 className="font-display text-4xl font-extrabold tracking-tighter sm:text-5xl">
                The <span className="amber-heading">Stack</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4 lg:max-w-2xl lg:justify-end">
              {project.techStack.map((tech) => (
                <div key={tech} className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-16 md:flex-row">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/35">Next project</p>
        <motion.button
          onClick={() => {
            const currentIndex = portfolioData.projects.findIndex((p) => p.id === id);
            const nextProject = portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];
            navigate(`/project/${nextProject.id}`);
          }}
          whileHover={{ x: 10 }}
          className="group flex items-center gap-6 font-display text-3xl font-extrabold text-white hover:text-amber-bright md:text-5xl lg:text-7xl"
        >
          Explore more <ChevronRight size={64} className="text-amber-gold group-hover:translate-x-4 transition-transform" />
        </motion.button>
      </div>
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectName={project.title} 
      />
    </div>
  );
}
