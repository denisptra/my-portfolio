import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import CTASection from '../components/CTASection';
import Breadcrumbs from '../components/Breadcrumbs';
import { useApp } from '../AppContext';

const Study: React.FC = () => {
  const { t } = useApp();

  const education = [
    {
      id: '1',
      school: 'Cakrawala University',
      degree: 'Bachelor of Computer Science',
      major: 'Software Engineering',
      period: '2024 - Present',
      description: 'Deepening expertise in software architecture, cloud systems, and modern development paradigms.',
      iconType: 'university' as const
    },
    {
      id: '2',
      school: 'Pesantren Teknologi Informasi & Komunikasi',
      degree: 'Professional Certification',
      major: 'Junior Web Developer',
      period: '2023 - 2024',
      description: 'Intensive one-year bootcamp focused on full-stack development and practical coding skills.',
      iconType: 'code' as const
    },
    {
      id: '3',
      school: 'Madrasah Aliyah Al-Tsaqafah',
      degree: 'Science Track',
      major: 'Natural Sciences (IPA)',
      period: '2020 - 2023',
      description: 'Built a strong foundation in analytical thinking within an integrated curriculum.',
      iconType: 'school' as const
    }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <Breadcrumbs />
        <h1 className="text-2xl md:text-3xl font-black text-[#37352f] mb-3 tracking-tight">
          {t.study.title}
        </h1>
        <p className="text-[13px] text-[#37352f]/50 leading-relaxed font-medium">
          {t.study.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mb-20">
        {education.map(item => (
          <ExperienceCard 
            key={item.id}
            title={item.school}
            subtitle={item.degree}
            location={item.major}
            period={item.period}
            description={item.description}
            iconType={item.iconType}
            isEducation
          />
        ))}
      </div>

      <CTASection 
        emoji="🎓"
        title={t.experience.ctaTitle}
        subtitle={t.cta.subtitle}
        buttonText={t.experience.ctaBtn}
      />
    </div>
  );
};

export default Study;