import React from 'react';
import HistorySection from '@/components/about/HistorySection';
import MissionVisionValuesSection from '@/components/about/MissionVisionValuesSection';
import TeamSection from '@/components/about/TeamSection';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center my-8 md:my-12">
          About Anisham Foundation
        </h1>

        {/* Sections based on PRD */}
        <HistorySection />
        <MissionVisionValuesSection />
        <TeamSection />

        {/* Optional sections can be added later */}
        {/* <BoardSection /> */}
        {/* <ReportsSection /> */}
    </div>
  );
};

export default AboutPage;
