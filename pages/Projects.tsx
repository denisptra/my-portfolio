import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t } = useApp();

  const allProjects: Project[] = [
    {
      id: '1',
      title: 'Artics Communication',
      description: 'Strategic Digital Marketing platform with a clean, high-performance architecture.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'Super League Indonesia',
      description: 'Sports data tracking and match update system for premier league enthusiasts.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2670&auto=format&fit=crop'
    }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <Breadcrumbs />
        <h1 className="text-2xl md:text-3xl font-black text-[#37352f] mb-3 tracking-tight">
          {t.projects.portfolioTitle}
        </h1>
        <p className="text-[13px] text-[#37352f]/50 max-w-2xl leading-relaxed font-medium">
          {t.projects.portfolioSubtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;