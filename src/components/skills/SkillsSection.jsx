import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import SkillsWrapper from "./SkillsWrapper";
import { FRAMEWORKS_ICONS, LANGAGES_ICONS, STACKS_ICONS } from "./Skills";
import { useTheme } from "@mui/material/styles";

const SkillsSection = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" id="skills">
      <Box
        component="div"
        sx={{
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "3rem",
        }}
      >
        <Box component="div">
          <Typography variant="h4" component="h2" gutterBottom>
            Compétences
          </Typography>
          <Box
            sx={{
              width: "35%",
              height: "3px",
              backgroundColor: theme.palette.secondary.main,
            }}
          />
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Grid item xs={12} md={4}>
          <SkillsWrapper skills={LANGAGES_ICONS} title={"Technologies"} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillsWrapper skills={FRAMEWORKS_ICONS} title={"Frameworks"} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillsWrapper skills={STACKS_ICONS} title={"Stacks"} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsSection;
