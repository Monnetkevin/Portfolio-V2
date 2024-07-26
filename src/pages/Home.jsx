import React from "react";
import { Box } from "@mui/material";
import HeaderSection from "../components/header/HeaderSection";
import SkillsSection from "../components/skills/SkillsSection";
import SectionExperiences from "../components/experiences/SectionExperiences";
import SectionProjects from "../components/projects/SectionProjects";
import ContactSection from "../components/contact/ContactSection";
import SectionFooter from "../components/footer/SectionFooter";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <HeaderSection />
      <SkillsSection />
      <SectionProjects />
      <SectionExperiences />
      <ContactSection />
      <SectionFooter />
    </Box>
  );
}
