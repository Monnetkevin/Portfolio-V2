import React from "react";
import { Box } from "@mui/material";
import HeaderSection from "../components/header/HeaderSection";
import SkillsSection from "../components/skills/SkillsSection";
import SectionExperiences from "../components/experiences/SectionExperiences";
import SectionProjects from "../components/projects/SectionProjects";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#042940" }}>
      <HeaderSection />
      <SkillsSection />
      <SectionProjects />
      <SectionExperiences />
    </Box>
  );
}
