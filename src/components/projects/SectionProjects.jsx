import { Container, Box, Typography } from "@mui/material";
import ProjectsWrapper from "./ProjectsWrapper";
import { PROJECTS } from "./Projects";
import { useTheme } from "@mui/material/styles";

const SectionProjects = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" id="projects">
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
        <Box component="div" sx={{ mb: "3rem" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Projects
          </Typography>
          <Box
            sx={{
              width: "35%",
              height: "3px",
              backgroundColor: theme.palette.secondary.main,
            }}
          />
        </Box>
        <ProjectsWrapper projects={PROJECTS} />
      </Box>
    </Container>
  );
};
export default SectionProjects;
