import React from "react";
import HomeHero from "../components/HomeHero";
import Counters from "../components/Counters";
import ProjectSection from "../components/ProjectSection";
import ExperienceSextion from "../components/ExperienceSextion";
import EducationSkills from "../components/EducationSkills";
import ReviewSection from "../components/ReviewSection";
import AssignmentSection from "../components/AssignmentSection";

function Home() {
  return (
    <div className="main-wrap">
      <HomeHero />
      <Counters />
      <ProjectSection />
      <ExperienceSextion />
      <EducationSkills />
      <ReviewSection />
      <AssignmentSection />
    </div>
  );
}

export default Home;
