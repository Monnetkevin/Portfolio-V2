import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import SkillsWrapper from "./SkillsWrapper";
import { LANGAGES_ICONS, STACKS_ICONS } from "./Skills";

const SkillsSection = () => {
  return (
    <Container maxWidth="xl" id="Compétences">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "2rem",
        }}
      >
        Compétences
      </Typography>

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={3}>
          <SkillsWrapper
            skills={LANGAGES_ICONS}
            title={"Langages et Frameworks"}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SkillsWrapper skills={STACKS_ICONS} title={"Stacks"} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsSection;
