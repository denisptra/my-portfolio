import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import CTASection from '../components/CTASection';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';
import { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  const { t } = useApp();

  const experiences: ExperienceItem[] = [
    {
      id: '1',
      title: 'Graphic Design',
      company: 'PT Altindo Mitra Perkasa',
      location: 'Jawa Barat',
      period: 'Jan 2025 - Present',
      description: 'Specializing in visual branding and high-impact digital design assets for modern agencies.',
      iconType: 'design'
    },
    {
      id: '2',
      title: 'Head of Media & Information',
      company: 'Student Government Association',
      location: 'DKI Jakarta',
      period: 'Dec 2025 - Present',
      description: 'Leading digital communications and information strategy for campus-wide initiatives.',
      iconType: 'media'
    },
    {
      id: '3',
      title: 'Network & Application Tech',
      company: 'Dinas Komunikasi dan Informatika',
      location: 'Jawa Barat',
      period: 'May 2024 - Jun 2024',
      description: 'Focused on network maintenance and technical support for government-level application infrastructure.',
      iconType: 'tech'
    }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <Breadcrumbs />
        <h1 className="text-2xl md:text-3xl font-black text-[#37352f] mb-3 tracking-tight">
          {t.experience.title}
        </h1>
        <p className="text-[13px] text-[#37352f]/50 leading-relaxed font-medium">
          {t.experience.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-20">
        {experiences.map(item => (
          <ExperienceCard 
            key={item.id}
            title={item.title}
            subtitle={item.company}
            location={item.location}
            period={item.period}
            description={item.description}
            iconType={item.iconType}
          />
        ))}
      </div>

      <CTASection 
        emoji="👀"
        title={t.experience.ctaTitle}
        subtitle={t.cta.subtitle}
        buttonText={t.experience.ctaBtn}
      />
    </div>
  );
};

export default Experience;