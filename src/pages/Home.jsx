import React from "react";
import { Box } from "@mui/material";
import HeaderSection from "../components/header/HeaderSection";
import SkillsSection from "../components/skills/SkillsSection";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#042940" }}>
      <HeaderSection />
      <SkillsSection />
    </Box>
  );
}
