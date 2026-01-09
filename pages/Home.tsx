import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Tools from '../components/Tools';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { LayoutGrid, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { useApp } from '../AppContext';

const Home: React.FC = () => {
  const { t } = useApp();

  const latestProjects: Project[] = [
    {
      id: '1',
      title: 'Artics Digital Strategy',
      description: 'A company profile website built to support digital marketing campaigns. Strategic planning meets modern execution.',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
      link: '#'
    },
    {
      id: '2',
      title: 'Super League Indonesia',
      description: 'A modern football information website with clean UI and structured content. The digital home for national football fans.',
      imageUrl: 'https://images.unsplash.com/photo-1518091044124-0101b02ef249?q=80&w=1931&auto=format&fit=crop',
      link: '#'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Hero includes buttons above mockup now */}
      <Hero />
      
      {/* Spacing instead of extra buttons */}
      <div className="h-10 md:h-20 bg-white"></div>

      <Tools />
      
      {/* Latest Projects Section - Title and Show More side-by-side always */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-row items-end justify-between gap-4 mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#37352f] tracking-tight leading-none">
              {t.projects.title}
            </h2>
            <Link 
              to="/projects" 
              className="flex items-center text-[#37352f]/40 hover:text-black transition-colors text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.2em] pb-1 group border-b-2 border-transparent hover:border-black/5 whitespace-nowrap mb-1"
            >
              <LayoutGrid className="mr-1.5 sm:mr-2.5 w-3 h-3 sm:w-4 h-4" /> 
              <span className="hidden sm:inline">{t.projects.showMore}</span>
              <ArrowRight className="ml-1 sm:ml-2 w-3 sm:w-3.5 h-3 sm:h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {latestProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        variant="dark"
        emoji="👋"
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        buttonText={t.cta.sayHello}
      />
    </div>
  );
};

export default Home;